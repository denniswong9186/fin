import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul>
        <li><Link to="/welcome">Home Page</Link></li>
        <li><Link to="/expenses">Budgeting</Link></li>
        <li><Link to="/mortgage">Mortgage</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        </ul>
    </nav>
  );
};

export default NavBar;
