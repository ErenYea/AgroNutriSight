import React from 'react';

const AboutsUs = () => {
    return (
        <div className="wrapper">
            <div className="title">
                <h6 className="text-primary text-uppercase">About Us</h6>
            </div>

            <div className="row gutter-width-md with-pb-md">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="description-2">
                        <h2>Keep Your Business Safe & Ensure High Availability</h2>
                    </div>

                    <div className="signature spacer m-top-lg">
                        <div className="signature-img">
                            <img src="assets/img/demo/23_img.png" alt="Signature" />
                        </div>
                        <div className="signature-content">
                            <h5 className="signature-name">Tom Henders</h5>
                            <p className="signature-position">CEO of Company</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="description-2">
                        <p>A business consulting agency is involved in the planning, implementation, and
                            education of businesses. We work directly with business owners on developing a
                            business plan, identifying marketing needs and developing the necessary skills for
                            business ownership.</p>
                    </div>

                    <div className="description-2 spacer p-top-lg">
                        <p>Marketing consultant is an advisor who works with companies to create and implement
                            marketing strategies.</p>
                    </div>
                </div>
            </div>

            <div className="icon-list">
                <div className="icon-list-items">
                    <div className="icon-list-item">
                        <p><span className="d-flex">
                            <i className="fas fa-check"></i><span>Constant Improvement</span></span></p>
                    </div>

                    <div className="icon-list-item">
                        <p><span className="d-flex"><i className="fas fa-check"></i><span>Commitment to Customers</span></span>
                        </p>
                    </div>

                    <div className="icon-list-item">
                        <p><span className="d-flex"><i className="fas fa-check"></i><span>Best Quality You Can Get</span></span>
                        </p>
                    </div>

                    <div className="icon-list-item">
                        <p><span className="d-flex"><i className="fas fa-check"></i><span>30 Days Money Back Warranty</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutsUs;
