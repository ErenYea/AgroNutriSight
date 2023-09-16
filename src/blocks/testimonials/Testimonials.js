import React, { Component } from 'react';
import "../../App.css";

import TestimonialsData from '../../data/testimonials/testimonialsData';

class Testimonials extends Component {
    constructor( props ) {
        super( props );
    };


    render() {
        return (
            <section id="testimonials" className="block bg-dark spacer p-top-xl p-bottom-xl">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    
                    <div className='mx-auto' style={{width: '80%'}}>

                        <video muted loop controls autoPlay class="stylish-video">
                            <source src="assets/img/placeholder/vid.mp4" type="video/mp4"/>
                        </video>

                        <div className="title" style={{marginTop: '4rem'}}>
                            <h6 className="text-primary text-uppercase">Testimonials</h6>
                        </div>

                        <div className="description text-tertiary">
                            <h2>Our Happy Customers Reviews</h2>
                        </div>

                        <div className="adv-slider-reviews text-tertiary">
                            <div className="adv-slider-reviews-img">
                                <img src="assets/img/demo/11_img.png" alt="Icon" />
                            </div>

                            <div className="adv-swiper-container reviews-text">
                                <div className="adv-swiper-wrapper reviews-text-items">
                                    { TestimonialsData && TestimonialsData.map( ( item, key ) => {
                                        return (
                                            <div key={ key } className="adv-swiper-slide reviews-text-item">
                                                <div className="reviews-text-item-content">
                                                    <h3>{ item.text }</h3>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>

        );
    };
};

export default Testimonials;