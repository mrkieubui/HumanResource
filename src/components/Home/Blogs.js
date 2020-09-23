import React, { Component } from 'react'

export default class Blogs extends Component {
    render() {
        return (
            <div className="blogs mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Our Blog</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reiciendis dolore,<br /> facilis ipsam officiis quasi?</p>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-4">
                            <div className="card_blog_layer1">
                                <div className="card_blog_fade">
                                    <div className="card_title_fade">
                                        <h5>When she reached the first</h5>
                                        <p>June 18, 2020  • by Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card_blog_layer2">
                                <div className="card_blog_fade">
                                    <div className="card_title_fade">
                                        <h5>Duden flows by their place</h5>
                                        <p>July 17, 2020 • by Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card_blog_layer3">
                                <div className="card_blog_fade">
                                    <div className="card_title_fade">
                                        <h5>Italic Mountains</h5>
                                        <p>March 18, 2020  • by Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card_blog_layer4">
                                <div className="card_blog_fade">
                                    <div className="card_title_fade">
                                        <h5>Behind the word mountains</h5>
                                        <p>March 22, 2020  • by Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
