import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

import PropTypes from 'prop-types';

import HomeHeaderLogo from '../../blocks/logo/HomeHeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import ModalMenuPrimary from '../../blocks/menu/ModalMenuPrimary';
import HomeModalMenu from '../../blocks/menu/HomeModalMenu';
import ModalMenuSecondary from '../../blocks/menu/ModalMenuSecondary';
import ModalMenuLanguages from '../../blocks/menu/ModalMenuLanguages';

class MenuModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false,
            isHomePage: true
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    };

    componentDidMount() {
        if ( document.body.classList.contains( 'home' ) ) {
            this.setState( { isHomePage: true } )
        } else {
            this.setState( { isHomePage: false } )
        }
    };

    open() {
        this.setState( { showModal: true } );
    };

    close() {
        this.setState( { showModal: false  } );
    };

    render() {
        return (
            <Fragment>
                <div className={ "menu-toggle " + this.props.buttonClass }>
                    <button onClick={ this.open } type="button" className={ "btn btn-lg " + this.props.buttonProps + " btn-round p-0 min-w-auto" }>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                
                <Modal
                    id="menu-modal"
                    className="modal fade menu-modal"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full"
                    ref={ node => this.chart = node }
                    >
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <HomeHeaderLogo logoColor="light" />
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <SearchModal btnOutline="tertiary" />

                                            <div className="menu-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg btn-outline-tertiary btn-round p-0 min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center w-100">
                                    <ModalMenuSecondary />

                                    <div className="animated fadeinright d-flex justify-content-end w-100 order-0 order-sm-1 order-md-1 order-lg-1 order-xl-1">
                                       { this.state.isHomePage ? <HomeModalMenu /> : <ModalMenuPrimary /> }
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between w-100">
                                    <div className="modal-text">
                                        <p>© { new Date().getFullYear() } Business Consulting Agency React JS Template By Adveits</p>
                                    </div>

                                    <nav className="languages">
                                        <ModalMenuLanguages />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    };
};

MenuModal.propTypes={
    buttonClass: PropTypes.string,
    buttonProps: PropTypes.string
};

export default MenuModal;
