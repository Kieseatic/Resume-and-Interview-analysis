import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const Home = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Welcome to ATS AI Project
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Analyze interviews, resumes, and job descriptions with ease!
            </Typography>
            <Box mt={4}>
                <Link to="/upload-interview" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
                        Upload Interview
                    </Button>
                </Link>
                <Link to="/upload-resume" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="secondary" size="large">
                        Upload Resume & Job Description
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default Home;
