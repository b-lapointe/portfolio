import React from "react"
import TodoItem from "./todoItem"
import todosData from "./todosData"

import * as todoStyles from './todo.module.scss'

class ToDoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className={todoStyles.app}>
                <div className={todoStyles.todoList}>
                    <h1>To Do List</h1>
                    {todoItems}
                </div>
            </div>
        )    
    }
}

export default ToDoApp