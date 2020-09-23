import React, { Component } from 'react'
import person1 from "../../images/person_1.jpg"

export default class CardComment2 extends Component {
    render() {
        return (
            <div className="row mt-50">
                <div className="col-2">
                    <img src={person1} alt="" />
                </div>
                <div className="col-10">
                    <h4>Jean Doe</h4>
                    <h6>JANUARY 9, 2018 AT 2:21PM</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <button className="btn btn-secondary">Reply</button>
                </div>
            </div>
        )
    }
}
