import React, { Component } from 'react'
import CardMember from '../Commons/CardMember'

import person1 from "../../images/person_1.jpg";
import person2 from "../../images/person_2.jpg";
import person3 from "../../images/person_3.jpg";
const leaders = [
    {
        id: 1,
        name: "Bob Miller",
        title: "CEO and CO_FOUNDER",
        desc: "Even the all-powerful Pointing has no control about the blind texts",
        url: person1
    },
    {
        id: 2,
        name: "Jean Smith",
        title: "CEO and CO_FOUNDER",
        desc: "Even the all-powerful Pointing has no control about the blind texts",
        url: person2
    },
    {
        id: 3,
        name: "David Wilson",
        title: "CEO and CO_FOUNDER",
        desc: "Even the all-powerful Pointing has no control about the blind texts",
        url: person3
    }
]
export default class Leadership extends Component {
    render() {
        return (
            <div className="leadership mt-80">
                <div className="container">
                    <h2 className="text-center">The Leadership</h2>
                    <div className="row">
                        {leaders.map((leader, index) => {
                            return <CardMember member={leader} key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
