import React from 'react';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="thirteen wide column">
                        <img className="custom-img" src="./assets/logo.png" />
                    </div>
                    <div className="three wide column">
                        <a href="">Terms Of Conditions</a><br />
                        <a href=""> Privacy Policy </a><br />
                        <a href=""> Careers </a><br />
                        <i className="blue big linkedin icon custom-style" ></i>

                        <img src="./assets/badge.svg" /></div>
                </div>
            </div>
        )
    }
}

export default Footer