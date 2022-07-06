import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodo = [todo, ...todos]
    console.log(newTodo)
    setTodos(newTodo)
  };

  const removeTodo = (id) => {
    let updateTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updateTodos)
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodos)
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className='seperator' />
      {
        todos.map((todo) => {
          return (
            <TodoItem completeTodo={completeTodo} removeTodo={removeTodo} key={todo.id} todo={todo}/>
        )})
      }
    </div>
  );
}

export default App;
