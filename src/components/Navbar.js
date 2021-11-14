import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <ul className="nav me-auto mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleHandler}
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            for="flexSwitchCheckDefault"
          >
            DarkMode
          </label>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div> */}

        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string
};
Navbar.defaultProps = {
  title: "set title here"
};
