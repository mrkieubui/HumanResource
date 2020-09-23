import React, { Component } from 'react'
import Cover from '../Commons/Cover'
import CardInfo from "../Home/CardInfo"
import Services from "../Home/Services"
import Customer from "../Commons/Customer"
import Footer from "../Commons/Footer"

export default class ServicePage extends Component {
    render() {
        return (
            <div>
                <div className="services_cover">
                    <Cover title="Services" />
                </div>
                <CardInfo />
                <Services />
                <Customer />
                <Footer />
            </div>
        )
    }
}
