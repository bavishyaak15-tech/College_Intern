
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Learn<span>Hub.</span>
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#courses" className="nav-button">
        Explore Courses
      </a>
    </nav>
  );
}

export default Navbar;
