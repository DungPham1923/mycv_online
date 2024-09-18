import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import FrontEnd from "@components/skills/FrontEnd";
import BackEnd from "@components/skills/BackEnd";
import Database from "@components/skills/Database";
import Other from "@components/skills/Other";

const About = () => {
  return (
    <div className="card__about">
      <div className="about_title">
        <span className="text-light">ABOUT</span>{" "}
        <span className="text-warning">ME</span>
      </div>
      <div className="about_content row container-fluid mt-5">
        <div className="col-2"></div>
        <div className="col-3">
          <h3 className="text-light">INFORMATION</h3>
          <hr className="bg-light" />
          <button className="front__end text-info">PERSONAL</button>
          <div className="row mt-5">
            <div className="col-5 text-light">
              <p>First Name </p>
              <p>Last Name </p>
              <p>Year Of Birth </p>
              <p>Nationality </p>
              <p>Language </p>
              <p>Address </p>
            </div>
            <div className="col-7 text-warning text-right">
              <p>PHAM ANH</p>
              <p>DUNG</p>
              <p>2003</p>
              <p>VIETNAM</p>
              <p>Vietnamese, English</p>
              <p>Duy Tien, Ha Nam</p>
            </div>
          </div>
          <button className="front__end text-info">CONTACT</button>
          <div className="row mt-5">
            <div className="col-2 text-light">
              <p>
                <i className="fa fa-envelope"></i>
              </p>
              <p>
                <i className="fa fa-phone-square"></i>
              </p>
              <p>
                <i className="fab fa-facebook"></i>
              </p>
              <p>
                <i className="fab fa-github"></i>
              </p>
            </div>
            <div className="col-10 text-warning text-right text_info">
              <p>phamdung2672004@gmail.com</p>
              <p>+84-981-153-101</p>
              <p>
                <a href="www.facebook.com/PhamAnhDung.Dev19">Phạm Anh Dũng</a>
              </p>
              <p>
                <a href="https://github.com/DungPham1923">DungPham.Dev</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-7">
          <h3 className="text-center text-warning">MY SKILL</h3>
          <hr className="bg-light" />
          <button className="front__end">FRONT - END</button>
          <FrontEnd/>
          <button className="front__end">BACK - END</button>
          <BackEnd />
          <button className="front__end">DATABASE</button>
          <Database />
          <button className="front__end">OTHER</button>
          <Other />
          
        </div>
      </div>
    </div>
  );
};

export default About;
