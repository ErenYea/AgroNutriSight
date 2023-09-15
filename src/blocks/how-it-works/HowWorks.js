import React, { useState } from "react";

import HowItWorks from "../../data/how-it-works/howItWorksData";

const HowWorks = (props) => {
  const [data, setData] = useState(
    props?.individualData?.subheadings[0]?.subheadings == undefined ||
      props?.individualData?.subheadings[0]?.subheadings == null
      ? props?.individualData?.subheadings[1]
      : props?.individualData?.subheadings[0]
  );
  return (
    <div className="wrapper">
      <div className="row no-gutters process-height">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div className="process pl-0">
            <div className="process-content">
              <h4 className="process-small-t-head">{data?.heading}</h4>
              <div className="process-description">
                <h6>{data?.description}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <div className="row no-gutters h-100">
            {data?.subheadings &&
              data?.subheadings.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="col-sm-12 col-md-4 col-lg-4 col-xl-4 "
                    style={{ marginTop: "1rem" }}
                  >
                    <div className={"process process-color-" + item.color}>
                      <div className="process-content">
                        <h5 className="process-t-head">{item.heading}</h5>
                        <p className="process-description">
                          {item.description}
                        </p>
                      </div>

                      {/* <div className="process-number">{item.processNum}</div> */}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
