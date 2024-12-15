import React from "react";
import 'boxicons/css/boxicons.min.css'; // Ensure you have Boxicons installed or linked in your project
import "../css/app.css"; // Your custom styles

const PostHeader = () => {
  return (
    <div className="media text-muted pt-3">
      <img
        src="/public/user-4.jpg"  // Hardcoded image path
        alt="Online user"
        className="mr-3 post-user-image"
      />
      <div className="media-body pb-3 mb-0 small lh-125">
        <div className="d-flex justify-content-between align-items-center w-100">
          <a href="#" className="text-gray-dark post-user-name">Arthur Minasyan</a> {/* Hardcoded user name */}
        </div>
        <span className="d-block">
          3 hours ago <i className="bx bx-globe ml-3"></i> {/* Hardcoded post time */}
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
