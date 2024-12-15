import React from 'react';
import '../css/app.css'; // Ensure you import your CSS

const MenuItem = () => {
  return (
    <div className="col-lg-4">
      <div className="single-menu">
        <div className="title-div justify-content-between d-flex">
          <h4>Cappuccino</h4>
          <p className="price float-right">
            $49
          </p>
        </div>
        <p>
          Usage of the Internet is becoming more common due to rapid advance.
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
