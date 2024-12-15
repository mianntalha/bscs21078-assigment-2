import React from "react";
import "../css/app.css"; // Assuming this file contains necessary styles

const TextArea = () => {
  return (
    <div class="card">
    <div class="card-header">
      <h5 class="card-title mb-0">Textarea</h5>
    </div>
    <div class="card-body">
      <textarea
        class="form-control"
        rows="2"
        placeholder="Textarea"
      ></textarea>
    </div>
  </div>
  );
};

export default TextArea;
