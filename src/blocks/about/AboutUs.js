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

      <div className="row gutter-width-md with-pb-md justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <h2 className="text-justify">
              HealthSynX - Where Technology and Expertise Converge to Create a Healthier Tomorrow for All
            </h2>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="description-2">
            <p className="text-justify">
              Welcome to HealthSynX, your gateway to the future of healthcare innovation. We are your dedicated partners in catalyzing transformative change within the healthcare industry. At HealthSynX, we specialize in collaborating with health tech companies, combining our expertise to bring their visionary products to the forefront of the healthcare landscape. Our extensive suite of services, encompassing branding, commercialization, marketing, and sales, serves as the catalyst for propelling groundbreaking healthcare solutions into the global market. What sets us apart is our unwavering commitment to harnessing the power of artificial intelligence, leveraging its capabilities to not only shape the future of healthcare but also to empower healthcare tech pioneers. Together, we embark on a journey to redefine healthcare, making it smarter, more accessible, and more effective for all. Welcome to HealthSynX, where innovation knows no bounds, and the future of healthcare begins today.
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
        At HealthSynX, our unwavering mission is to lead the charge in transforming the healthcare landscape by unlocking the boundless potential of AI-driven solutions. We firmly believe that advanced technology holds the key to addressing the most intricate challenges in healthcare, spanning from early disease detection to the precision of treatment planning. While we don't directly innovate, our expertise lies in supporting and accelerating the commercialization and branding of innovative healthcare products and solutions.
      </p>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Vision</h6>
      </div>

      <p className="text-justify">
        Our vision is a future where healthcare is no longer merely a response to illness but a proactive, personalized, and precision-guided endeavor. We see a world where AI empowers healthcare professionals, enhances patient outcomes, and makes healthcare more accessible and efficient for all. We're here to facilitate this vision in partnership with health tech innovators.
      </p>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Commitment to Enabling Innovation</h6>
      </div>

      <p className="text-justify">
        Dedication to innovation fuels our organization. We are unwavering in our pursuit of expanding the frontiers of what's achievable in healthcare. Our team of visionary experts, comprising scientists, engineers, and healthcare specialists, tirelessly collaborates to craft AI-driven solutions that propel advancements and revolutionize the healthcare landscape.
      </p>

      <div className="title" style={{ marginTop: "4rem" }}>
        <h6 className="text-primary text-uppercase">Our Core Values</h6>
      </div>

      <p className="text-justify">
        At HealthSynX, our core values shape our identity and guide our actions:
      </p>
      <ul className="text-justify">
        <li><b>Innovation:</b> We thrive on innovation, consistently pushing boundaries and challenging the status quo in collaboration with our health tech partners.</li>
        <li><b>Precision:</b> We believe in the power of precision, tailoring our solutions to meet the unique needs of each health tech venture we support.</li>
        <li><b>Collaboration:</b> Collaboration is central to our approach. We work closely with health tech companies and healthcare professionals to deliver the best possible outcomes.</li>
        <li><b>Empowerment:</b> We empower healthcare professionals and health tech innovators with cutting-edge tools and insights to enhance patient care and drive market success.</li>
      </ul>


      <p style={{ marginTop: "4rem" }}>
        <b style={{ textAlign: "center", display: "block" }}>Join Us in Shaping the Future</b>
      </p>

      <p style={{ marginTop: "4rem" }}>
        We extend an invitation to health tech companies and professionals to join us on this remarkable journey toward a future where healthcare is a harmonious blend of science and compassion, driven by technology and enabled by strategic partnerships. Together, we can make a profound impact on the lives of patients and the success of healthcare technology companies.
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
