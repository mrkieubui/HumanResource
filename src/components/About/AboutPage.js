import React, { Component } from 'react'
import Agency from '../Commons/Agency'
import Cover from '../Commons/Cover'
import Customer from '../Commons/Customer'
import Footer from '../Commons/Footer'
import Team from './Team'

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="about_cover">
                    <Cover title="About Us" />
                </div>
                <Agency />
                <Team />
                <Customer />
                <Footer />
            </div>

        )
    }
}
