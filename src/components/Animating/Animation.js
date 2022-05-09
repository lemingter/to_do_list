import React, { Component } from 'react';
import "./Animation.css";

class Animation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    componentWillUpdate(newProps, newState) {
        if(!newState.show) {
            document.getElementById('box').style = 'margin: 50px';
        }
        else{
            document.getElementById('box').style = 'margin: 0px';
        }
    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        return (
            <div id="box" className="Animation">
                <button onClick={this.toggleCollapse}>
                    {this.state.show ? 'Collapse' : 'Expand'}
                </button>
                <div
                    id="fade2"
                    className={this.state.show ? 'transition' : 'transition show'}
                >
                    Y Esto Aparece
                </div>
                <div
                    id="fade"
                    className={this.state.show ? 'transition show' : 'transition'}
                >
                    Esto Desaparece
                </div>
            </div>
        );
    }
}

export default Animation;