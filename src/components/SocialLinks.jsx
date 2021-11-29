import Fade from "react-reveal/Fade";

const SocialLinks = () => {
  return (
    <div id="social-links" className="py-5">
      <Fade bottom cascade>
        <div className="container-fluid social d-flex justify-content-center align-items-center">
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
      </Fade>
    </div>
  );
};

export default SocialLinks;
