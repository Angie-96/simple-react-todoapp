import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
    const isCompleted = todo.isCompleted;
    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
            <div>
                <button className="check" onClick={() => completeTodo(index)}>{isCompleted ? "Uncheck" : "Check"}</button>
                <button className="remove" onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
};

export default Todo;