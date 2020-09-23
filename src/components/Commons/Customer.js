import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <div className="customers mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Happy Customers</h3>
                            <i className="fa fa-quote-left"></i>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div id="carouselCustomers" className="carousel slide mt-30" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselCustomers" data-slide-to={0} className="active" />
                                    <li data-target="#carouselCustomers" data-slide-to={1} />
                                    <li data-target="#carouselCustomers" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
                                    </div>
                                    <div className="carousel-item">
                                        <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”</p>
                                    </div>
                                    <div className="carousel-item">
                                        <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselCustomers" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselCustomers" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
