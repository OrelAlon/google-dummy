import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

import "./style/navbar.css";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/" className={darkTheme ? "dark link" : "white link"}>
          <p>Goog-el 🔎</p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "Light 💡" : "Dark 💻"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
