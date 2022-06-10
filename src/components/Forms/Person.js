import React, { Component } from 'react';
import './Person.css';
import Popup from 'reactjs-popup';
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
                    <Popup 
                        trigger={<button className="button"> Save Information </button>}
                        modal
                        disabled = {!(name.trim() && lastName.trim())}
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header"><strong>Person Information</strong></div>
                                <div className="content">
                                    <div><strong>Name: </strong>{name} {lastName}</div>
                                    <div><strong>Email: </strong>{email}</div>
                                    {phone && <div><strong>Phone: </strong>{phone}</div>}
                                </div>
                                <div className="actions">
                                    <button
                                        className="button"
                                        onClick={() => {
                                        close();
                                        }}
                                    >Close</button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </form>
            </div>
        );
    }
}

export default Person;