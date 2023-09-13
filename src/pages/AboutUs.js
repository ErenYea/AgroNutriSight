import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleAbout from '../blocks/page-title/PageTitleAbout';
import AboutImg from '../blocks/about/AboutImg';
import AboutsUs from '../blocks/about/AboutUs';
import TeamMembers from '../blocks/team-members/TeamMembers';
import Testimonials from '../blocks/testimonials/Testimonials';
import Clients from '../blocks/clients/Clients';

const AboutUs = () => {
    document.body.classList.add( 'page' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>About us | Malex - Business Consulting Agency React JS Template</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleAbout />

                        <div id="img" className="block spacer p-top-xl wrapper-normal">
                            <AboutImg />
                        </div>

                        <section id="about-us" className="block spacer p-top-xl p-bottom-xl">
                            <AboutsUs />
                        </section>

                        <section id="team-members" className="block bg-white-before spacer p-top-xl p-bottom-xl">
                            <TeamMembers />
                        </section>

                        <Testimonials />

                        <div id="clients" className="block bg-white">
                            <Clients />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default AboutUs;
