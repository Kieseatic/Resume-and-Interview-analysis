
# **ATS AI Project: Automated Resume and Interview Analyzer**

A cutting-edge platform designed to streamline hiring processes by automating interview analysis and resume-job matching using AI-powered tools.

---

## **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## **Overview**
The **ATS AI Project** leverages artificial intelligence to simplify the recruitment process by analyzing resumes and interview videos. It evaluates candidates’ skills, experience, and qualifications to match them with job descriptions, providing recruiters with actionable insights.

---

## **Features**
- **Resume Analysis:**
  - Extracts text from uploaded resumes.
  - Matches resumes with job descriptions based on skills, qualifications, and contextual similarity.
  - Generates detailed analytics, including keyword matching and overall fit scores.

- **Interview Analysis:**
  - Transcribes interview videos using OpenAI Whisper API.
  - Evaluates interview answers for keyword relevance and context.
  - Provides feedback on interview performance.

- **User-Friendly Interface:**
  - Intuitive UI built with Material-UI for seamless navigation.
  - Real-time progress indicators for file uploads.
  - Comprehensive visual representation of analysis results.

---

## **Tech Stack**
- **Frontend:** React.js, Material-UI
- **Backend:** Flask (Python), REST APIs
- **AI Tools:** OpenAI Whisper API
- **Database:** MongoDB
- **Deployment:** Docker, AWS

---

## **Setup and Installation**

### **Frontend**
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### **Backend**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the backend server:
   ```bash
   python app.py
   ```

### **To Run the App**
1. Ensure both the frontend and backend servers are running.
2. Open your browser and navigate to `http://localhost:3000` to access the application.

---

## **How It Works**

### **Resume Analysis**
1. Upload a resume (PDF format) and a job description (JSON/TXT format).
2. The system extracts text, compares it with job requirements, and provides a detailed analysis, including:
   - **Skill Match**
   - **Experience Match**
   - **Education Fit**
   - **Contextual Similarity**

### **Interview Analysis**
1. Upload an interview video.
2. The system transcribes the video, analyzes responses for relevance and context, and offers feedback on performance.

### **Result Display**
- Interactive UI showing visualized results, such as match scores and recommendations for improvement.

---

## **Screenshots**
**Resume Analysis**  
*(Add screenshots of the resume analysis page with match details.)*

**Interview Analysis**  
*(Add screenshots of the interview analysis page with transcriptions and feedback.)*

---

## **Future Improvements**
- **Enhanced Analysis:** Incorporate sentiment analysis for better interview evaluation.
- **Multi-language Support:** Extend functionality to analyze resumes and interviews in different languages.
- **Mobile App Integration:** Develop a mobile-friendly version of the platform.

---

## **Contributing**
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
- **Name:** Harsh Dugar
- **Email:** harshdugar1234@gmail.com 
- **GitHub:** [@kieseatic](https://github.com/kieseatic)  
- **LinkedIn:** [Harsh Dugar](https://www.linkedin.com/in/harsh3239/)

---
