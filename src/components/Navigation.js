import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css"
const Navigation =()=> {
    return(
    <nav>
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