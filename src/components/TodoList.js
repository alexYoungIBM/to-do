import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
//Add todo list - checks to see if there is text OR empty string or spaces
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
//... allows you to expand the string wherever it is used.
    const newTodos = [todo, ...todos];
//console.log the spread operator for todos
    setTodos(newTodos);
    console.log(...todos);
  };
//Update todo list
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
//setTodo - where the item.id of equal value and type "then=?" add new id to item
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
//Delete todo list
  const deleteTodo = (id) => {
    const deleteArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(deleteArr);
  };
//Double clicking on the text will cross out the text as "complete"
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To-Do</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
