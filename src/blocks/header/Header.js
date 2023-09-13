import React, { Component } from 'react';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import HeaderMenuPrimary from '../../blocks/menu/HeaderMenuPrimary';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';

class Header extends Component {
    render() {
        return (
            <header id="header" className="site-header">
                <div className="wrapper">
                    <div className="header-content d-flex justify-content-between">
                        <div className="header-left align-self-center">
                            <HeaderLogo />
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                                <HeaderMenuPrimary />

                                <SearchModal btnOutline="secondary" />

                                <MenuModal buttonProps=" btn-outline-secondary btn-round "/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;
