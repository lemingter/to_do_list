import React, { Component } from 'react';
import "./Timer.css";

class Timer extends Component {
    constructor() {
        super();

        //initial state
        this.state = {
            alert: {
                type: '',
                message: '',
            }, 

            time: 0,
        };

        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300, //5 min
            longBreak: 900, //15 min
        }
    }

    componentDidMount() {
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!',
            }
        })
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a short break',
            }
        })
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a long break',
            }
        })
    }

    render() {
        const {alert: {message, type}, time} = this.state;

        return(
            <div className="Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    00:00
                </div>

                <div className = "types">
                    <button 
                        className = "start"
                        onClick = {this.setTimeForWork}
                    >
                        Start Working
                    </button>

                    <button 
                        className = "short"
                        //onClick = {}
                    >
                        Short Break
                    </button>

                    <button 
                        className = "long"
                        //onClick = {}
                    >
                        Long Break
                    </button>

                </div>

            </div>
        )
    }
}

export default Timer;