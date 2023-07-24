import React from "react";
import Howie from "../assets/images/howie.png";

const Portfolio = () => {
  return (
    <div
      class="container d-flex flex-wrap justify-content-center"
      id="portfolio"
    >
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Name of Project</h5>
          <p className="card-text">Proj Desc</p>
          <a href="#" className="btn btn-primary">
            Link to Project
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Name of Project</h5>
          <p className="card-text">Proj Desc</p>
          <a href="#" className="btn btn-primary">
            Link to Project
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Name of Project</h5>
          <p className="card-text">Proj Desc</p>
          <a href="#" className="btn btn-primary">
            Link to Project
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Name of Project</h5>
          <p className="card-text">Proj Desc</p>
          <a href="#" className="btn btn-primary">
            Link to Project
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Name of Project</h5>
          <p className="card-text">Proj Desc</p>
          <a href="#" className="btn btn-primary">
            Link to Project
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Name of Project</h5>
          <p className="card-text">Proj Desc</p>
          <a href="#" className="btn btn-primary">
            Link to Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
