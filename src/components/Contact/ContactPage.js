import React, { Component } from 'react'
import Cover from '../Commons/Cover'
import Footer from '../Commons/Footer'

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <div className="contact_cover">
                    <Cover title="Contact us" />
                </div>
                <div className="container contact">
                    <div className="row mt-80">
                        <div className="col-7">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Message</label>
                                    <textarea className="form-control" id="inputMessage" rows={7} defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
                            </form>

                        </div>
                        <div className="col-5 text-center">
                            <div>
                                <span className="text-center">
                                    <i className="fa fa-map-marker-alt"></i>
                                </span>
                            </div>
                            <div>
                                <p>Arthur Bldg flr, New York City, USA</p>
                            </div>
                            <div>
                                <span className="text-center">
                                    <i className="fa fa-phone"></i>
                                </span>
                            </div>
                            <div>
                                <p>+1 209 923 2302</p>
                            </div>
                            <div>
                                <span className="text-center">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                            <div>
                                <p>info@templateux.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
