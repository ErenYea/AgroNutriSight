import React from "react";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>
        © {new Date().getFullYear()} Empowering Health Tech Visionaries for a Smarter Tomorrow By{" "}
        <a href={process.env.PUBLIC_URL}>HealthSynX</a>
      </p>
    </div>
  );
};

export default Copyright;
