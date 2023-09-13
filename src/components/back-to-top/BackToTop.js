import React, { Component } from 'react';
import { Link } from 'react-scroll';

class BackToTop extends Component {;
    constructor() {
        super();
        this.state = {
            show: true,
        };  
    };

    componentDidMount() {
        document.body.classList.contains( "error404" ) ? this.setState( { show: false } )  : this.setState( { show: true } );
    };

    render() {
        let page = '';

        if ( document.body.classList.contains( 'header-fixed-true' ) ) {
            page = 'main';
        } else {
            page = 'header';
        }

        return (
            <div id="back-to-top" style ={ { display: this.state.show ? "block" : "none" } }>
                <Link className="scroll-to-id" to={ page } href={ "#" + page }><i className="malex-icon-arrow-up"></i></Link>
            </div>
        );
    };
};

export default BackToTop;
