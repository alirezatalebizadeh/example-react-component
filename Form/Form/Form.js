import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (

            <div class="container">
                <div class="brand-logo">
                </div>
                <div class="brand-title">توییتر</div>
                <div class="inputs">
                    <label>ایمیل :</label>
                    <input type="email" placeholder="example@test.com" />
                    <label>رمز عبور :</label>
                    <input type="password" placeholder="حداقل 6 کاراکتر" />
                    <button type="submit">ثبت نام</button>
                </div>
            </div>
        )
    }
}
