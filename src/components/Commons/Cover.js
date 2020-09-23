import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Cover extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-lg-center cover_content">
                    <div className={"col-lg-6 order-lg-1" + (this.props.home_flag ? "" : " text-center mx-auto")}>
                        <h1>{this.props.title}</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>
                            <NavLink className="btn btn-primary" to="/about">GET STARTED</NavLink>
                            <NavLink to="/">Learn More</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
