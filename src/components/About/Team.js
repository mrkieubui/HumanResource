import React, { Component } from 'react'
import CardMember from '../Commons/CardMember'

import person1 from "../../images/person_1.jpg";
import person2 from "../../images/person_2.jpg";
import person3 from "../../images/person_3.jpg";

const members = [
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
    },
    {
        id: 4,
        name: "Leonel Messi",
        title: "CEO and CO_FOUNDER",
        desc: "Even the all-powerful Pointing has no control about the blind texts",
        url: person1
    },
    {
        id: 5,
        name: "Cristiano Ronaldo",
        title: "CEO and CO_FOUNDER",
        desc: "Even the all-powerful Pointing has no control about the blind texts",
        url: person2
    },
    {
        id: 6,
        name: "David Luis",
        title: "CEO and CO_FOUNDER",
        desc: "Even the all-powerful Pointing has no control about the blind texts",
        url: person3
    }
]

export default class Team extends Component {
    render() {
        return (
            <div className="team mt-50">
                <div className="container">
                    <div className="row pt-30">
                        <div className="col-12 text-center">
                            <div className="h3">Our Team</div>
                        </div>
                    </div>
                    <div className="row">
                        {members.map((member, index) => {
                            return <CardMember key={index} member={member} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
