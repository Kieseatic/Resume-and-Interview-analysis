import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

const ResumeAnalysis = ({ result }) => {
    if (!result || !result.matches || result.matches.length === 0) {
        return (
            <Box mt={4}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    No Matches Found
                </Typography>
                <Typography variant="body1">
                    We couldn't find any job matches for the uploaded resume and job description.
                </Typography>
            </Box>
        );
    }

    return (
        <Box mt={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Resume Analysis Results
            </Typography>
            {result.matches.map((match, index) => (
                <Paper
                    key={index}
                    variant="outlined"
                    sx={{ p: 2, mb: 3, backgroundColor: "#f9f9f9" }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Job Title: {match.details.title || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Experience Required:</strong>{" "}
                        {match.details.experience_required || "Not Specified"}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Qualifications:</strong>{" "}
                        {match.details.qualifications || "Not Specified"}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Responsibilities:</strong>{" "}
                        {match.details.responsibilities || "Not Specified"}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" fontWeight="bold">
                        Skill Match
                    </Typography>
                    <Typography variant="body1">
                        <strong>Matched Skills:</strong>{" "}
                        {match.explanation["Skill Match"]?.matched?.length > 0
                            ? match.explanation["Skill Match"].matched.join(", ")
                            : "None"}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Unmatched Skills:</strong>{" "}
                        {match.explanation["Skill Match"]?.unmatched?.length > 0
                            ? match.explanation["Skill Match"].unmatched.join(", ")
                            : "None"}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" fontWeight="bold">
                        Score Summary
                    </Typography>
                    <Typography variant="body1">
                        <strong>Skill Match Score:</strong>{" "}
                        {match.explanation["Skill Match"]?.score || "N/A"}%
                    </Typography>
                    <Typography variant="body1">
                        <strong>Experience Match Score:</strong>{" "}
                        {match.explanation["Experience Match"]?.score || "N/A"}%
                    </Typography>
                    <Typography variant="body1">
                        <strong>Contextual Similarity:</strong>{" "}
                        {match.explanation["Contextual Similarity"]?.score || "N/A"}%
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" fontWeight="bold">
                        Education Fit
                    </Typography>
                    <Typography variant="body1">
                        {match.explanation["Education Fit"]?.details || "N/A"}
                    </Typography>
                </Paper>
            ))}
        </Box>
    );
};

export default ResumeAnalysis;
