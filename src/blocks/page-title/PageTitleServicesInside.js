import React from "react";

const PageTitleServicesInside = (props) => {
  return (
    <section id="page-title" className="page-title-ml content-top-spacing">
      <div className="wrapper">
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
          <p>{props?.individualData?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default PageTitleServicesInside;
