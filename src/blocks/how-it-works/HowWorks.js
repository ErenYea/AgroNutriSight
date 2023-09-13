import React from 'react';

import HowItWorks from '../../data/how-it-works/howItWorksData';

const HowWorks = () => {
    return (
        <div className="wrapper">
            <div className="row no-gutters process-height">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="process pl-0">
                        <div className="process-content">
                            <h6 className="process-small-t-head">How it Works?</h6>
                            <div className="process-description">
                                <h2>We Guarantee a Stable Work Process</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <div className="row no-gutters h-100">
                        { HowItWorks && HowItWorks.map( ( item, key ) => {
                            return (
                                <div key={ key } className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <div className={ "process process-color-" + item.color }>
                                        <div className="process-content">
                                            <h4 className="process-t-head">{ item.title }</h4>
                                            <p className="process-description">{ item.description }</p>
                                        </div>
        
                                        <div className="process-number">{ item.processNum }</div>
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