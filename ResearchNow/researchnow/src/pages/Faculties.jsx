import React, { useState } from "react";
import "./Faculties.css";

const facultiesData = [
  { id: 1, name: "Dr. John Doe", department: "Computer Science", research: "Artificial Intelligence", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Dr. Jane Smith", department: "Physics", research: "Quantum Computing", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Dr. Emily Johnson", department: "Biology", research: "Genetic Engineering", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Dr. Michael Brown", department: "Mathematics", research: "Cryptography", image: "https://i.pravatar.cc/150?img=4" },
];

const Faculties = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaculties = facultiesData.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.research.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faculties-container">
      <h1 className="page-title">Meet Our Faculty</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search faculty..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Faculty List */}
      <div className="faculties-grid">
        {filteredFaculties.length > 0 ? (
          filteredFaculties.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <img src={faculty.image} alt={faculty.name} className="faculty-image" />
              <div className="faculty-info">
                <h3>{faculty.name}</h3>
                <p className="faculty-department">{faculty.department}</p>
                <p className="faculty-research">{faculty.research}</p>
                <button className="profile-button">View Profile</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No faculty members found.</p>
        )}
      </div>
    </div>
  );
};

export default Faculties;
