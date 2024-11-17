import React from "react";
import { Box, Typography, Paper, Chip, Grid, Divider } from "@mui/material";

const AnalysisResult = ({ result }) => {
    if (!result) {
        return null; // Don't render if there's no result
    }

    const { contextual_summary, keyword_match_percentage, matched_keywords } = result;

    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                mt: 4,
                borderRadius: 2,
                backgroundColor: "#f9f9f9",
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Analysis Result
            </Typography>

            {/* Contextual Summary */}
            <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Contextual Summary
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {contextual_summary}
                </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Keyword Match */}
            <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Keyword Match
                </Typography>
                <Grid container spacing={2}>
                    {/* Keyword Match Percentage */}
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            <strong>Keyword Match Percentage:</strong> {keyword_match_percentage}%
                        </Typography>
                    </Grid>

                    {/* Matched Keywords */}
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            <strong>Matched Keywords:</strong>
                        </Typography>
                        <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
                            {matched_keywords.map((keyword, index) => (
                                <Chip
                                    key={index}
                                    label={keyword}
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                />
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default AnalysisResult;
