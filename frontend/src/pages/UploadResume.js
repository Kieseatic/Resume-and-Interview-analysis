import React, { useState } from "react";
import axios from "axios";
import ResumeAnalysis from "../components/resumeAnalysis";
import { Container, Typography, Button, Paper, Box, Divider, Alert } from "@mui/material";

const UploadResume = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState(null);
    const [resumeUploaded, setResumeUploaded] = useState(false);
    const [jobUploaded, setJobUploaded] = useState(false);
    const [result, setResult] = useState(null);

    const handleResumeChange = (e) => setResume(e.target.files[0]);
    const handleJobDescriptionChange = (e) => setJobDescription(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resume || !jobDescription) {
            alert("Please upload both resume and job description.");
            return;
        }

        const resumeFormData = new FormData();
        resumeFormData.append("resume", resume);

        try {
            const resumeResponse = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/upload_resume`,
                resumeFormData
            );
            console.log("Resume Upload Response:", resumeResponse.data);
            setResumeUploaded(true);
        } catch (error) {
            console.error("Error uploading resume:", error);
            alert("Failed to upload resume.");
            setResumeUploaded(false);
            return;
        }

        const jobDescriptionFormData = new FormData();
        jobDescriptionFormData.append("job_description", jobDescription);

        try {
            const jobDescriptionResponse = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/upload_job_description`,
                jobDescriptionFormData
            );
            console.log("Job Description Upload Response:", jobDescriptionResponse.data);
            setJobUploaded(true);
        } catch (error) {
            console.error("Error uploading job description:", error);
            alert("Failed to upload job description.");
            setJobUploaded(false);
            return;
        }

        try {
            const analysisResponse = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/upload_resume`,
                resumeFormData
            );
            setResult(analysisResponse.data);
        } catch (error) {
            console.error("Error fetching analysis:", error);
            alert("Failed to fetch analysis.");
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Upload Resume & Job Description
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Upload Resume (PDF)
                        </Typography>
                        <Button variant="contained" component="label" color="primary" size="large">
                            Choose Resume
                            <input type="file" accept=".pdf" hidden onChange={handleResumeChange} />
                        </Button>
                        {resumeUploaded ? (
                            <Alert severity="success">Resume uploaded successfully!</Alert>
                        ) : (
                            resume && (
                                <Alert severity="info">Resume selected: {resume.name}</Alert>
                            )
                        )}

                        <Typography variant="h6" fontWeight="bold">
                            Upload Job Description (JSON/TXT)
                        </Typography>
                        <Button
                            variant="contained"
                            component="label"
                            color="secondary"
                            size="large"
                        >
                            Choose Job Description
                            <input
                                type="file"
                                accept=".json,.txt"
                                hidden
                                onChange={handleJobDescriptionChange}
                            />
                        </Button>
                        {jobUploaded ? (
                            <Alert severity="success">
                                Job description uploaded successfully!
                            </Alert>
                        ) : (
                            jobDescription && (
                                <Alert severity="info">
                                    Job description selected: {jobDescription.name}
                                </Alert>
                            )
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            size="large"
                            sx={{ mt: 3 }}
                            disabled={!resume || !jobDescription}
                        >
                            Upload & Analyze
                        </Button>
                    </Box>
                </form>

                <ResumeAnalysis result={result} />
            </Paper>
        </Container>
    );
};

export default UploadResume;
