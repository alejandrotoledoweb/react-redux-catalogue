import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <main className="navbar">
    <div>
      <h3>Title of the project</h3>
    </div>
    <div className="links">
      <Link to="/" className="btn-link">Home</Link>
      <Link to="/about" className="btn-link">About</Link>
    </div>
  </main>
);

export default Navbar;
