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

function Footer() {
  return (
    <footer className="p-3 text-bg-dark">
      <div className="container text-center">
        <div className="mb-3">
          <Link to="/about" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
            <span className="fs-4 ms-2">Pizza Store</span>
          </Link>
        </div>

        <ul className="nav justify-content-center mb-3">
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-white">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link px-2 text-white">
              <FontAwesomeIcon icon={faListAlt} /> Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/vision" className="nav-link px-2 text-white">
              <FontAwesomeIcon icon={faLightbulb} /> Vision
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link px-2 text-white">
              <FontAwesomeIcon icon={faLifeRing} /> Support
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guidelines" className="nav-link px-2 text-white">
              <FontAwesomeIcon icon={faClipboardList} /> Guidelines
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-products" className="nav-link px-2 text-white">
              <FontAwesomeIcon icon={faPlus} /> Add New Product
            </Link>
          </li>
        </ul>

        <p className="text-white">
          <small>&copy; 2024 Pizza Store. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
