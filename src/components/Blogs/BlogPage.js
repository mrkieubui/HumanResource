import React, { Component } from 'react'
import CardBlog from '../Commons/CardBlog'
import Cover from '../Commons/Cover'
import Footer from '../Commons/Footer'

import slider1 from "../../images/slider-1.jpg";
import slider2 from "../../images/slider-2.jpg";
import slider3 from "../../images/slider-3.jpg";
import slider4 from "../../images/hero_2.jpg";
import slider5 from "../../images/hero_3.jpg";
import slider6 from "../../images/img_4.jpg";
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider1
    },
    {
        id: 2,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider2
    },
    {
        id: 3,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider3
    },
    {
        id: 4,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider4
    },
    {
        id: 5,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider5
    },
    {
        id: 6,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider6
    },
    {
        id: 7,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider1
    },
    {
        id: 8,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider2
    },
    {
        id: 9,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider3
    },
    {
        id: 10,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider4
    },
    {
        id: 11,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider5
    },
    {
        id: 12,
        name: "Behind the word mountains",
        desc: "January 20, 2019 • 3 Comments",
        url: slider6
    }
]

export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <div className="blogs_cover">
                    <Cover title="Company's Blog" />
                </div>
                <div className="container blog_list mt-50">
                    <div className="row">
                        {blogs.map((blog, index) => {
                            return (
                                <CardBlog kry={index} blog={blog} />
                            )
                        })}

                    </div>
                    <div className="row mt-80 pagination">
                        <div className="col-1 text-left">
                            <i className="fa fa-angle-left"></i>
                        </div>
                        <div className="col-10 text-center">
                            <NavLink to="/" className="current">1</NavLink>
                            <NavLink to="/">2</NavLink>
                            <NavLink to="/">3</NavLink>
                        </div>
                        <div className="col-1 text-right">
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
