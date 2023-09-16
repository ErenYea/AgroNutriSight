import "../../App.css";
import React, { Component } from 'react';
import "../../App.css";
import TestimonialsData from '../../data/testimonials/testimonialsData';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount
  goToPrevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + TestimonialsData.length) %
        TestimonialsData.length,
    }));
  };

  goToNextSlide = () => {
    console.log('here next')
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % TestimonialsData.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const currentTestimonial = TestimonialsData[currentIndex];

    return (
      <section
        id="testimonials"
        className="block bg-dark spacer p-top-xl p-bottom-xl"
      >
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className='mx-auto' style={{ width: '80%' }} key={currentIndex}>
            <video muted loop controls autoPlay className="stylish-video">
              <source src={currentTestimonial.videoSrc} type="video/mp4" />
            </video>
            <div className="title" style={{ marginTop: '4rem' }}>
              <h6 className="text-primary text-uppercase">Health Tech</h6>
            </div>
            <div className="description text-tertiary">
              <h2>{currentTestimonial.position}</h2>
            </div>
            <div className="adv-slider-reviews text-tertiary">
              <div className="adv-slider-reviews-img">
                <img src="assets/img/demo/11_img.png" alt="Icon" />
              </div>
              <div className="adv-swiper-container reviews-text">
                <div className="adv-swiper-wrapper reviews-text-items">
                    
                    <div className="adv-swiper-slide reviews-text-item">
                        <div className="reviews-text-item-content">
                            <h3>{currentTestimonial.text}</h3>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={this.goToPrevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={this.goToNextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Testimonials;
