import React, { Component } from 'react'

import Cover from '../Commons/Cover'
import Footer from '../Commons/Footer';
import Agency from '../Commons/Agency';
import Leadership from './Leadership';
import Customer from '../Commons/Customer';
import Services from './Services';
import Blogs from './Blogs';
import CardInfo from './CardInfo';
import Counting from './Counting';

export default class HomePage extends Component {
    render() {
        let home_flag = true;
        return (
            <div>
                <div className="home_cover">
                    <Cover title="We Are Your Partners in Human Resource" home_flag={home_flag} />
                </div>

                <CardInfo />

                <Agency />

                <Counting />

                <Leadership />

                <Customer />

                <Services />

                <Blogs />

                <Footer />
            </div>
        )
    }
}
