import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <p>{this.props.message}</p>
                    <ul>
                        <li><a href='https://www.freecodecamp.org/' >تایید</a></li>
                        <li><a href='https://www.freecodecamp.org/' >کنسل</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
