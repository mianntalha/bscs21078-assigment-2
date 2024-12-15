import React from "react";
import "../css/app.css";

const DropdDown=()=>{
    return (
        <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Dropdown Menu</h5>
        </div>
        <div className="card-body">
          <select className="form-select mb-3">
            <option selected>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
    
         
        </div>
      </div>
    )
}

export default DropdDown;