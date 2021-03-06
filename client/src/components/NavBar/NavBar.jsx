import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper" className="center">
        <Link to="/" className="brand-logo">
          Sone Ke Sikke
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink
              to="/products"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0,.1)" }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0,.1)" }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0,.1)" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0,.1)" }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
