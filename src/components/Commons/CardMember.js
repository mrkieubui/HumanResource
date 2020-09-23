import React, { Component } from 'react'

export default class CardMember extends Component {
    render() {
        return (
            <div className="col-4 mt-5">
                <img src={this.props.member.url} alt="" />
                <div className="leader_card_layer">
                    <h4><strong>{this.props.member.name}</strong></h4>
                    <p>{this.props.member.title}</p>
                    <div className="leader_card_layer2">{this.props.member.desc}</div>
                </div>
            </div>
        )
    }
}
