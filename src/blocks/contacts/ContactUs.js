import React from 'react';

import ContactsForm from '../../components/form/ContactForm';

const ContactsUs = () => {
    return (
        <section id="contacts" className="block bg-white-before spacer p-top-xl-2">
            <div id="contacts-0" className="wrapper spacer p-top-xl-2">
                <div className="title">
                    <h6 className="text-primary text-uppercase">Contacts</h6>
                </div>

                <div className="title-opacity">
                    <div className="title-opacity-text">Contacts</div>
                </div>

                <div className="description-lg">
                    <h2>Any Questions? Contact us Freely and We'll Get Back to You Shortly</h2>
                </div>

                <div className="spacer p-top-lg">
                    <div className="row gutter-width-md with-pb-md">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="contacts-item">
                                <div className="contacts-item-icon">
                                    <i className="malex-icon-location"></i>
                                </div>

                                <h5 className="contacts-item-t-head">Location</h5>

                                <p className="contacts-item-description">Location: 575 Crescent Avenue<br/>Quakertown, PA
                                    18951</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="contacts-item">
                                <div className="contacts-item-icon">
                                    <i className="malex-icon-phone"></i>
                                </div>

                                <h5 className="contacts-item-t-head">Phone no.</h5>

                                <p className="contacts-item-description">
                                    Mobile: <a href="tel:+43253312523">+432 533 12 523</a><br/>
                                    Fax: <a href="tel:+53222212523">+532 222 12 523</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="contacts-item">
                                <div className="contacts-item-icon">
                                    <i className="malex-icon-email"></i>
                                </div>

                                <h5 className="contacts-item-t-head">E-mail</h5>

                                <p className="contacts-item-description">
                                    Info: <a href="mailto:info@domain.com">info@healthsynx.com</a><br/>
                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="width-img spacer p-top-xl p-bottom-xl">
                <div className="wrapper">
                    <div id="contact-form">
                        <div className="title">
                            <h3 className="pb-0">You Can Contact Us</h3>
                        </div>

                        <div className="description-lg spacer p-top-lg">
                            <p>Got questions or feedback? Don't hesitate to get in touch.</p>
                        </div>

                        <div className="spacer p-top-lg">
                            <ContactsForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsUs;
