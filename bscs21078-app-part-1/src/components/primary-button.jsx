import React from "react";
import "../css/app.css"; // Make sure your styles are correctly linked

const PrimaryButton = () => {
  // Use useEffect to initialize Feather icons after the component renders

  return (

    <div class="col-12 col-lg-6">
      
      <div class="card-body text-center">
        <div class="mb-3">
          <button class="btn btn-primary">Primary</button>
         
        </div>
       
      </div>

   
  </div>
   
  );
};

export default PrimaryButton;
