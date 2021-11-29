import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2>Work that we've done for the past 3 years</h2>

            <h6 className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              phasellus morbi erat in massa sit pellentesque. Sed ut leo velit
              urna,
            </h6>

            <div className="card mt-4">
              <div className="img">
                <img src="./assets/img/portfolio-2.png" alt="2" />
              </div>
              <div className="text">
                <h3>Restaurant Website Design</h3>
                <p>
                  I worked with the guys at CBRE to redesign their entire
                  website and mobile app fro both Android and iOS. This project
                  lasted for 4 months and was a very challenging one.
                </p>
              </div>
            </div>

            <div className="card mt-4">
              <div className="img">
                <img src="./assets/img/portfolio-4.png" alt="4" />
              </div>
              <div className="text">
                <h3>Restaurant Website Design</h3>
                <p>
                  I worked with the guys at CBRE to redesign their entire
                  website and mobile app fro both Android and iOS. This project
                  lasted for 4 months and was a very challenging one.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="img">
                <img src="./assets/img/portfolio-1.png" alt="1" />
              </div>
              <div className="text">
                <h3>Restaurant Website Design</h3>
                <p>
                  I worked with the guys at CBRE to redesign their entire
                  website and mobile app fro both Android and iOS. This project
                  lasted for 4 months and was a very challenging one.
                </p>
              </div>
            </div>

            <div className="card mt-4">
              <div className="img">
                <img src="./assets/img/portfolio-3.png" alt="3" />
              </div>
              <div className="text">
                <h3>Restaurant Website Design</h3>
                <p>
                  I worked with the guys at CBRE to redesign their entire
                  website and mobile app fro both Android and iOS. This project
                  lasted for 4 months and was a very challenging one.
                </p>
              </div>
            </div>

            <div className="text-center mt-5 pt-4">
              <button className="btn mt-2">VIEW ALL PROJECTS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
