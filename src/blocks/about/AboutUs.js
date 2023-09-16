import React, { useEffect, useState } from "react";
import "./about.css";

const AboutUs = () => {
  
  const getLengthBasedOnScreenWidth = () => {
    return window.innerWidth < 1280 ? 7 : 21;
  };

  const [arrayLength, setArrayLength] = useState(getLengthBasedOnScreenWidth);

  useEffect(() => {
    const handleResize = () => {
      setArrayLength(getLengthBasedOnScreenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsToRepeat = [
    "Innovating Healthcare Horizons",
    "Customer-Centric Excellence",
    "Personalized Healthcare",
    "AI-Powered Drug Discovery",
    "Global Health Impact",
    "Health & Wellness Tips",
    "Chronic Disease Management",
  ];

  const repeatedItems = Array.from({ length: arrayLength }).map((_, index) => (
    <div className="icon-list-item" key={index}>
      <p className="para">
        <span className="d-flex">
          <i className="fas fa-check"></i>
          <span>{itemsToRepeat[index % itemsToRepeat.length]}</span>
        </span>
      </p>
    </div>
  ));


  return (
    <div className="wrapper" style={{ marginTop: "4rem" }}>
      <div className="title">
        <h6 className="text-primary text-uppercase">About Us</h6>
      </div>

      <div className="row gutter-width-md with-pb-md">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <h2 className="text-justify">
              Biologic AI - Where Science Meets Compassion in Pursuit of a Healthier Tomorrow
            </h2>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <p className="text-justify">
              Our unwavering mission is to transform healthcare by unlocking the limitless capabilities
              of AI-driven solutions. We firmly believe that cutting-edge technology has the potential
              to tackle the most intricate challenges in healthcare, spanning from early disease
              detection to the precision of treatment planning.
            </p>
          </div>
        </div>
      </div>

      <div className="icon-list">
        <div className="icon-list-items">{repeatedItems}</div>
      </div>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Mission</h6>
      </div>

      <p className="text-justify">
        At Biologic AI, we are driven by a singular mission: to revolutionize healthcare by harnessing the boundless potential of AI-driven solutions. We believe that cutting-edge technology has the capacity to address some of the most complex challenges in the medical field, from early disease detection to precision treatment planning.
      </p>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Vision</h6>
      </div>

      <p className="text-justify">
        Our vision is one of a future where healthcare is not just a reactive response to illness but a proactive, personalized, and precision-driven endeavor. We envision a world where AI empowers healthcare professionals, improves patient outcomes, and makes healthcare more accessible and efficient for all.
      </p>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Commitment to Innovation</h6>
      </div>

      <p className="text-justify">
        Innovation is at the core of everything we do. We are committed to pushing the boundaries of what's possible in healthcare. Our team of visionary scientists, engineers, and healthcare experts collaborates tirelessly to develop AI-driven solutions that drive progress and transform the patient experience.
      </p>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Core Values</h6>
      </div>

      <p className="text-justify">
        At Biologic AI, we are guided by a set of core values that define who we are and how we operate:
      </p>
      <ul>
        <li><b>Innovation:</b> We thrive on innovation, constantly pushing boundaries, and challenging the status quo.</li>
        <li><b>Precision:</b> We believe in the power of precision, tailoring solutions to meet the unique needs of each patient.</li>
        <li><b>Collaboration:</b> Collaboration is central to our approach, as we work hand-in-hand with healthcare professionals to deliver the best possible outcomes.</li>
        <li><b>Empowerment:</b> We empower healthcare professionals with cutting-edge tools and insights to enhance patient care.</li>
      </ul>


      <p style={{ marginTop: "4rem" }}>
        <b style={{ textAlign: "center", display: "block" }}>Join Us in Shaping the Future</b>
      </p>

      <p style={{ marginTop: "4rem" }}>
        We invite you to join us on this remarkable journey towards a future where healthcare is not just a science but an art, driven by compassion and enabled by technology. Together, we can make a profound impact on the lives of patients and healthcare professionals alike.
      </p>

      {/* <p style={{ marginTop: "4rem" }}>
        <b>
          <i style={{ textAlign: "center", display: "block" }}>
            Biologic AI - Where Science Meets Compassion in Pursuit of a Healthier Tomorrow.
          </i>
        </b>
      </p> */}

    </div>
  );
};

export default AboutUs;
