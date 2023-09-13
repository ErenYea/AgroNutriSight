import React, { Component } from 'react';
import Swiper from 'swiper';

import TestimonialsData from '../../data/testimonials/testimonialsData';

class Testimonials extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: "Tommy Andersen",
            position: "CEO at Company"
        }
    };

    componentDidMount() {
        var swiperAdvReviewsThumbs = new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-thumbs', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false,
            freeMode: false
        } );

        new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-text', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            thumbs: {
                slideThumbActiveClass: 'adv-swiper-slide-thumb-active',
                thumbsContainerClass: 'adv-swiper-container-thumbs',
                swiper: swiperAdvReviewsThumbs
            },
            spaceBetween: 0,
            allowTouchMove: false
        } );
    };

    handleClick( e ) {
        this.setState( { "name": e.currentTarget.getAttribute( 'data-reviews-name' ) } );
        this.setState( { "position": e.currentTarget.getAttribute( 'data-reviews-position' ) } );
        return false;
    };

    render() {
        return (
            <section id="testimonials" className="block bg-dark spacer p-top-xl p-bottom-xl">
                <div className="wrapper">
                    <div className="title">
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

                        <div className="d-flex align-items-center thumbs">
                            <div className="adv-swiper-container reviews-thumbs">
                                <div className="adv-swiper-wrapper reviews-thumbs-items">
                                    { TestimonialsData && TestimonialsData.map( ( item, key ) => {
                                        return (
                                            <div key={ key } onClick={ ( e ) => this.handleClick( e ) } className="adv-swiper-slide reviews-thumbs-item" data-reviews-name={ item.author } data-reviews-position={ item.position }>
                                                <img src={ item.imgSrc } alt={ item.author } />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="reviews-results">
                                <h6 className="reviews-name" id="reviews-name">{ this.state.name }</h6>
                                <p className="reviews-positions" id="reviews-positions">{ this.state.position }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default Testimonials;