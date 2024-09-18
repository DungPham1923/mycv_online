"use client";
import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div className="home__page">
      <div className="home_top">
        <p> <i className="fa fa-code"></i> Pham Anh Dung <i className="fa-solid fa-code"></i> </p>
      </div>
      <div className="home_bottom">
        <p>FULL-STACK DEVELOPER</p>
        <div className="home__content">
          <span>
            Student intern specializing in full-stack software
            application development. My skills include programming with ReactJS
            and Next.js for frontend development, and C# and Java for backend
            services.
          </span>
        </div>
        <Link href="/about">
          <div className="button12">
            <em> </em>
            <span>About me</span>
          </div>
        </Link>
      </div>
      <div className="card__img">
        <img src="/dungdev.jpg" alt="" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default Home;
