import React from "react";
import Howie from "../../assets/images/Howie.png";

const Portfolio = () => {
  return (
    <div
      class="container d-flex flex-wrap justify-content-evenly my-5"
      id="portfolio"
    >
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Food for Thought</h5>
          <p className="card-text">A recipe suggestion app.</p>
          <a
            href="https://danielg808.github.io/food-for-thought/"
            className="btn btn-primary"
          >
            Click Here!
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Movie Mentor</h5>
          <p className="card-text">A Movie suggestion app.</p>
          <a
            href="https://project-211-88db9fc198e3.herokuapp.com/login"
            className="btn btn-primary"
          >
            Click Here!
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text">
            An app that shows the weather and forecast near you.
          </p>
          <a
            href="https://danielg808.github.io/weather-app/"
            className="btn btn-primary"
          >
            Click Here!
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={Howie} className="card-img-top" alt="Howie" />
        <div className="card-body">
          <h5 className="card-title">Project 3</h5>
          <p className="card-text">TBD</p>
          <a href="#" className="btn btn-primary">
            Click Here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
