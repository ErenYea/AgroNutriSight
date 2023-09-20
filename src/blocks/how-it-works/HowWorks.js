import React, { useState } from "react";

import HowItWorks from "../../data/how-it-works/howItWorksData";

const HowWorks = (props) => {
  const [data, setData] = useState(props?.individualData);
  var counter = 0;
  return (
    <div className="wrapper">
      <div className="row no-gutters">
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div className="process pl-0">
            <div className="process-content">
              <h4 className="process-small-t-head">{data?.heading}</h4>
              <div className="process-description">
                <p style={{ textAlign: "justify" }}>{data?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters process-height spacer m-bottom-sm p-bottom-sm">
        {/* <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9"> */}
        <div>
          <div className="row no-gutters h-100">
            {data?.subheadings &&
              data?.subheadings.map((item, key) => {
                if (counter >= 3) {
                  counter = 0;
                }
                counter += 1;

                return (
                  <div
                    key={key}
                    className="col-sm-12 col-md-4 col-lg-4 col-xl-4 "
                    style={{ marginTop: "1rem" }}
                  >
                    <div
                      className={"process process-color-" + counter.toString()}
                    >
                      <div className="process-content">
                        <h5
                          className="process-t-head"
                          style={{ textAlign: "center" }}
                        >
                          {item.heading}
                        </h5>
                        <p
                          className="process-description"
                          style={{ textAlign: "center" }}
                        >
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
