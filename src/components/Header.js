import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Library</h1>
      <div className="navbar">
        <Link to="/" className="link">
          Library
        </Link>
        <Link to="/add" className="link">
          Add Book
        </Link>
      </div>
    </header>
  );
};

export default Header;
