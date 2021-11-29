import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container-fluid">
        <Slide bottom cascade>
          <div>
            <small>UPSKILL FOR A BETTER FUTURE</small>

            <h2 className="mt-3 mb-4">Request More Information</h2>

            <h6 className="mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              augue eget pretium fames nibh. Eget mauris tristique odio.
            </h6>

            <button className="btn">START A PROJECT</button>

            <p className="copyright mt-5 mb-5">&copy; 2021 Arkadio Digital</p>
          </div>
        </Slide>

        <hr />

        <div className="nav">
          <div className="logo">
            <img src="./assets/vector/logo.svg" alt="logo" />
          </div>
          <ul className="nav">
            <li className="nav-item">
              <a href="/">Team</a>
            </li>
            <li className="nav-item">
              <a href="/">Case Studies</a>
            </li>
            <li className="nav-item">
              <a href="/">Publications</a>
            </li>
          </ul>
          <div className="social">
            <div className="item">
              <img src="./assets/vector/linkedin.svg" alt="linkedin" />
            </div>
            <div className="item">
              <img src="./assets/vector/facebook.svg" alt="facebook" />
            </div>
            <div className="item">
              <img src="./assets/vector/instagram.svg" alt="instagram" />
            </div>
            <div className="item">
              <img src="./assets/vector/youtube.svg" alt="youtube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
