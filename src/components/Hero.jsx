import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container-fluid">
        <img
          src="./assets/vector/bg-hero-line.svg"
          className="line"
          alt="line"
        />
        <div className="row">
          <div className="col-md-6 order-2 order-md-1 left d-flex justify-content-center align-items-start flex-column">
            <Fade cascade>
              <div>
                <h1>
                  We Help Impactful <br /> Brand Build And <br />
                  Growth
                </h1>
                <h4 className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adip elit.
                  Sollicitudin congue feugiat nunc libero. Ac iscing facilisis
                  fringilla amet
                </h4>
                <div>
                  <button className="btn mt-4">Start a project</button>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-6 order-1 order-md-2 right">
            <img
              src="./assets/vector/bg-hero-dots.svg"
              className="dots"
              alt="dots"
            />
            <Fade>
              <img src="./assets/img/hero.png" className="right-img" alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
