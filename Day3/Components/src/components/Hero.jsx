
import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">
          LEARN. GROW. SUCCEED.
        </p>

        <h1>
          Build Your Future
          <br />
          With <span>LearnHub</span>
        </h1>

        <p className="hero-description">
          Discover practical courses, develop new skills,
          and take the next step toward your dream career.
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="primary-btn">
            Explore Courses
          </a>

          <a href="#about" className="secondary-btn">
            Learn More
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>50+</h3>
            <p>Courses</p>
          </div>

          <div>
            <h3>10K+</h3>
            <p>Learners</p>
          </div>

          <div>
            <h3>95%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          alt="Students learning together"
        />
      </div>
    </section>
  );
}

export default Hero;
