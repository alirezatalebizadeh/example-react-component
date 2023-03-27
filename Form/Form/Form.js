import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.emailHandlering = this.emailHandlering.bind(this)
        this.passwordHandlering = this.passwordHandlering.bind(this)
    }

    emailHandlering(event) {
        this.setState({
            email: event.nativeEvent.target.value
        })
    }
    passwordHandlering(event) {
        this.setState({
            password: event.nativeEvent.target.value
        })
    }


    render() {
        return (

            <div className="container">
                <div className="brand-logo">
                </div>
                <div className="brand-title">توییتر</div>
                <div className="inputs">
                    <label>ایمیل :</label>
                    <input type="email" value={this.state.email} onChange={this.emailHandlering} placeholder="example@test.com" />
                    <label>رمز عبور :</label>
                    <input type="password" value={this.state.password} onChange={this.passwordHandlering} placeholder="حداقل 6 کاراکتر" />
                    <button type="submit">ثبت نام</button>
                </div>
            </div>
        )
    }
}
