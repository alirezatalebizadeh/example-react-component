import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }

        this.firstNameData = this.firstNameData.bind(this)
        this.lastNameData = this.lastNameData.bind(this)
        this.emailData = this.emailData.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    firstNameData(event) {
        console.log('click');
        this.setState({
            firstNameData: event.target.value
        })
    }

    lastNameData(event) {
        console.log('click');
        this.setState({
            lastNameData: event.target.value
        })
    }
    emailData(event) {
        console.log('click');
        this.setState({
            emailData: event.target.value
        })
    }

    submitHandler(event) {
        let { firstNameData, lastNameData, emailData } = { ...this.state }

        event.preventDefault()
        this.setState({
            submitted: true
        })
        
        firstNameData && lastNameData && emailData && this.setState({
            allValid: true
        })

        setTimeout(() => {
            this.setState({
                allValid: false
            })
        }, 4000)

    }




    render() {
        return (
            <div className="form-container">
                <form className="register-form" onSubmit={this.submitHandler} autoComplete="off">
                    {/* Uncomment the next line to show the success message */}
                    {this.state.submitted && this.state.allValid && (
                        <div className="success-message">Success! Thank you for registering</div>
                    )}
                    <input
                        id="first-name"
                        className="form-field"
                        onChange={this.firstNameData}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstNameData}
                    />
                    {/* Uncomment the next line to show the error message */}

                    {this.state.submitted && !this.state.firstNameData && (
                        <span id="first-name-error">Please enter a first name</span>
                    )}

                    <input
                        id="last-name"
                        className="form-field"
                        onChange={this.lastNameData}
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastNameData}

                    />
                    {/* Uncomment the next line to show the error message */}

                    {this.state.submitted && !this.state.lastNameData && (
                        <span id="last-name-error">Please enter a last name</span>
                    )}

                    <input
                        id="email"
                        className="form-field"
                        onChange={this.emailData}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.emailData}
                    />
                    {/* Uncomment the next line to show the error message */}

                    {this.state.submitted && !this.state.emailData && (
                        <span id="email-error">Please enter an email address</span>
                    )}

                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
