import React  from "react";
import "../css/app.css";

const LeftSideBar = () =>{
    return(
        <ul class="list-group list-group-flush newsfeed-left-sidebar">
       
        <li class="list-group-item d-flex justify-content-between align-items-center sd-active">
            <a href="index.html" class="sidebar-item"><img src="/public/newsfeed.png" alt="newsfeed"/> News Feed</a>
            <a href="#" class="newsfeedListicon"><i class='bx bx-dots-horizontal-rounded'></i></a>
        </li>
        
    </ul>
    )
}

export default LeftSideBar;