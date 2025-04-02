import React, { useState } from "react";
import "./Opportunities.css";

const opportunitiesData = [
  { id: 1, title: "AI Research Internship", Professor: "John doe", category: "AI/ML" },
  { id: 2, title: "Data Science Fellowship",  Professor: "John doe", category: "Data Science" },
  { id: 3, title: "Cybersecurity Analyst Role", Professor: "San Francisco", category: "Cybersecurity" },
  { id: 4, title: "Quantum Computing Internship", Professor: "Remote", category: "Quantum Computing" },
];

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOpportunities = opportunitiesData.filter((opportunity) =>
    opportunity.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="opportunities-container">
      <h1 className="page-title">Explore Research Opportunities</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search opportunities..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Opportunities List */}
      <div className="opportunities-list">
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-card">
              <h3>{opportunity.title}</h3>
              <p><strong>Professor:</strong> {opportunity.Professor}</p>
              <p><strong>Category:</strong> {opportunity.category}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No opportunities found.</p>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
