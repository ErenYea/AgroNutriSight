import React from "react";
import "./about.css";

const AboutUs = () => {

  const itemsToRepeat = [
    "Innovating Healthcare Horizons",
    "Customer-Centric Excellence",
    "Personalized Healthcare",
    "AI-Powered Drug Discovery",
    "Global Health Impact",
    "Health & Wellness Tips",
    "Chronic Disease Management"
  ];

  const repeatedItems = Array.from({ length: 1000 }).map((_, index) => (
    <div className="icon-list-item" key={index}>
      <p>
        <span className="d-flex">
          <i className="fas fa-check"></i>
          <span>{itemsToRepeat[index % itemsToRepeat.length]}</span>
        </span>
      </p>
    </div>
  ));

  return (
    <div className="wrapper" style={{ marginTop: "4rem" }}>
      <div className="title">
        <h6 className="text-primary text-uppercase">About Us</h6>
      </div>

      <div className="row gutter-width-md with-pb-md">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <h2 className="text-justify">
              Biologic AI - Where Science Meets Compassion in Pursuit of a Healthier Tomorrow
            </h2>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <p className="text-justify">
              Our unwavering mission is to transform healthcare by unlocking the limitless capabilities
              of AI-driven solutions. We firmly believe that cutting-edge technology has the potential
              to tackle the most intricate challenges in healthcare, spanning from early disease
              detection to the precision of treatment planning.
            </p>
          </div>
        </div>
      </div>

      <div className="icon-list">
        <div className="icon-list-items">{repeatedItems}</div>
      </div>
    </div>
  );
};

export default AboutUs;
