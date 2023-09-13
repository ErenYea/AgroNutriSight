import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside';
import VideoModal from '../components/modal/VideoModal';
import HowWorks from '../blocks/how-it-works/HowWorks';
import PricePlans from '../blocks/price-plans/PricePlans';
import Clients from '../blocks/clients/Clients';

const NewsSinglePost = () => {
    document.body.classList.add( 'page' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Service inside | Malex - Business Consulting Agency React JS Template</title>

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
                        <PageTitleServicesInside />

                        <div id="video" className="block spacer p-top-xl">
                            <div className="wrapper">
                                <VideoModal />
                            </div>
                        </div>

                        <section id="how-it-works" className="block bg-white before-block">
                            <HowWorks />
                        </section>

                        <section id="price-plans" className="block spacer p-top-xl">
                            <PricePlans />
                        </section>

                        <div id="clients" className="block bg-white spacer m-top-xl">
                            <Clients />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default NewsSinglePost;
