import React from "react";

import TeamData from "../../data/team-members/teamMembersData";
import { Carousel } from "react-responsive-carousel";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// import { Swiper, SwiperSlide } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Swiper from "react-id-swiper";
// import 'swiper/css/swiper.css';
// Import Swiper styles
// import "swiper/scss";
// import "swiper/scss/free-mode";
// import "swiper/scss/pagination";
// import "swiper/swiper.min.css";
// import "swiper/modules/free-mode/free-mode.min.css";
// import "swiper/modules/navigation/navigation.scss";
// import "swiper/modules/thumbs/thumbs.min.css";
// import "swiper/css";
// swiper bundle styles
// import "swiper/swiper-bundle.min.css";

// swiper core styles
// import "swiper/swiper.min.css";

// modules styles
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

// import './styles.css';

// import required modules
// import { FreeMode, Pagination } from "swiper/modules";
const TeamMembers = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    // centeredSlides: true,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="wrapper" style={{ marginTop: "2rem" }}>
      <div className="title">
        <h6 className="text-primary text-uppercase">What we offer</h6>
      </div>

      <div className="title-opacity">
        <div className="title-opacity-text">Service</div>
      </div>

      <div className="description text-justify">
        <p>
          Welcome to HealthSynX, your strategic partner for introducing
          cutting-edge healthcare solutions and products to the market. Our
          mission is to leverage the power of technology to transform healthcare
          and enhance lives. Explore our range of services crafted to pave the
          way for a healthier future.
        </p>
      </div>

      <div className="row gutter-width-md with-pb-md spacer p-top-lg">
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        > */}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {/* <Swiper {...params}> */}
        {TeamData &&
          TeamData.map((member, key) => {
            return (
              // <SwiperSlide>
              <div key={key} className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="team-member">
                  <div className="team-member-top">
                    <div className="img object-fit">
                      <div className="object-fit-cover">
                        <img
                          src={member.imgSrc}
                          alt={member.name}
                          style={{ borderRadius: "10px" }}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="team-member-position">
                      <p>{member.position}</p>
                    </div>
                  </div>

                  <div className="team-member-content">
                    {/* <h4 className="team-member-t-head">{member.name}</h4> */}

                    <div className="team-member-description text-justify">
                      <p>{member.description}</p>
                    </div>
                  </div>

                  {/* <nav className="team-member-nav-items">
                    <ul className="nav">
                      <li className="nav-item">
                        <a title="Facebook" href={member.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a title="LinkedIn" href={member.linkedIn}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a title="Instagram" href={member.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </nav> */}
                </div>
              </div>
              // </SwiperSlide>
            );
          })}
        {/* </Swiper> */}
        {/* </Carousel> */}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default TeamMembers;
