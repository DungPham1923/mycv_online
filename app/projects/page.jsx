import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="card__about">
      <div className="about_title">
        <span className="text-warning">Pro</span>
        <span className="text-light">ject</span>
      </div>
      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-8 d-flex justify-content-end">
          <h3 className="text-warning">Please wait...</h3>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Projects;
