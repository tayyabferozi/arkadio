import React from "react";

const Services = () => {
  return (
    <div className="services-container">
      <div id="services">
        <img
          src="./assets/vector/bg-services-line.svg"
          className="line"
          alt="bg"
        />
        <div className="container-fluid">
          <img
            src="./assets/vector/bg-services.svg"
            className="stroke"
            alt="bg"
          />
          <div className="text">
            <h2>We Are Optimistics Who Love To Work Together.</h2>
            <h6 className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              phasellus morbi erat in massa sit pellentesque. Sed ut leo velit
              urna, etiam molestie nulla.
            </h6>
          </div>

          <div className="row cards-container">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card">
                <div className="img">
                  <img src="./assets/vector/feature-1.svg" alt="feature-1" />
                </div>
                <div className="text">
                  <h4>Data Analysis</h4>
                  <p>
                    Gravida risus commodo viverra maecenas accumsan lacus vel
                    lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card">
                <div className="img">
                  <img src="./assets/vector/feature-2.svg" alt="feature-2" />
                </div>
                <div className="text">
                  <h4>Social Advertising</h4>
                  <p>
                    Gravida risus commodo viverra maecenas accumsan lacus vel
                    lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card">
                <div className="img">
                  <img src="./assets/vector/feature-3.svg" alt="feature-3" />
                </div>
                <div className="text">
                  <h4>Web Design</h4>
                  <p>
                    Gravida risus commodo viverra maecenas accumsan lacus vel
                    lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card">
                <div className="img">
                  <img src="./assets/vector/feature-4.svg" alt="feature-4" />
                </div>
                <div className="text">
                  <h4>Automation Marketing</h4>
                  <p>
                    Gravida risus commodo viverra maecenas accumsan lacus vel
                    lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
