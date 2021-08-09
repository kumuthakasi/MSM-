import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div>
            <div className="ui secondary menu">

                <div className="item">
                    <img className="ui image img-height" src="./assets/logo.png" />
                </div>
                <div className="item ">
                    <div className="custom-style">Request A Demo</div>
                </div>
                <div className="right menu">
                    <div className="item">
                        <button className="custom-button" type="submit">Login</button>   </div></div>
            </div>
        </div>
    )
}

export default Header