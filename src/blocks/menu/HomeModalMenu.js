import React from "react";
import { Link } from "react-scroll";
const HomeModalMenu = ({ close }) => {
  const click = (x) => {
    close();
    // window.location.href = process.env.PUBLIC_URL + x;
    setTimeout(this.set, 800);
  };
  return (
    <nav className="menu-primary">
      <ul className="nav">
        <li className="nav-item">
          <Link
            onClick={(e) => click(e)}
            title="Services"
            to="services"
            href="#services"
          >
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link
            onClick={(e) => click(e)}
            title="Teams"
            to="team-members"
            href="#team-members"
          >
            What we offer
          </Link>
        </li>

        {/* <li className="nav-item">
          <a title="Pricing" href={ process.env.PUBLIC_URL + "/#pricing" }>Pricing</a>
        </li> */}

        <li className="nav-item">
          <Link
            onClick={(e) => this.click(e)}
            title="Testimonials"
            to="testimonials"
            href="#testimonials"
          >
            Health Tech
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={(e) => click(e)} title="News" to="news" href="#news">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={(e) => click(e)}
            title="About Us"
            to="about-us"
            href="#about-us"
          >
            About Us
          </Link>
        </li>

        <li className="nav-item">
          <Link
            onClick={(e) => click(e)}
            title="Contacts"
            to="contacts"
            href="#contacts"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeModalMenu;
