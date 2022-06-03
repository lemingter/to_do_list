import React, { Component } from 'react';
import './Person.css';
import Popup from 'react-popup';
import './Popup.css';

class Person extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            lastName: '',
            email: '',
            phone: '',

            errors: {
                name: false,
                lastName: false,
            }
        }
        
    }

    handleOnChange = e => {
        const {target:{value, name}} = e;

        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = e => {
        const { name, lastName, email, phone } = this.state;

        this.setState({
            errors: {
                name: name.trim() === '',
                lastName: lastName.trim() === '',
            }
        })

        if(name.trim() && lastName.trim()) {
            Popup.create({
                title: 'Person information',
                content: (
                    <div>
                        <p><strong>Name: </strong> {name} {lastName}</p>
                        <p><strong>Email: </strong> {email}</p>
                        {phone && <p><strong>Phone: </strong> {phone}</p>}
                    </div>
                ),
                buttons: {
                    right: [{
                        text: 'Close',
                        action: popup => popup.close()
                    }]
                }
            })

            const data = {
                name, 
                lastName, 
                email, 
                phone,
            }

            console.log("Data: ", data);
        }

        e.preventDefault();
    }

    render() {
        const {name, lastName, email, phone} = this.state;

        return (
            <div className="Forma">
                <form onSubmit = {this.handleOnSubmit}>
                    <div>
                        <p>Name</p>
                        <input 
                            type="text"
                            name="name"
                            value = {name}
                            onChange = { this.handleOnChange }
                            className={this.state.errors.name ? 'error' : ''}
                        />
                        {
                            this.state.errors.name 
                            && 
                            <div className="errorMessage">Required</div>
                        }
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input 
                            type="text"
                            name="lastName"
                            value = {lastName}
                            onChange = { this.handleOnChange }
                            className={this.state.errors.lastName ? 'error' : ''}
                        />
                        {
                            this.state.errors.lastName 
                            && 
                            <div className="errorMessage">Required</div>
                        }
                    </div>
                    <div>
                        <p>Email</p>
                        <input 
                            type="email"
                            name="email"
                            value = {email}
                            onChange = { this.handleOnChange }
                        />
                    </div>
                    <div>
                        <p>Phone</p>
                        <input 
                            type="tel"
                            name="phone"
                            value = {phone}
                            onChange = { this.handleOnChange }
                        />
                    </div>
                    <input type="submit" value="Button" />
                </form>
            </div>
        );
    }
}

export default Person;