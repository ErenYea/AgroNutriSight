import React, { Component } from 'react';

import HomeHeaderLogo from '../../blocks/logo/HomeHeaderLogo';
import HomeHeaderMenuPrimary from '../../blocks/menu/HomeHeaderMenuPrimary';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';

class HomeHeader extends Component {
    constructor() {
        super();
        this.state = { isFixed: false };
    };

    unfixHeader = () => {
        this.setState( { isFixed: false } );
    };

    fixHeader = () => {
        this.setState( { isFixed: true } );
    };

    componentDidMount() {
        const headerFixedTrue = 'header-fixed-true';
        let fromTop         = -1;

        if ( document.querySelector( '.service-items' ) ) {
            fromTop = 67;
        }

        let fromHTML = document.getElementById( 'services' );

        if ( document.querySelector( 'body' ).classList.contains( headerFixedTrue ) ) {
            if ( document.getElementById( 'header' ) ) {
                if ( fromHTML ) {
                    window.addEventListener( 'scroll', () => {
                        if ( ( window.screenTop - fromHTML.getBoundingClientRect().top ) > fromTop ) {
                            document.getElementById( 'header' ).classList.add( 'animated' );
                            document.getElementById( 'header' ).classList.add( 'slideInDown' );
                            document.querySelector( '.header-fixed-true' ).classList.add( 'header-fixed' );
                            this.fixHeader();
                        } else {
                            document.getElementById( 'header' ).classList.remove( 'animatedn' );
                            document.getElementById( 'header' ).classList.remove( 'slideInDown' );
                            document.querySelector( '.header-fixed-true' ).classList.remove( 'header-fixed' );
                            this.unfixHeader();
                        }
                    } );
                }
            }
        }
    };

    render() {
        return (
            <header id="header" className="site-header">
                <div className="wrapper">
                    <div className="header-content d-flex justify-content-between">
                        <div className="header-left align-self-center">
                            <HomeHeaderLogo logoColor={ this.state.isFixed ? "dark" : "light" }/>
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                                <HomeHeaderMenuPrimary />

                                <SearchModal btnOutline="tertiary" buttonClass="adv-light" />

                                <MenuModal buttonProps={ this.state.isFixed ? " btn-secondary btn-hover-main-secondary " : " btn-outline-tertiary btn-round " } buttonClass={ this.state.isFixed ? "adv-dark" : "adv-light mr-0" } />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
};

export default HomeHeader;