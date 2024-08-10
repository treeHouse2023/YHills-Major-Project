import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faInfoCircle,
  faListAlt,
  faLightbulb,
  faLifeRing,
  faClipboardList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/about"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faPizzaSlice} size="2x" className="me-2" />
            <span className="fs-4">Pizza Store</span>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                <FontAwesomeIcon icon={faInfoCircle} className="me-1" /> About
                Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link px-2 text-white">
                <FontAwesomeIcon icon={faListAlt} className="me-1" /> Products
              </Link>
            </li>
            <li>
              <Link to="/vision" className="nav-link px-2 text-white">
                <FontAwesomeIcon icon={faLightbulb} className="me-1" /> Vision
              </Link>
            </li>
            <li>
              <Link to="/support" className="nav-link px-2 text-white">
                <FontAwesomeIcon icon={faLifeRing} className="me-1" /> Support
              </Link>
            </li>
            <li>
              <Link to="/guidelines" className="nav-link px-2 text-white">
                <FontAwesomeIcon icon={faClipboardList} className="me-1" />{" "}
                Guidelines
              </Link>
            </li>
            <li>
              <Link to="/add-products" className="nav-link px-2 text-white">
                <FontAwesomeIcon icon={faPlus} className="me-1" /> Add New
                Product
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
