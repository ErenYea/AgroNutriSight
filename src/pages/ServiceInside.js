import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import data from "../data/services/data.json";
import PageTitleServicesInside from "../blocks/page-title/PageTitleServicesInside";
import VideoModal from "../components/modal/VideoModal";
import HowWorks from "../blocks/how-it-works/HowWorks";
import PricePlans from "../blocks/price-plans/PricePlans";
import Clients from "../blocks/clients/Clients";
import { useParams } from "react-router-dom";

const NewsSinglePost = () => {
  const params = useParams();
  const [individualData, setindividualData] = useState(data[params.id - 1]);
  const [subheadingData, setSubheadingData] = useState(
    data[params.id - 1]?.subheadings.filter((x) => x.subheadings !== undefined)
  );
  const [noheadingData, setNoheadingData] = useState(
    data[params.id - 1]?.subheadings.filter((x) => x.subheadings == undefined)
  );
  const [seconddata, setSeconddata] = useState(
    subheadingData.length > 2 ? subheadingData[2] : ""
  );
  const [firstdata, setFirstdata] = useState(
    subheadingData.length > 0 ? subheadingData[0] : ""
  );
  const [priceplan, setPricePlan] = useState(
    subheadingData.length > 1 ? subheadingData[1] : ""
  );
  document.body.classList.add("page");
  document.body.classList.add("title-opacity-true");

  console.log("id", params.id);

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Product | {individualData?.name}</title>

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
            <PageTitleServicesInside individualData={individualData} />

            <div id="video" className="block spacer p-top-xl p-bottom-sm">
              <div className="wrapper">
                <video
                  muted
                  loop
                  controls
                  autoPlay
                  class="stylish-video shadow bg-white"
                >
                  <source src={individualData?.video} type="video/mp4" />
                </video>
                {/* <VideoModal /> */}
              </div>
            </div>
            {firstdata == "" ? (
              ""
            ) : (
              <section
                id="how-it-works"
                className="block bg-white before-block spacer p-top-xl"
              >
                <HowWorks individualData={firstdata} />
              </section>
            )}
            {priceplan == "" ? (
              ""
            ) : (
              <section id="price-plans" className="block spacer p-top-xl ">
                <PricePlans individualData={priceplan} />
              </section>
            )}

            <div
              id="clients"
              className="block bg-white spacer m-top-xl m-bottom-xl"
            >
              <section
                id="testimonials"
                className="block bg-dark spacer p-top-xl p-bottom-xl"
              >
                <div className="wrapper">
                  {/* <div className="title">
                    <h6 className="text-primary text-uppercase">
                      Testimonials
                    </h6>
                  </div> */}

                  <div className="description text-tertiary">
                    <h2>
                      {seconddata == ""
                        ? individualData?.subheadings[
                            individualData?.subheadings.length - 1
                          ]?.heading
                        : individualData?.subheadings[
                            individualData?.subheadings.length - 2
                          ]?.heading}
                    </h2>
                  </div>

                  <div className="adv-slider-reviews text-tertiary">
                    <div className="adv-slider-reviews-img">
                      <img src="assets/img/demo/11_img.png" alt="Icon" />
                    </div>

                    <div className="adv-swiper-container reviews-text">
                      <div className="adv-swiper-wrapper reviews-text-items">
                        <div className="adv-swiper-slide reviews-text-item">
                          <div className="reviews-text-item-content">
                            <h3>
                              {seconddata == ""
                                ? individualData?.subheadings[
                                    individualData?.subheadings.length - 1
                                  ]?.description
                                : individualData?.subheadings[
                                    individualData?.subheadings.length - 2
                                  ]?.description}
                            </h3>
                          </div>
                        </div>
                        {/* { TestimonialsData && TestimonialsData.map( ( item, key ) => {
                                    return (
                                        <div key={ key } className="adv-swiper-slide reviews-text-item">
                                            <div className="reviews-text-item-content">
                                                <h3>{ item.text }</h3>
                                            </div>
                                        </div>
                                    );
                                })} */}
                      </div>
                    </div>

                    <div className="d-flex align-items-center thumbs">
                      <div className="adv-swiper-container reviews-thumbs">
                        <div className="adv-swiper-wrapper reviews-thumbs-items">
                          {/* { TestimonialsData && TestimonialsData.map( ( item, key ) => {
                                        return (
                                            <div key={ key } onClick={ ( e ) => this.handleClick( e ) } className="adv-swiper-slide reviews-thumbs-item" data-reviews-name={ item.author } data-reviews-position={ item.position }>
                                                <img src={ item.imgSrc } alt={ item.author } />
                                            </div>
                                        );
                                    })} */}
                        </div>
                      </div>

                      {/* <div className="reviews-results">
                                <h6 className="reviews-name" id="reviews-name">{ this.state.name }</h6>
                                <p className="reviews-positions" id="reviews-positions">{ this.state.position }</p>
                            </div> */}
                    </div>
                  </div>
                </div>
              </section>
              {/* <Clients individualData={individualData} /> */}
            </div>
            {seconddata == "" ? (
              ""
            ) : (
              <section id="price-plans" className="block spacer p-bottom-xl ">
                <PricePlans individualData={seconddata} />
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default NewsSinglePost;
