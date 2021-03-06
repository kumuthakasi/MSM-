import React from 'react';
import './style.css';

class Content extends React.Component {
    render() {
        return (
            <div className="custom-margin">
                <div className="ui centered card custom-width">
                    <div className="content">
                        <div className="header">
                            <img className="ui image" src="./assets/logo.png" />
                        </div>
                    </div><div className="content">
                        <div className="description">
                            <div className="custom-login"><h2>
                                Login
                            </h2></div>
                            <form className="ui form">
                                <div className="field"><input placeholder="Enter Your User Name" />
                                </div>
                                <div className="field">
                                    <input placeholder="Enter Your Password" />
                                </div>
                                <div className="field">
                                    <div className="ui checkbox">
                                        <input type="checkbox" />
                                        <label>Remember Me</label>
                                    </div>
                                </div>
                                <div className="field" >
                                    <button type="submit" className="ui primary button" style={{ width: '100%' }}>Login</button></div></form>
                        </div>
                    </div>
                    <div className="extra content custom-color">
                        <a href="" >Forgot Username?</a>  | &nbsp;
                        <a href="" >Forgot Password?</a></div>
                </div>
            </div>
        )
    }

}

export default Content

