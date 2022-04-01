import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Brayan',

        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Home',
            })
        }, 2000);
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            border: '1px solid black',
        } 

        const {name} = this.state;

        //console.log(name);

        return (
            <div className="Home">
                <h1>{name}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="https://www.youtube.com/watch?v=geejDlMh_UI">Youtube</a>

                <div>
                    {/* Styles in line */}
                    <button style = {{
                        backgroundColor: 'red',
                        border: '1px solid black',
                    }}>
                        click
                    </button>
                    
                    {/* Styles object */}
                    <button style = {buttonStyle}>
                        click
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;