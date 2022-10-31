/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light  fixed-top ${styles.bgAnimate}`}
      >
        <div className="container">
          {/* ----------------------------------------Navbar BrandName-------------------------------- */}
          <Link className={`${styles.headLine} navbar-brand`} to={"/home"}>
            Yla English
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* ----------------------------------------Navbar Links---------------------------------- */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/help"}>
                  Help
                </Link>
              </li>
            </ul>
            {/* ----------------------------------------Navbar SocialMedia---------------------------- */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.social}`}
                  href="https://mohamed-n-portfolio.web.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.social}`}
                  href="https://www.linkedin.com/in/m-nabilbkr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.social}`}
                  href="https://github.com/MuhammeedNabil/Part-of-Speech"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
