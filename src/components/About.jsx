import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const About = () => {
  return (
    <div id="about">
      <img src="./assets/vector/bg-about.svg" className="bg" alt="bg" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h2>We Are Optimists Who Love To Work</h2>

            <h6 className="f-200 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              phasellus morbi erat in massa sit pellentesque. Sed ut leo velit
              urna,
            </h6>
          </div>
          <div className="col-md-7">
            <Swiper
              spaceBetween={50}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="testimonial">
                  <div className="header">
                    <div className="user-info">
                      <div className="user-img">
                        <img src="./assets/img/client.png" alt="client" />
                      </div>
                      <div className="ms-4">
                        <h6>Diane Robertson</h6>
                        <small>Media-buyer @ STARBUCKS</small>
                      </div>
                    </div>
                    <img
                      src="./assets/img/starbucks.png"
                      alt="starbucks"
                      className="logo"
                    />
                  </div>
                  <div className="body">
                    <p>
                      “It is very important for us to keep abreast of the latest
                      developments and to navigate freely in the information
                      space, the resources of Medialogy allow us to do this.
                      Every day we can conduct operational monitoring of the
                      media and analyze data online, this saves the time of
                      analysts and journalists. ”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
