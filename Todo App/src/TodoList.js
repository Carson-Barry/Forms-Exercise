import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {

    const [todos, setTodos] = useState([{id: uuid(), task: "Go grocery shopping"}, {id: uuid(), task: "Do laundry"}])

    const handleRemove = (removeId) => {
        setTodos(
            todos.filter(({id}) => {
                if (removeId !== id) {
                    return true;
                }
            })
        )
    }

    const addTodo = (({task}) => {
        setTodos([...todos, {task, id: uuid()}])
    })

    return (
        <div className="TodoList">
            <h1>Todo List:</h1>
            {
                todos.map(({id, task}) => {
                    return (
                        <Todo id={id} task={task} handleRemove={handleRemove}/>
                    )
                })
            }
            <h1>Add New Task:</h1>
            <NewTodoForm addTodo={addTodo}/>
        </div>
    )
}

export default TodoList;