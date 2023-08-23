import React from "react";
import "./Todo.css"

const Todo = ({id, task, handleRemove}) => {
    return (
        <div className="Todo">
            <div className="Todo-task">
                <h2 className="Todo-text">Task: {task}</h2>
                <button className="Todo-remove-button" onClick={() => handleRemove(id)}>X</button>
            </div>
        </div>
    )
}

export default Todo;