import React, { Component } from 'react'
import './Temp.css'


export default class Temp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 10,
            temp: 'rgb(189, 52, 52)'
        }
    }

    addCount() {
        if (this.state.counter > 14) {
            this.setState({
                temp: 'rgb(15, 15, 226)'
            })
        }
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }
    lowerCount() {
        if (this.state.counter < 6) {
            this.setState({
                temp: 'rgb(189, 52, 52)'
            })
        }
        this.setState(prevState => {
            return { counter: prevState.counter - 1 }
        })
    }


    render() {
        return (
            <div className='container'>
                <section>
                    <h3>temperature</h3>
                    <p style={{ backgroundColor: this.state.temp }}>{this.state.counter} °C</p>
                    <div>
                        <button className='blue' onClick={this.addCount.bind(this)}>+</button>
                        <button className='red' onClick={this.lowerCount.bind(this)}>-</button>
                    </div>
                </section>
            </div>
        )
    }
}
