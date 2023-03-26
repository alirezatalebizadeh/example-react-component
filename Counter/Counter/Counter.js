import React, { Component } from 'react'
import './Counter.css'
export default class Counter extends Component {


    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    addCount() {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }

    lowerCount() {
        this.setState(prevState => {
            return { counter: prevState.counter - 1 }
        })
    }


    render() {
        return (
            <div className='container'>
                <section>
                    <h3>counter</h3>
                    <p>{this.state.counter}</p>
                    <div>
                        <button onClick={this.addCount.bind(this)}>add count</button>
                        <button onClick={this.lowerCount.bind(this)}>lower count</button>
                    </div>
                </section>
            </div>
        )
    }
}

