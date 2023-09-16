import React, { Component } from "react";
import "../../App.css";
import TestimonialsData from "../../data/testimonials/testimonialsData";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      fadeOutTitle: false,
      fadeInTitle: false,
      fadeOutDescription: false,
      fadeInDescription: false,
      fadeOutReviews: false,
      fadeInReviews: false,
      fadeOutText: false,
      fadeInText: false,
    };
  }

  goToPrevSlide = () => {
    this.setState({
      fadeOutTitle: true,
      fadeOutDescription: true,
      fadeOutReviews: true,
      fadeOutText: true,
    });

    setTimeout(() => {
      this.setState(
        (prevState) => ({
          currentIndex:
            (prevState.currentIndex - 1 + TestimonialsData.length) %
            TestimonialsData.length,
          fadeInTitle: true,
          fadeInDescription: true,
          fadeInReviews: true,
          fadeInText: true,
        }),
        () => {
          // Reset the fadeOut state
          this.setState({
            fadeOutTitle: false,
            fadeOutDescription: false,
            fadeOutReviews: false,
            fadeOutText: false,
          });
        }
      );
    }, 500); // Adjust the delay to match your CSS transition duration
  };

  goToNextSlide = () => {
    this.setState({
      fadeOutTitle: true,
      fadeOutDescription: true,
      fadeOutReviews: true,
      fadeOutText: true,
    });

    setTimeout(() => {
      this.setState(
        (prevState) => ({
          currentIndex: (prevState.currentIndex + 1) % TestimonialsData.length,
          fadeInTitle: true,
          fadeInDescription: true,
          fadeInReviews: true,
          fadeInText: true,
        }),
        () => {
          // Reset the fadeOut state
          this.setState({
            fadeOutTitle: false,
            fadeOutDescription: false,
            fadeOutReviews: false,
            fadeOutText: false,
          });
        }
      );
    }, 500); // Adjust the delay to match your CSS transition duration
  };

  render() {
    const { currentIndex } = this.state;
    const currentTestimonial = TestimonialsData[currentIndex];

    return (
      <section
        id="testimonials"
        className="block bg-dark spacer p-top-xl p-bottom-xl"
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="mx-auto" style={{ width: "80%" }} key={currentIndex}>
            <video muted loop controls autoPlay className="stylish-video">
              <source src={currentTestimonial.videoSrc} type="video/mp4" />
            </video>
            <div
              className={`title ${
                this.state.fadeOutTitle
                  ? "fade-out"
                  : this.state.fadeInTitle
                  ? "fade-in"
                  : ""
              }`}
              style={{ marginTop: "4rem" }}
            >
              <h6 className="text-primary text-uppercase">Health Tech</h6>
            </div>
            <div
              className={`description ${
                this.state.fadeOutDescription
                  ? "fade-out"
                  : this.state.fadeInDescription
                  ? "fade-in"
                  : ""
              } text-tertiary`}
            >
              <h2 style={{ width: "100%" }}>{currentTestimonial.name}</h2>
            </div>
            <div
              className={`adv-slider-reviews ${
                this.state.fadeOutReviews
                  ? "fade-out"
                  : this.state.fadeInReviews
                  ? "fade-in"
                  : ""
              } text-tertiary`}
            >
              {/* <div className="adv-slider-reviews-img">
                <img src="assets/img/demo/11_img.png" alt="Icon" />
              </div> */}
              <div
                className={`adv-swiper-container reviews-text ${
                  this.state.fadeOutText
                    ? "fade-out"
                    : this.state.fadeInText
                    ? "fade-in"
                    : ""
                }`}
              >
                <div className="adv-swiper-wrapper reviews-text-items">
                  <div className="adv-swiper-slide reviews-text-item">
                    <div className="reviews-text-item-content text-justify">
                      <h3>{currentTestimonial.description}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            onClick={this.goToPrevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            onClick={this.goToNextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Testimonials;
