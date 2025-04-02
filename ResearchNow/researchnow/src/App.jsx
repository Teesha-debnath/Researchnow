import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import FacultyLogin from "./pages/FacultyLogin";
import OngoingProjects from "./pages/OngoingProjects";
import Opportunities from "./pages/Opportunities";
import Faculties from "./pages/Faculties";
import SignUp from "./pages/SignUp";
import "./index.css"; // Ensuring global styles are included

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/faculties" element={<Faculties />} />
      </Routes>
    </Router>
  );
};

export default App;
