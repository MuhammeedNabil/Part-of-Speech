/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  {/* --------------------------------------Navigation Functions-------------------------------- */}
  const navigate = useNavigate();
  function goToStudy() {
    navigate("/study");
  }
  function goToPractice() {
    navigate("/words");
  }
  return (
    <>
      <div className="row h-50  p-5 m-auto justify-content-between align-items-center">
        {/* ----------------------------------------Study Button-------------------------------- */}
        <div onClick={goToStudy} className={`${styles.studyContainer}  col-md-5`}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <i
              className={`fa-solid fa-book-open ${styles.icons} ${styles.border}`}
            ></i>
          </div>
          <p className="text-center fs-5 fw-bolder">Study</p>
        </div>

        {/* ----------------------------------------practice Button-------------------------------- */}
        <div onClick={goToPractice} className={`${styles.studyContainer} col-md-5`}>
          <div className={` d-flex justify-content-center align-items-center`}>
            <i
              className={`fa-solid fa-receipt ${styles.icons} ${styles.border}`}
            ></i>
          </div>
          <p className="text-center fs-5 fw-bolder">Practice</p>
        </div>
      </div>
    </>
  );
}
