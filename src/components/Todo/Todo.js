import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import List from './List';

class Todo extends Component {
    constructor() {
        super();
        
        this.state = {
            task: '',
            items: [
                {
                    id: uuidv4(),
                    task: 'Estudiar Web',
                    complete: false,
                },
                {
                    id: uuidv4(),
                    task: 'Hacer Tarea',
                    complete: false,
                },
                {
                    id: uuidv4(),
                    task: 'Ver One Piece',
                    complete: false,
                },
            ],
        }

    }

    handleOnChange = e => {
        const {target:{value}} = e;

        this.setState({
            task: value
        })
    }

    handleOnSubmit = e => {
        if(this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            })
        }

        e.preventDefault();
    }

    markAsCompleted = id => {
        const {items} = this.state;

        const foundTask = items.find(
            item => item.id === id
        );

        foundTask.complete = true;

        this.setState({
            items: [
                ...this.state.items,
            ]
        })
    }

    removeTask = id => {
        const { items } = this.state;
        const filteredItems = items.filter(
            item => item.id !== id
        );

        this.setState({
            items: filteredItems
        })
    }
    
    render() {

        console.log(this.state.items);
        console.log(this.state.task);
        return (
            <div className='Todo'>
                <h1>Nueva Tarea</h1>

                <form onSubmit = {this.handleOnSubmit}>
                    <input 
                        type = "text"
                        value = {this.state.task}
                        onChange = {this.handleOnChange}
                    />
                </form>

                <List 
                    items = {this.state.items}
                    markAsCompleted = {this.markAsCompleted}
                    removeTask = {this.removeTask}
                />
            </div>
            
        );
    }
}

export default Todo;