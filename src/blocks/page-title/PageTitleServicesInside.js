import React from "react";

const PageTitleServicesInside = (props) => {
  return (
    <section id="page-title" className="page-title-ml content-top-spacing">
      <div
        className="wrapper media_hamza"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ flex: 0.5 }}>
          <div className="title">
            <h1 className="large">{props?.individualData?.name}</h1>
          </div>
          <div className="title">
            <h4 className="large">{props?.individualData?.sub_name}</h4>
          </div>

          <div className="title-opacity">
            <div className="title-opacity-text">Product</div>
          </div>

          <div className="description spacer p-top-lg">
            <p style={{ textAlign: "justify" }}>
              {props?.individualData?.description}
            </p>
          </div>
        </div>
        <div style={{ flex: 0.5, height: "50vh" }}>
          <div className="img object-fit" style={{ height: "100%" }}>
            <div className="object-fit-cover">
              <img
                src={props?.individualData?.image}
                alt="card"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleServicesInside;
