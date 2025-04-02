import React from 'react'
import "./AboutUs.css";
// import aboutImage from "../../assets/about-us.jpg";

const Aboutus = () => {
  return (
    <div className="about-container">
    <div className="about-content">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>ResearchNow</strong>, an innovative educational platform connecting students and faculty 
        with valuable research and learning opportunities. Our mission is to bridge the gap between aspiring 
        researchers and real-world projects, fostering growth and collaboration.
      </p>
      <p>
        Join us to explore, learn, and contribute to cutting-edge developments in various fields. 
        Your journey to knowledge starts here!
      </p>
    </div>
    <div className="about-image">
      {/* <img src={aboutImage} alt="About Us" /> */}
      <img src="" alt="" />
    </div>
  </div>
  )
}

export default Aboutus
