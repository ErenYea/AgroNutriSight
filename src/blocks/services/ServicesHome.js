import React from 'react';

const ServicesHome = () => {
    return (
        <section id="services" className="block spacer p-bottom-xl-2">
            <div className="wrapper">
                <div className="row gutter-width-md with-pb-md service-items">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="service">
                            <div className="service-icon">
                                <i className="malex-icon-strategy"></i>
                            </div>

                            <h4 className="service-t-head">Strategic Planning</h4>

                            <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>

                            <div className="service-btn">
                                <a title="Read more" className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" href={ process.env.PUBLIC_URL + "/service-inside" }>
                                    <i className="malex-icon-arrow-right i-large"></i>
                                    <span className="btn-text">Read more</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="service">
                            <div className="service-icon">
                                <i className="malex-icon-choice"></i>
                            </div>

                            <h4 className="service-t-head">Consulting & Marketing</h4>

                            <p className="service-description">At vero eos et accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium.</p>

                            <div className="service-btn">
                                <a title="Read more" className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" href={ process.env.PUBLIC_URL + "/service-inside" }>
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

                            <h4 className="service-t-head">Financial</h4>

                            <p className="service-description">At vero eos et accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium.</p>

                            <div className="service-btn">
                                <a title="Read more" className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" href={ process.env.PUBLIC_URL + "/service-inside" }>
                                    <i className="malex-icon-arrow-right i-large"></i>
                                    <span className="btn-text">Read more</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHome;