import React from "react";
import "./Header.css"

const Header = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand mr-auto" href="#">
                <img src={require("../../assets/img/tng-logo.jpg")} width="75px"/>
            </a>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                <span className="navbar-text">
                    <h3>{props.message}</h3>
                </span>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <span className="navbar-text">
                    <h3>Current Score:  {props.currentScore}  | Top Score:  {props.highScore}</h3>
                </span>
                </li>
            </ul>
        </nav>
        <div className="jumbotron">
            
            <h1 className="display-3">
                Star Trek: The Next Generation
            </h1>
            
            <p className="lead">Click a U.S.S Enterprise crew memeber to earn points,
             but remember who you clicked to keep those points!</p>
            
        </div>
    </div>
)

export default Header