import React from "react";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <a
        className="logo logo-primary transform-scale-h"
        title="Logo"
        href={process.env.PUBLIC_URL + "/"}
      >
        <img src="assets/img/logo/logo_small.png" alt="Logo" />
      </a>
    </div>
  );
};

export default HeaderLogo;
