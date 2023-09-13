import React from 'react';

import PlansModal from '../../components/modal/PlansModal';

import PlansData from '../../data/price-plans/pricePlansData';

const PricePlans = () => {
    return (
        <div className="wrapper">
            <div className="title">
                <h6 className="text-primary text-uppercase">Price Plans</h6>
            </div>

            <div className="title-opacity">
                <div className="title-opacity-text">Plans</div>
            </div>

            <div className="description">
                <h2>Choose the Best Plan for You</h2>
            </div>

            <div className="row gutter-width-md with-pb-md spacer p-top-lg">
                { PlansData && PlansData.map( ( plan, key ) => {
                    return ( 
                        <div key={ key } className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="price-table">
                                <div className="price-table-badge" style={ { display: plan.popular ? "block" : "none" } }>
                                    <p>Popular</p>
                                </div>

                                <div className="price-table-header">
                                    <h4 className="price-table-t-head">{ plan.title }</h4>
                                    <p className="price-table-description">{ plan.description }</p>
                                </div>

                                <div className="price-table-price">
                                    <p><span className="currency">{ plan.currency }</span>
                                        <span className="price">{ plan.price }</span>
                                        <span className="period">{ plan.period }</span>
                                    </p>
                                </div>

                                <ul className="price-table-list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Branding
                                        <i className="text-primary fas fa-check i-small" style={ { display: plan.branding ? "block" : "none" } }></i>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        20 hours of consultation
                                        <i className="text-primary fas fa-check i-small" style={ { display: plan.consultation ? "block" : "none" } }></i>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        15 hours if theory
                                        <i className="text-primary fas fa-check i-small" style={ { display: plan.theory ? "block" : "none" } }></i>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Skype video call
                                        <i className="text-primary fas fa-check i-small" style={ { display: plan.skype ? "block" : "none" } }></i>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Support 24/7
                                        <i className="text-primary fas fa-check i-small" style={ { display: plan.support ? "block" : "none" } }></i>
                                    </li>
                                </ul>

                                <div className="price-table-footer">
                                    <PlansModal messageText={ plan.title } />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PricePlans;