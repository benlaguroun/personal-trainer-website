import React from "react";
import "./MenuBar.css"; // Assuming you want to style your menu

const MenuBar = () => {
  return (
    <header className="menu-bar">
      <div className="logo">
        <h1>My Website</h1> {/* Placeholder for your logo */}
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
