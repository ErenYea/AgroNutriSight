import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                name: '',
                email: '',
                message: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    }

    submitForm = async e => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }

        this.setState( { isSubmitting: true } );

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }, ).then( response => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );
    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );
        this.setState( {
            alertTimeout: setTimeout( function() {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );
                    setTimeout( function() {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } )
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '#cf-1' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = e =>
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        } );

    render() {
        return (
            <form onSubmit={ this.submitForm } method="post" action="form.php" id="cf-1" className="contact-form">
                <div className="form-group form-group-xs">
                    <input 
                        name="author" 
                        type="text"
                        className="form-control form-control-lg bg-gray-light" 
                        id="cf-1-name"
                        placeholder="Name" 
                        value={ this.state.values.author }
                        onChange={ this.handleInputChange }
                        required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <input 
                        name="email" 
                        type="email"
                        className="form-control form-control-lg bg-gray-light" 
                        id="cf-1-email"
                        placeholder="Email" 
                        value={ this.state.values.email }
                        onChange={ this.handleInputChange }
                        required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <textarea 
                        name="message" 
                        className="form-control form-control-lg bg-gray-light"
                        id="cf-1-message" 
                        placeholder="Message" 
                        value={ this.state.values.message }
                        onChange={ this.handleInputChange }
                        required="required">
                    </textarea>
                </div>

                <div className="form-group form-group-xs mb-0">
                    <button type="submit" className="btn btn-outline-secondary">Send Message</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
