import React from "react";
import Image from 'next/image'

const Experience = () => {
  return (
    <div className="card__about">
      <div className="about_title">
        <span className="text-warning">EXPERIENCE {"&"}</span>
        <span className="text-light">skills</span>
      </div>

      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-end">
          <img src="/java.png" alt="" width="200" height="120" />
        </div>

        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              Backend with Java
            </h3>
            <div
              className="p-2 text-warning border d-flex justify-content-center align-items-center border-warning rounded fw-bold fs-5"
              style={{ width: "200px" }}
            >
              1 year EXP
            </div>
            <p className="text-light mt-2">
              1 year experiences with Java. Backend web developers with Java JspServlet & SpringBoot.
            </p>
          </div>
        </div>
      </div>


      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-end">
          <img src="/csharp.png" alt="" width="200" height="120" />
        </div>

        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              Backend with C#
            </h3>
            <div
              className="p-2 text-warning border d-flex justify-content-center align-items-center border-warning rounded fw-bold fs-5"
              style={{ width: "200px" }}
            >
              4 month EXP
            </div>
            <p className="text-light mt-2">
              4 month experiences with C#. Backend web developers with C# WPF & ASP.NET.
            </p>
          </div>
        </div>
      </div>


      {/* <button className="front__end funix">ABC</button> */}
      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-end">
          <Image src="/reactjs.svg" alt="" width="200" height="120" />
        </div>

        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              Front-End Web developer with ReactJs
            </h3>
            <div
              className="p-2 text-warning border d-flex justify-content-center align-items-center border-warning rounded fw-bold fs-5"
              style={{ width: "200px" }}
            >
              1,5 month EXP
            </div>
            <p className="text-light mt-2">
              1,5 month experiences with ReactJS, React-Hook, React-Router,
              Redux core, Redux-Saga middleware.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-end">
          <img src="/nextjs.png" alt="" width="200" height="120" />
        </div>

        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              Front-End Web developer with NextJs
            </h3>
            <div
              className="p-2 text-warning border d-flex justify-content-center align-items-center border-warning rounded fw-bold fs-5"
              style={{ width: "200px" }}
            >
              1,5 month EXP
            </div>
            <p className="text-light mt-2">
              1,5 month experiences with NextJs, Next-Auth, Router.
            </p>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Experience;
