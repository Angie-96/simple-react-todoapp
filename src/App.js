import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const title = "TODO APP";

  const [todos, setTodos] = React.useState([
    { text: "Learn React", isCompleted: false },
    { text: "Learn Python", isCompleted: false },
    { text: "Learn everything else", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
