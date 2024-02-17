import { useState } from "react";
import TodoList from "./TodoList";

const TodoDemo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  function addHandler() {
    if (newTodo.trim() !== "") {
      // Ensure there's actual text to add
      setTodos((prev) => [
        ...prev, // Include the previous todos
        { id: Date.now().toLocaleString(), data: newTodo }, // Add the new todo
      ]);
      setNewTodo(""); // Clear the input field
    }
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addHandler} className="add">
          Add Todo
        </button>
      </div>
      <ul>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </ul>
    </div>
  );
};

export default TodoDemo;
