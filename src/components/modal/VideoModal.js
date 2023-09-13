import React, { Component, Fragment } from 'react';

class VideoModal extends Component {
    state = {
        isVisible: false,
        slide: 0,
    };

    open = () => {
        this.setState( { isVisible: true } );
        document.body.style.overflowY = "hidden";
    };

    close = () => {
        this.setState( { isVisible: false } );
        document.body.style.overflowY = "scroll";
        this.stopVideo();
    };

    stopVideo = () => {
        var iframe = document.querySelector( 'iframe');
        var video = document.querySelector( 'video' );

        if ( iframe ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }

        if ( video ) {
            video.pause();
        }
    };

    render() {
        const url = "https://www.youtube.com/embed/lSNmfy_KOJg";

        return (
            <Fragment>
                <div className="embed">
                    <div className="embed-image-overlay">
                        <a className="embed-click swipebox" href="#video">
                            <div className="embed-center">
                                <div onClick={ this.open } className="embed-play">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        </a>

                        <div className="embed-image">
                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src="assets/img/placeholder/1920x800.jpg" alt="Video" />
                                </div>
                            </div>
                        </div>

                        <div className="embed-bg"></div>
                    </div>
                </div>

                <div id="swipebox-overlay" style={ { display: this.state.isVisible ? "block" : "none" } }>
                    <div id="swipebox-container">
                        <div id="swipebox-slider" style={ { display: 'block' } }>
                            <div className="slide">
                                <div className="swipebox-video-container">
                                    <div className="swipebox-video">
                                        <iframe title="video" allowFullScreen frameBorder="0" src={ url }></iframe>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div onClick={ this.close } id="swipebox-close"></div>
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default VideoModal;
