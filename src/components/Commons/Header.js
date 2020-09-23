import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    render() {

        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3 head_logo">
                            <NavLink className="navbar-brand" to="/">HumanResources</NavLink>
                        </div>
                        <nav className="col-9 navbar navbar-expand-lg navbar-light bg-light head_items">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink to="/services" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services </NavLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <NavLink className="dropdown-item" to="/services">HR Consulting</NavLink>
                                            <NavLink className="dropdown-item" to="/services">Leadership Training</NavLink>
                                            <NavLink className="dropdown-item" to="/services">HR Management</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blogs">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
