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
            working: false,
            pause: false,
        };

        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300, //5 min
            longBreak: 900, //15 min
        }
    }

    componentDidMount() {
        this.setDefaultTime();
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        });
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!',
            },
        });

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a short break',
            },
        });
        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a long break',
            },
        });
        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {

        this.restartInterval();

        this.setState({
            time: newTime,
            working: true,
        });
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(!this.state.pause){
            if(this.state.time === 0) {
                this.setState({
                    alert: {
                        type: 'Beep',
                        message: 'BeeeeeeeeeeeeeP',
                    },
                    working: false,
                });
            }
            else {
                this.setState({
                    time: this.state.time - 1,
                });
            }
        }
    }

    displayTimer(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        var res = "";

        if(min < 10) {
            res += "0";
        }
        res += min + ":";
        if(sec < 10) {
            res += "0";
        }
        res += sec;
        return res;
    }

    pauseTimer = () => {
        this.setState({
            pause: !this.state.pause,
            
        });
        
        console.log(this.state.pause);
    }

    stopTimer = () => {
        this.setState({
            time: this.times.defaultTime,
            working: false
        });
        clearInterval(this.interval);
    }

    render() {
        const {alert: {message, type}, time, working, pause} = this.state;

        return(
            <div className="Pomodoro">
                {
                    (working)&&
                    <div className = {`alert ${type}`}>
                        {message}
                    </div>
                }

                <div className = "timer">
                    {this.displayTimer(time)}
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
                        onClick = {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>

                    <button 
                        className = "long"
                        onClick = {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>

                </div>
                {
                    (working)&&
                    <div>
                        <button 
                            className = "pause"
                            onClick = {this.pauseTimer}
                        >{pause ? <i class="fa-solid fa-play"></i> : <i class="fa-solid fa-pause"></i>}</button>
                        <button 
                            className = "stop"
                            onClick = {this.stopTimer}
                        ><i class="fa-solid fa-stop"></i></button>
                    </div>
                }

            </div>
        )
    }
}

export default Timer;