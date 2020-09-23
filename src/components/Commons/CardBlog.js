import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CardBlog extends Component {
    render() {
        var { blog } = this.props;
        return (
            <div className="col-4 mt-5">
                <NavLink to="/singlepost">
                    <img src={blog.url} alt={blog.name} />
                    <div className="blog_card_layer">
                        <h4><strong>{blog.name}</strong></h4>
                        <p>{blog.desc}</p>
                    </div>
                </NavLink>

            </div>
        )
    }
}
