import React from "react";
import 'boxicons/css/boxicons.min.css';

const ReactionBar = () => {
  return (
    <div className="mb-3">
      {/* Reactions */}
      <div className="argon-reaction">
        <span className="like-btn">
          <a href="#" className="post-card-buttons" id="reactions">
            <i className="bx bxs-like mr-2"></i> 67
          </a>
          <ul className="reactions-box dropdown-shadow">
            <li className="reaction reaction-like" data-reaction="Like"></li>
            <li className="reaction reaction-love" data-reaction="Love"></li>
            <li className="reaction reaction-haha" data-reaction="HaHa"></li>
            <li className="reaction reaction-wow" data-reaction="Wow"></li>
            <li className="reaction reaction-sad" data-reaction="Sad"></li>
            <li className="reaction reaction-angry" data-reaction="Angry"></li>
          </ul>
        </span>
      </div>
      <a href="javascript:void(0)" className="post-card-buttons" id="show-comments">
        <i className="bx bx-message-rounded mr-2"></i> 5
      </a>
      <div className="dropdown dropup share-dropup">
        <a href="#" className="post-card-buttons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="bx bx-share-alt mr-2"></i> Share
        </a>
        <div className="dropdown-menu post-dropdown-menu">
          <a href="#" className="dropdown-item">
            <div className="row">
              <div className="col-md-2">
                <i className="bx bx-share-alt"></i>
              </div>
              <div className="col-md-10">
                <span>Share Now (Public)</span>
              </div>
            </div>
          </a>
          <a href="#" className="dropdown-item">
            <div className="row">
              <div className="col-md-2">
                <i className="bx bx-share-alt"></i>
              </div>
              <div className="col-md-10">
                <span>Share...</span>
              </div>
            </div>
          </a>
          <a href="#" className="dropdown-item">
            <div className="row">
              <div className="col-md-2">
                <i className="bx bx-message"></i>
              </div>
              <div className="col-md-10">
                <span>Send as Message</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactionBar;
