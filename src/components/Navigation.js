import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css"
const Navigation =()=> {
    return(
    <nav>
        <h2>제목 미정</h2>
        <ul class ="nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/">Chat</Link></li>
            <li><Link to="/">Todo</Link></li>
        </ul>
    </nav>
    )
}
export default Navigation;