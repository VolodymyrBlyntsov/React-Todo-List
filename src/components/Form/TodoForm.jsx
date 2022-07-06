import React from 'react'
import '../Form/TodoForm.scss';
import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(input)
        setInput('')
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='todo-input'
                placeholder='Add a todo'
            />
            <button type='submit' className='todo-button'>Add Todo</button>
        </form>
    )
}

export default TodoForm;