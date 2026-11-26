
import React from "react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
          alt="Team collaborating on a project"
        />
      </div>

      <div className="about-content">
        <p className="section-tag">ABOUT LEARNHUB</p>

        <h2>
          Learn New Skills.
          <br />
          Create New Opportunities.
        </h2>

        <p>
          LearnHub is a modern learning platform designed
          to help students and professionals gain practical
          knowledge and build skills for the future.
        </p>

        <div className="about-features">
          <div>
            <span>✓</span>
            <p>Industry-relevant learning materials</p>
          </div>

          <div>
            <span>✓</span>
            <p>Hands-on projects and practical experience</p>
          </div>

          <div>
            <span>✓</span>
            <p>Learn anytime, anywhere</p>
          </div>
        </div>

        <a href="#courses" className="primary-btn">
          Discover More
        </a>
      </div>
    </section>
  );
}

export default About;
