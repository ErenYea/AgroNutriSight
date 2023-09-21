import React from "react";
import data from "../../data/services/data.json";

const ServicesHome = () => {
  // console.log("data", data);
  return (
    <section id="services" className="block spacer p-bottom-xl-2" style={{}}>
      <div className="wrapper">
        <div
          className="col-sm-12 col-md-8 col-lg-8 col-xl-8 spacer p-bottom-md"
          style={{ paddingLeft: "0px" }}
        >
          <div className="process pl-0">
            <div className="process-content">
              <h4 className="process-small-t-head">Collaborations</h4>
              <div className="process-description">
                <p style={{ textAlign: "justify" }}>
                  Discover an intriguing synergy between HealthSynX and
                  prominent health technology development companies, where
                  innovation meets strategy and branding excellence. This
                  partnership has yielded a remarkable fusion of cutting-edge
                  products designed to catalyze breakthroughs in healthcare.
                  Within these groundbreaking solutions lies a testament to our
                  commitment to addressing challenges while redefining
                  commercial strategies and elevating product branding, all in
                  the pursuit of advancing these critical domains.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row gutter-width-md with-pb-md service-items"
          style={{ marginTop: "10px" }}
        >
          {data.map((service) => (
            <div
              className="col-sm-12 col-md-4 col-lg-4 col-xl-4"
              key={service.id}
            >
              <div className="service" style={{ borderRadius: "10px" }}>
                <div className="service-icon">
                  {/* <i className="malex-icon-strategy"></i> */}
                  <img
                    src={service.image}
                    alt=""
                    style={{ width: "150px", height: "100px" }}
                    loading="lazy"
                  />
                </div>

                <h4 className="service-t-head">{service.name}</h4>

                <p className="service-description text-justify">
                  {service.small_description}
                </p>

                <div className="service-btn">
                  <a
                    title="Read more"
                    className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase"
                    href={process.env.PUBLIC_URL + "/product" + service.id}
                  >
                    <i className="malex-icon-arrow-right i-large"></i>
                    <span className="btn-text">Read more</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="service">
              <div className="service-icon">
                <i className="malex-icon-choice"></i>
              </div>

              <h4 className="service-t-head">CardioClear</h4>

              <p className="service-description">
                AI-driven heart disease care via CCTA imaging for early
                atherosclerosis detection, personalized treatment, and improved
                outcomes.
              </p>

              <div className="service-btn">
                <a
                  title="Read more"
                  className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase"
                  href={process.env.PUBLIC_URL + "/service"}
                >
                  <i className="malex-icon-arrow-right i-large"></i>
                  <span className="btn-text">Read more</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="service">
              <div className="service-icon">
                <i className="malex-icon-chart-5"></i>
              </div>

              <h4 className="service-t-head">OncoPath</h4>

              <p className="service-description">
                Our solution simplifies oncology care by automating lesion
                quantification, tracking, and therapy response reporting,
                seamlessly integrated with medical records.
              </p>

              <div className="service-btn">
                <a
                  title="Read more"
                  className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase"
                  href={process.env.PUBLIC_URL + "/service-inside"}
                >
                  <i className="malex-icon-arrow-right i-large"></i>
                  <span className="btn-text">Read more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="service">
              <div className="service-icon">
                <i className="malex-icon-strategy"></i>
              </div>

              <h4 className="service-t-head">FractureFinder</h4>

              <p className="service-description">
                FractureFinder's AI detects concealed fractures, aiding precise
                diagnosis for improved patient care and outcomes, especially in
                wrist and hip cases.
              </p>

              <div className="service-btn">
                <a
                  title="Read more"
                  className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase"
                  href={process.env.PUBLIC_URL + "/service-inside"}
                >
                  <i className="malex-icon-arrow-right i-large"></i>
                  <span className="btn-text">Read more</span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
