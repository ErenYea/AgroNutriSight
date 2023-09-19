import React from "react";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>
        © {new Date().getFullYear()} Empowering Precision through AI By{" "}
        <a href={process.env.PUBLIC_URL}>HealthSynX</a>
      </p>
    </div>
  );
};

export default Copyright;
