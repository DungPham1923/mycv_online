import React from "react";
import Image from "next/image";
const Education = () => {
  return (
    <div className="card__about">
      <div className="about_title">
        <span className="text-light">EDUCATION {"&"}</span>
        <span className="text-warning">Journey</span>
      </div>
      <button className="front__end funix">
        <h3 className="text-light">Current</h3>
      </button>
      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-end">
          <img
            src="/school/fptuniversity.png"
            alt=""
            width="200"
            height="120"
          />
        </div>
        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              IT student majoring in Software Engineering
            </h3>
            <div
              className="p-2 text-warning border d-flex justify-content-center align-items-center border-warning rounded fw-bold fs-5"
              style={{ width: "150px" }}
            >
              2021 - 2025
            </div>
            <p className="text-light mt-2">
              /// 3rd year student at FPT University Hanoi.
            </p>
            <p className="text-light mt-2">/// GPA 3.62/4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
