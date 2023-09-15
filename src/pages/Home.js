import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import HomeHeader from "../blocks/header/HomeHeader";
import Footer from "../blocks/footer/Footer";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import ServicesHome from "../blocks/services/ServicesHome";
import AboutsUs from "../blocks/about/AboutUs";
import AboutImg from "../blocks/about/AboutImg";
import HowWorks from "../blocks/how-it-works/HowWorks";
import TeamMembers from "../blocks/team-members/TeamMembers";
import PricePlans from "../blocks/price-plans/PricePlans";
import Clients from "../blocks/clients/Clients";
import VideoModal from "../components/modal/VideoModal";
import Testimonials from "../blocks/testimonials/Testimonials";
import News from "../blocks/news/News";
import ContactsUs from "../blocks/contacts/ContactUs";

const Home = () => {
  document.body.classList.add("home");
  document.body.classList.add("header-absolute-true");
  document.body.classList.add("header-fixed-true");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Home | Biologic AI</title>

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

      <HomeHeader logoColor="light" />

      <main id="main" className="site-main content-no-spacing">
        <div className="content">
          <div className="clearfix">
            <PageTitleHome />

            <ServicesHome />

            {/* <div id="img" className="block spacer p-top-lg wrapper-normal">
              <AboutImg />
            </div> */}

            {/* <section
              id="how-it-works"
              className="block bg-white before-block spacer p-bottom-xl-2"
            >
              <HowWorks />
            </section> */}

            <section
              id="team-members"
              className="block bg-white-before spacer p-top-xl-2 p-bottom-xl"
            >
              <TeamMembers />
            </section>

            <section
              id="price-plans"
              className="block spacer p-top-xl-2 m-top-xl-2"
            >
              <PricePlans />
            </section>

            {/* <div id="clients" className="block bg-white spacer m-top-xl">
              <Clients />
            </div>

            <div id="video" className="block">
              <VideoModal />
            </div> */}

            <Testimonials />

            <News />
            <section
              id="about-us"
              className="block spacer p-top-xl-2 p-bottom-xl-2 "
            >
              <AboutsUs />
            </section>

            <ContactsUs />
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
