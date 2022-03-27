import React from "react";
import { Link } from "react-router-dom";
import AddContactForm from "../addContactForm";

const NavbarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Contact App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="dropdown mx-2">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </button>
                  <ul
                    className="dropdown-menu text-center w-25 mx-auto my-2"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link to="/family" className="nav-link">
                      Family
                    </Link>
                    <Link to="/friend" className="nav-link">
                      Friend
                    </Link>
                    <Link to="/work" className="nav-link">
                      Work
                    </Link>
                  </ul>
                </div>
              </li>
              <div className="mx-2">
                <AddContactForm/>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
