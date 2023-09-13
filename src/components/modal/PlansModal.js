import React, { Component, Fragment } from 'react'
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

import HomeHeaderLogo from "../../blocks/logo/HomeHeaderLogo";

import ModalPlansForm from "../form/ModalPlansForm";

class PlansModal extends Component {

    constructor( context ) {
        super( context );

        this.state = {
            showModal: false,
            addPadding: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    };

    open() {
        this.setState( { showModal: true } );
    };

    close() {
        this.setState( { showModal: false } );
    };

    render() {
        return (
            <Fragment>
                <button onClick={ this.open } className="btn btn-outline-secondary">Choose Plan</button>

                <Modal
                    className="plans-modal"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full"
                    ref={ node => this.chart = node }>
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <HomeHeaderLogo logoColor="light"/>
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <div className="plans-close-toggle">
                                                <button
                                                    onClick={ this.close }
                                                    type="button"
                                                    className="btn btn-lg btn-outline-tertiary btn-round p-0 min-w-auto"
                                                    data-dismiss="modal" aria-label="Close"
                                                    >
                                                    <i className="fas fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <div className="plans-modal-content">
                                    <h3 className="modal-t-head after">
                                        Order <span className="modal-title-result">{ this.props.messageText }</span>
                                    </h3>

                                    <ModalPlansForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    };
};

PlansModal.propTypes={
    messageText: PropTypes.string
};

export default PlansModal;
