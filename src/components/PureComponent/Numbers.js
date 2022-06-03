import React, { Component } from 'react';

class Numbers extends Component {
    constructor() {
        super();

        this.state = {
            numbers: "",
            added: [],
        }
    }

    handleOnChange = e => {
        const {target:{value}} = e;
        var res;
        var arr;

        this.setState({
            numbers: value,
        })

        for (let i = 0; i < value.length; i++) {
            if(i === 0) {
                this.setState({
                    added: [parseInt(value[i])],
                })
            }
            else {
                res = 0;
                arr = value.split('');
                arr.map(num => res += parseInt(num));
                this.setState({
                    added: [
                        ...this.state.added,
                        res,
                    ]
                })
            }
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.numbers}
                    onChange = {this.handleOnChange}
                />
                <ul>
                    {this.state.added.map((num, key) => (
                        <li key={key}>
                            {num}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Numbers;