import React, { useState } from "react";
import { uploadInterview, analyzeInterview } from "../api/interviewApi";
import AnalysisResult from "../components/AnalysisResult"; 
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Divider,
    Paper,
    LinearProgress,
} from "@mui/material";
import axios from "axios"; 

const UploadInterview = () => {
    const [file, setFile] = useState(null);
    const [metadata, setMetadata] = useState({ interviewee: "", position: "" });
    const [query, setQuery] = useState("");
    const [jobKeywords, setJobKeywords] = useState("");
    const [result, setResult] = useState(null);
    const [uploading, setUploading] = useState(false); // Track upload progress
    const [uploadProgress, setUploadProgress] = useState(0); // Upload progress percentage

    const handleFileChange = (e) => setFile(e.target.files[0]);
    const handleMetadataChange = (e) =>
        setMetadata({ ...metadata, [e.target.name]: e.target.value });

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a video to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("interview_video", file);
        Object.entries(metadata).forEach(([key, value]) => formData.append(key, value));

        setUploading(true);
        setUploadProgress(0);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/upload_interview`,
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(progress); // Update progress state
                    },
                }
            );
            console.log("Upload Response:", response);
            alert("Interview uploaded successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to upload interview.");
        } finally {
            setUploading(false);
        }
    };

    const handleAnalyze = async () => {
        try {
            const keywordsArray = jobKeywords.split(",").map((keyword) => keyword.trim());
            const response = await analyzeInterview(query, keywordsArray);
            setResult(response);
        } catch (error) {
            console.error(error);
            alert("Failed to analyze interview.");
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Upload Interview
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Box display="flex" flexDirection="column" gap={3}>
                    {/* File Upload */}
                    <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        size="large"
                        sx={{ alignSelf: "flex-start" }}
                    >
                        Upload Video
                        <input
                            type="file"
                            hidden
                            onChange={handleFileChange}
                            accept="video/*"
                        />
                    </Button>

                    {/* Progress Bar */}
                    {uploading && (
                        <Box sx={{ width: "100%", mt: 2 }}>
                            <LinearProgress variant="determinate" value={uploadProgress} />
                            <Typography align="center" sx={{ mt: 1 }}>
                                Uploading: {uploadProgress}%
                            </Typography>
                        </Box>
                    )}

                    {/* Interviewee Name */}
                    <TextField
                        label="Interviewee Name"
                        name="interviewee"
                        value={metadata.interviewee}
                        onChange={handleMetadataChange}
                        fullWidth
                        required
                    />

                    {/* Position */}
                    <TextField
                        label="Position"
                        name="position"
                        value={metadata.position}
                        onChange={handleMetadataChange}
                        fullWidth
                        required
                    />

                    {/* Upload Button */}
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        onClick={handleUpload}
                        sx={{ alignSelf: "flex-start" }}
                        disabled={uploading} // Disable button while uploading
                    >
                        Upload
                    </Button>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Analysis Section */}
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Analyze Interview
                </Typography>
                <Box display="flex" flexDirection="column" gap={3}>
                    {/* Query */}
                    <TextField
                        label="Query (e.g., 'Tell me about yourself')"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        fullWidth
                        required
                    />

                    {/* Job Keywords */}
                    <TextField
                        label="Job Keywords (comma-separated)"
                        value={jobKeywords}
                        onChange={(e) => setJobKeywords(e.target.value)}
                        fullWidth
                        required
                    />

                    {/* Analyze Button */}
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={handleAnalyze}
                        sx={{ alignSelf: "flex-start" }}
                    >
                        Analyze
                    </Button>
                </Box>

                {/* Result Section */}
                {result && <AnalysisResult result={result} />}
            </Paper>
        </Container>
    );
};

export default UploadInterview;
