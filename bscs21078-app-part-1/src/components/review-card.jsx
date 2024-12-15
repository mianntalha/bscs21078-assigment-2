import React from 'react';
import '../css/app.css'; 

const ReviewItem = () => {
  return (
    <div className="col-lg-6 col-md-6 single-review" style={{ backgroundColor: '#b68834' }}>
      <img src="/public/r1.png" alt="Review" />
      <div className="title d-flex flex-row">
        <h4 style={{ color: 'white' }}>lorem ipsum</h4>
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      </div>
      <p style={{ color: 'white' }}>
        Accessories Here you can find the best computer accessory for your
        laptop, monitor, printer, scanner, speaker. Here you can find the best
        computer accessory for your laptop, monitor, printer, scanner, speaker.
      </p>
    </div>
  );
};

export default ReviewItem;
