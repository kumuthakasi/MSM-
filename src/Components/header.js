import React from 'react';
import './style.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="ui secondary menu">

                <div className="item">
                    <img className="ui image img-height" src="./assets/logo.png" />
                </div>
                <div className="item ">
                    <div className="custom-style">
                        <Router>
                            {/* <Link to="/requestdemo">Request A Demo</Link> */}
                        </Router>
                    </div>
                </div>
                <div className="right menu">
                    <div className="item">
                        <button className="custom-button" type="submit">Login</button>   </div></div>
            </div>
        </div>
    )
}

export default Header