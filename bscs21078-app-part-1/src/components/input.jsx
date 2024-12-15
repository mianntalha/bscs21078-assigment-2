import React  from "react";
import "../css/app.css";

const Input = () =>{
    return(
        <div className="card">
    <div className="card-header">
      <h5 className="card-title mb-0">Input</h5>
    </div>
    <div className="card-body">
      <input
        type="text"
        className="form-control"
        placeholder="Input"
      />
    </div>
  </div>
    )
}

export default Input;