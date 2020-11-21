import React, { useState } from 'react';
import {TodoList} from './TodoList'
import {AddTodoForm} from './AddTodoForm'
// import {Todo} from './types'


const initialTodos: Array<Todo> =[
  {text: 'naka', complete: true},
  {text: 'tomo', complete: false},
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    })
    setTodos(newTodos)
  }

  // const addTodo: AddTodo = (newTodo: Todo) => {
  //   setTodos([...todos, newTodo])
  // }
  // const addTodo: AddTodo = newTodo => {
  //   setTodos([...todos, {text: newTodo, complete: false}])
  // }
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' &&
     setTodos([...todos, {text: newTodo, complete: false}])
  }

  
  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
