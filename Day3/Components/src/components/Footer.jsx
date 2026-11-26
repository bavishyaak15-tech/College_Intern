
import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-about">
          <a href="#home" className="logo">
            Learn<span>Hub.</span>
          </a>

          <p>
            Empowering students with practical skills
            and knowledge to build a brighter future.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#courses">Our Courses</a>
        </div>

        <div className="footer-links">
          <h3>Contact Us</h3>
          <p>Email: info@learnhub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Coimbatore, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} LearnHub.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
