import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Mock Student Data (Replace with real authentication data)
  const student = {
    name: "Alice Johnson",
    domain: "Data Science",
    contact: "+123 456 7890",
    about: "Aspiring data scientist passionate about machine learning and AI.",
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>

      {/* Student Info Section */}
      <div className="user-info">
        <h2>{student.name}</h2>
        <p><strong>Domain:</strong> {student.domain}</p>
        <p><strong>Contact:</strong> {student.contact}</p>
        <p><strong>About Me:</strong> {student.about}</p>
      </div>

      {/* Explore Projects Button */}
      <button className="explore-projects-btn" onClick={() => navigate("/opportunities")}>
        Explore Opportunities
      </button>
    </div>
  );
};

export default StudentDashboard;
