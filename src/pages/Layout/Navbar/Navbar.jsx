import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import profilePic from "../../../imges/Group (2).svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <form className="d-flex w-25 position-relative" role="search">
            <input
              className="form-control me-2 h-50 bg-transparent inp text-light rounded-5 px-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <i className="fa-solid fa-magnifying-glass "></i>
            <i className="fa-solid fa-sliders"></i>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center ">
              <li className="nav-item me-2  ">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-brands fa-rocketchat fs-4"></i>
                </Link>
              </li>
              <li className="nav-item me-2 ">
                <Link className="nav-link text-white" to="/">
                  <i className="fa-regular fa-bell fs-4"></i>
                </Link>
              </li>
              <li className="nav-item me-2 ">
                <Link className="nav-link text-white" to="/">
                  <img src={profilePic} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
