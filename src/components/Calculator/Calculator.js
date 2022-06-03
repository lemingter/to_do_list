import React, { Component } from 'react';
import "./Calculator.css";

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            num1: 0,
            num2: 0,
            op: "sum",
            res: 0,
            type: 'fa-plus'
        }
        this.icons = [

        ]
    }

    handleOnChange = e => {
        const {target:{value, name, type}} = e;
        const val = type === 'text' ? Number(value) : value;

        if(!(value === '')) {
            this.setState({
                [name]: val,
            });
        }
        else {
            this.setState({
                [name]: 0,
            });
        }

        switch(value) {
            case 'sum':
                this.setState({
                    type: "fa-plus",
                })
                break;
            case 'rest':
                this.setState({
                    type: "fa-minus",
                })
                break;
            case 'multi':
                this.setState({
                    type: "fa-xmark",
                })
                break;
            case 'divi':
                this.setState({
                    type: "fa-divide",
                })
                break;
            default:
                break;
        }
        
    }

    handleOnSubmit = e => {
        const {num1, num2} = this.state;
        switch(this.state.op) {
            case 'sum':
                this.setState({
                    res: num1 + num2,
                })
                break;
            case 'rest':
                this.setState({
                    res: num1 - num2,
                })
                break;
            case 'multi':
                this.setState({
                    res: num1 * num2,
                })
                break;
            case 'divi':
                this.setState({
                    res: (num1 / num2).toFixed(2),
                })
                break;
            default:
                break;
        }
        e.preventDefault();
    }

    render() {
        const {type} = this.state;
        return (
            <div className="Calculator">
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <input
                            type = "text"
                            name = "num1"
                            value = { this.state.num1 }
                            onChange={ this.handleOnChange }
                        />
                        <i class= {`fa-solid ${type}`} />
                        <input
                            type = "text"
                            name = "num2"
                            value = { this.state.num2 }
                            onChange={ this.handleOnChange }
                        />
                    </div>
                    <select name = "op" onChange={ this.handleOnChange }>
                        <option value="sum" selected>+</option>
                        <option value="rest">-</option>
                        <option value="multi">x</option>
                        <option value="divi">/</option>
                    </select>
                    <div>
                        <p>Result</p>
                        <h1>{ this.state.res }</h1>
                    </div>
                    <input type="submit" value="Calculate" />
                </form>
            </div>
        );
    }
}

export default Calculator;