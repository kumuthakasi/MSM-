import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div>
            <div className="ui secondary menu">

                <div className="item">
                    <img className="ui image" src="./assets/logo.png" style={{ 'height': 94 }} />
                </div>
                <div className="item ">
                    <div className="custom-style">Request a Demo</div>
                </div>
                <div className="right menu">
                    <div className="item">
                        <button className="custom-button" type="submit">Login</button>   </div></div>
            </div>
        </div>
    )
}

export default Header