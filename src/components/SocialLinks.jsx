import React from "react";

const SocialLinks = () => {
  return (
    <div id="social-links">
      <div className="container-fluid py-5">
        <div className="social d-flex justify-content-center align-items-center">
          <div className="item">
            <img src="./assets/vector/slack.svg" alt="slack" />
          </div>
          <div className="item">
            <img src="./assets/vector/netflix.svg" alt="netflix" />
          </div>
          <div className="item">
            <img src="./assets/vector/google.svg" alt="google" />
          </div>
          <div className="item">
            <img src="./assets/vector/airbnb.svg" alt="airbnb" />
          </div>
          <div className="item">
            <img src="./assets/vector/uber.svg" alt="uber" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
