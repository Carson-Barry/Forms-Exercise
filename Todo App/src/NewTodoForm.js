import React, { useState } from "react";

const NewTodoForm = ({addTodo}) => {

    const INITIAL_STATE = {
        task: ""
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => {
            return {
                ...formData,
                [name]: value
            }
        })
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({task: formData.task});
        setFormData(INITIAL_STATE);
    };

    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Todo to add: </label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Todo"
                    value={formData.task}
                    onChange={handleChange}
                />
                <button>Add Todo</button>
            </form>
        </div>
    );
}

export default NewTodoForm;