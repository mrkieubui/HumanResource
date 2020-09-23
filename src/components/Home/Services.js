import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import img1 from "../../images/flaticon/svg/001-consultation.svg";
import img4 from "../../images/flaticon/svg/004-gear.svg";
import img5 from "../../images/flaticon/svg/005-conflict.svg";
import img6 from "../../images/flaticon/svg/006-meeting.svg";
import img7 from "../../images/flaticon/svg/007-brainstorming.svg";
import img9 from "../../images/flaticon/svg/009-brainstorming-2.svg";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default class Services extends Component {
    // ..
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    render() {

        return (
            <div className="services mt-80">
                <div className="container">
                    <div className="row pt-50">
                        <div className="col-12 text-center">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-4 text-center mt-5">
                            <img src={img4} alt="" />
                            <h5 className="mt-3">Regular Update</h5>
                            <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-4 text-center mt-5">
                            <img src={img5} alt="" />
                            <h5 className="mt-3">Infinite Posibilities</h5>
                            <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-4 text-center mt-5">
                            <img src={img6} alt="" />
                            <h5 className="mt-3">Good Security</h5>
                            <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-4 text-center mt-5">
                            <img src={img7} alt="" />
                            <h5 className="mt-3">HR Management</h5>
                            <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-4 text-center mt-5">
                            <img src={img1} alt="" />
                            <h5 className="mt-3">Intuitive Thinking</h5>
                            <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-4 text-center mt-5">
                            <img src={img9} alt="" />
                            <h5 className="mt-3">Play Video</h5>
                            <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-12 text-center">
                            <NavLink to="/">
                                <button className="btn black_button">MORE FEATURES</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
