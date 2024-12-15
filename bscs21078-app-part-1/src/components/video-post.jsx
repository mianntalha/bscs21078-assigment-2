import React from 'react';
import '../css/app.css'; 

const VideoSection = () => {
  return (
    <section className="video-sec-area pb-100 pt-40" id="about">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
            <div className="overlay overlay-bg"></div>
            <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
              <img className="img-fluid" src="/public/play-icon.png" alt="Play" />
            </a>
          </div>
          <div className="col-lg-6 video-left">
            <h6>Live Coffee making process.</h6>
            <h1>
              We Telecast our <br />
              Coffee Making Live
            </h1>
            <p>
              <span>We are here to listen from you deliver excellence</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </p>
            <img className="img-fluid" src="/public/signature.png" alt="Signature" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
