import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {
                name: '',
                email: '',
                message: ''
            }
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [name]: value
            }
        }));
    };

    sendEmail = () => {
        const { name, email, message } = this.state.values;
        // const subject = 'Contact Form Submission';
        const mailto = `mailto:huzaifa62012@gmail.com?subject=${encodeURIComponent(email)}&body=${encodeURIComponent(
            `${message}`
        )}`;
        window.location.href = mailto;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.sendEmail();
    };

    render() {
        const { name, email, message } = this.state.values;
        return (
            <form onSubmit={this.handleSubmit} className="contact-form">
                <div className="form-group form-group-xs">
                    <input
                        name="name"
                        type="text"
                        className="form-control form-control-lg bg-gray-light"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>

                <div className="form-group form-group-xs">
                    <input
                        name="email"
                        type="text"
                        className="form-control form-control-lg bg-gray-light"
                        placeholder="Subject"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>

                <div className="form-group form-group-xs">
                    <textarea
                        name="message"
                        className="form-control form-control-lg bg-gray-light"
                        placeholder="Message"
                        value={message}
                        onChange={this.handleInputChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group form-group-xs mb-0">
                    <button type="submit" className="btn btn-outline-secondary">
                        Send Message
                    </button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
