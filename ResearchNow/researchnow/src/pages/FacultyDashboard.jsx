import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FacultyDashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Retrieve user role from local storage (or replace with authentication logic)
    const role = localStorage.getItem("userRole");
    
    if (role === "student") {
      navigate("/student-dashboard");
    } else if (role === "faculty") {
      navigate("/faculty-dashboard");
    } else {
      navigate("/login"); // Redirect to login if no role is found
    }

    setUserRole(role);
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1>Redirecting...</h1>
    </div>
  );
};

export default Dashboard;
