import React from 'react';

import HeaderLogo from '../../blocks/logo/HeaderLogo';

const HeaderUI = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <div className="header-left align-self-center">
                        <HeaderLogo />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderUI;
