import React, { Component } from "react";
import { Link } from "react-scroll";

class HomeHeaderMenuPrimary extends Component {
  constructor() {
    super();
    this.state = {
      over: false,
      pushed: false,
    };

    this.scrollEvent = this.scrollEvent.bind(this);
    this.set = this.set.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEvent, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent, { passive: true });
  }

  removeActive() {
    if (document.querySelector(".active")) {
      let actives = document.querySelector(".active");

      if (actives !== null) {
        actives.classList.remove("active");
      }
    }
  }

  scrollEvent() {
    let offset = 10;
    const offsets = [];
    const link_names = [];

    offsets.push(document.getElementById("services").offsetTop);
    offsets.push(document.getElementById("about-us").offsetTop);
    offsets.push(document.getElementById("team-members").offsetTop);
    offsets.push(document.getElementById("price-plans").offsetTop);
    offsets.push(document.getElementById("testimonials").offsetTop);
    offsets.push(document.getElementById("news").offsetTop);
    offsets.push(document.getElementById("contacts").offsetTop);

    link_names.push(document.getElementById("nav-services"));
    link_names.push(document.getElementById("nav-about"));
    link_names.push(document.getElementById("nav-teams"));
    link_names.push(document.getElementById("nav-pricing"));
    link_names.push(document.getElementById("nav-testimonials"));
    link_names.push(document.getElementById("nav-news"));
    link_names.push(document.getElementById("nav-contacts"));

    if (!this.state.pushed) {
      if (window.scrollY < offsets[0]) {
        this.removeActive();
      }

      for (let i = 0; i < offsets.length; i++) {
        if (window.scrollY + offset > offsets[i]) {
          this.removeActive();
          link_names[i].classList.add("active");
        }
      }
    }
  }

  handleClick(e) {
    this.setState({ pushed: true });
    this.removeActive();

    let active = e.target;
    active.parentNode.classList.add("active");

    setTimeout(this.set, 800);
  }

  set() {
    this.setState({ pushed: false });
  }

  render() {
    return (
      <div className="menu">
        <nav className="menu-primary">
          <ul className="nav">
            <li id="nav-services" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="Services"
                to="services"
                href="#services"
              >
                Collaborations
              </Link>
            </li>

            <li id="nav-teams" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="Teams"
                to="team-members"
                href="#team-members"
              >
                What we offer
              </Link>
            </li>
            {/* 
            <li id="nav-pricing" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="Pricing"
                to="price-plans"
                href="#price-plans"
              >
                Pricing
              </Link>
            </li> */}

            <li id="nav-testimonials" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="Testimonials"
                to="testimonials"
                href="#testimonials"
              >
                Health Tech
              </Link>
            </li>

            <li id="nav-news" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="News"
                to="news"
                href="#news"
              >
                News
              </Link>
            </li>
            <li id="nav-about" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="About Us"
                to="about-us"
                href="#about-us"
              >
                About Us
              </Link>
            </li>

            <li id="nav-contacts" className="nav-item">
              <Link
                onClick={(e) => this.handleClick(e)}
                title="Contacts"
                to="contacts"
                href="#contacts"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomeHeaderMenuPrimary;
