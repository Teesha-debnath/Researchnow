import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student"); // Default to Student
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store user role in local storage
    localStorage.setItem("userRole", role);

    // Redirect based on role
    if (role === "student") {
      navigate("/student-dashboard");
    } else if (role === "faculty") {
      navigate("/faculty-dashboard");
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      {/* Role Selection */}
      <div className="role-selection">
        <button className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>
          Student
        </button>
        <button className={role === "faculty" ? "active" : ""} onClick={() => setRole("faculty")}>
          Faculty
        </button>
      </div>

      {/* Sign-Up Form */}
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-button">Sign Up as {role}</button>
      </form>

      {/* Login Option */}
      <p className="login-option">
        Already have an account? <span onClick={() => navigate("/login")}>Log in</span>
      </p>
    </div>
  );
};

export default SignUp;
