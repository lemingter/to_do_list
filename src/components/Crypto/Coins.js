import React, { Component } from 'react';
import "./Coins.css"

class Coins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dollars: "",
            coins: 0,
            price: 10,
        }
    }

    handleOnChange = e => {
        const {target:{value}} = e;
        const {state:{price}} = this;

        this.setState({
            dollars: value,
            coins: (!(value % price)) ? value / price : 0, 
        })
    }

    render() {
        const {dollars,coins,price} = this.state;

        return (
            <div className = "Crypto">
                <div className = "card">
                    <h1>Compra crypto coins</h1>
                    <p>Dolares a invertir:</p>
                    <input 
                        type = "number"
                        value = {dollars}
                        onChange = {this.handleOnChange}
                    />
                    <p>Precio de la crypto moneda: <strong>${price}</strong></p>
                    <h2>Puedes comprar {coins} monedas</h2>
                </div>
            </div>
        );
    }
}

export default Coins;