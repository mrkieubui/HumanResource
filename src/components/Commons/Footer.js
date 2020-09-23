import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h4>ABOUT</h4>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-2">
                            <h4>LEARN MORE</h4>
                            <ul>
                                <li><NavLink to="/">How it works?</NavLink></li>
                                <li><NavLink to="/">Useful Tools</NavLink></li>
                                <li><NavLink to="/">Pricing</NavLink></li>
                                <li><NavLink to="/">Sitemap</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>SUPPORT</h4>
                            <ul>
                                <li><NavLink to="/">FAQ</NavLink></li>
                                <li><NavLink to="/">Contact Us</NavLink></li>
                                <li><NavLink to="/">Help Desk</NavLink></li>
                                <li><NavLink to="/">Knowledgebase</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>ABOUT US</h4>
                            <ul>
                                <li><NavLink to="/">About Us</NavLink></li>
                                <li><NavLink to="/">Careers</NavLink></li>
                                <li><NavLink to="/">Terms of Service</NavLink></li>
                                <li><NavLink to="/">Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>CONNECT WITH US</h4>
                            <NavLink to="/"><i className="fab fa-facebook-square"></i></NavLink>
                            <NavLink to="/"><i className="fab fa-twitter"></i></NavLink>
                            <NavLink to="/"><i className="fab fa-github"></i></NavLink>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-12 text-center">
                            <p>Copyright ©2020 All rights reserved | This template is made with <i className="fa fa-heart"></i>by <NavLink to="/">Colorlib</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
