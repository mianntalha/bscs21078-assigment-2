import React, { useEffect } from "react";
import feather from "feather-icons";
import "../css/app.css"; // Make sure your styles are correctly linked

const SalesCard = () => {
  // Use useEffect to initialize Feather icons after the component renders
  useEffect(() => {
    feather.replace(); // Replaces <i> tags with Feather icons
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">Sales</h5>
          </div>

          <div className="col-auto">
            <div className="stat text-primary">
              <i className="align-middle" data-feather="truck"></i> {/* Feather icon */}
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">2.382</h1>
        <div className="mb-0">
          <span className="text-danger">
            {" "}
            <i className="mdi mdi-arrow-bottom-right"></i> -3.65%{" "}
          </span>
          <span className="text-muted">Since last week</span>
        </div>
      </div>
    </div>
    
  );
};

export default SalesCard;
