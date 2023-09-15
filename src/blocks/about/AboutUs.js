import React from "react";

const AboutsUs = () => {
  return (
    <div className="wrapper" style={{ marginTop: "4rem" }}>
      <div className="title">
        <h6 className="text-primary text-uppercase">About Us</h6>
      </div>

      <div className="row gutter-width-md with-pb-md">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <h2 className="text-justify">Biologic AI - Where Science Meets Compassion in Pursuit of a Healthier Tomorrow</h2>
          </div>

          {/* <div className="signature spacer m-top-lg">
            <div className="signature-img">
              <img src="assets/img/demo/23_img.png" alt="Signature" />
            </div>
            <div className="signature-content">
              <h5 className="signature-name">Tom Henders</h5>
              <p className="signature-position">CEO of Company</p>
            </div>
          </div> */}
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <p className="text-justify">
              Our unwavering mission is to transform healthcare by unlocking the limitless capabilities of AI-driven solutions. We firmly believe that cutting-edge technology has the potential to tackle the most intricate challenges in healthcare, spanning from early disease detection to the precision of treatment planning.
            </p>
          </div>

          {/* <div className="description-2 spacer p-top-lg">
            <p className="text-justify">
              At Biologic AI, we're not content with the status quo. We are pioneers, dedicated to pushing the boundaries of what's possible in the medical field. Our team of visionary scientists, engineers, and healthcare experts works tirelessly to develop AI-driven solutions that drive progress and transform the patient experience.
            </p>
          </div> */}
        </div>
      </div>

      <div className="icon-list">
        <div className="icon-list-items">
          <div className="icon-list-item">
            <p>
              <span className="d-flex">
                <i className="fas fa-check"></i>
                <span> Innovating Healthcare Horizons </span>
              </span>
            </p>
          </div>

          <div className="icon-list-item">
            <p>
              <span className="d-flex">
                <i className="fas fa-check"></i>
                <span> Customer-Centric Excellence </span>
              </span>
            </p>
          </div>

          <div className="icon-list-item">
            <p>
              <span className="d-flex">
                <i className="fas fa-check"></i>
                <span> Unparalleled Quality Assurance </span>
              </span>
            </p>
          </div>

          <div className="icon-list-item">
            <p>
              <span className="d-flex">
                <i className="fas fa-check"></i>
                <span> Our Satisfaction Guarantee </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutsUs;
