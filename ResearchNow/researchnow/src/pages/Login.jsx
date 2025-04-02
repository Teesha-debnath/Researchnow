import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student"); // Default to Student
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating authentication and storing role
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    // Redirect based on role
    if (role === "student") {
      navigate("/student-dashboard");
    } else if (role === "faculty") {
      navigate("/faculty-dashboard");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {/* Role Selection */}
      <div className="role-selection">
        <button className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>
          Student
        </button>
        <button className={role === "faculty" ? "active" : ""} onClick={() => setRole("faculty")}>
          Faculty
        </button>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">Login as {role}</button>
      </form>

      {/* Signup Option */}
      <p className="signup-option">
        Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
