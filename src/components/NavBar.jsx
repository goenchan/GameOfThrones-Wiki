import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    //Import bootstrap format,  1. class => className  2. a => NavLink  3. href => to  4. Set path and title 5. Import Link/NavLink
    //NavLink is for active class
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Game of Thrones
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/history">
            History
          </NavLink>
          <NavLink className="nav-item nav-link" to="/forces">
            Forces
          </NavLink>
          <NavLink className="nav-item nav-link" to="/houses">
            Houses
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;