import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import img1 from "../../images/flaticon/svg/001-consultation.svg";
import img2 from "../../images/flaticon/svg/002-discussion.svg";
import img3 from "../../images/flaticon/svg/003-turnover.svg";

export default class CardInfo extends Component {
    // ..
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    render() {
        return (
            <div className="card_info" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card_border">
                                <img src={img1} alt="" />
                                <h5>Corporate Collaboration</h5>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <NavLink to="/">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card_border">
                                <img src={img2} alt="" />
                                <h5>Strategic Partners</h5>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <NavLink to="/">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card_border">
                                <img src={img3} alt="" />
                                <h5>Infinite Posibilities</h5>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <NavLink to="/">Learn More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
