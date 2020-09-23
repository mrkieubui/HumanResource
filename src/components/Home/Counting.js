import React, { Component } from 'react'
import CountUp from 'react-countup';

export default class Counting extends Component {
    render() {
        return (
            <div className="counting mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h1><CountUp end={99399} /></h1>
                            <p>NUMBER OF CLIENTS</p>
                        </div>
                        <div className="col-4">
                            <h1><CountUp end={199} /></h1>
                            <p>NUMBER OF PERSONNEL</p>
                        </div>
                        <div className="col-4">
                            <h1><CountUp end={24} /></h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
