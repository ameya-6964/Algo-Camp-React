import { useState } from "react";
import TodoList from "./TodoList";

const TodoDemo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null); // For tracking which todo is edited
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

  const toggleEdit = (id) => {
    setEditingTodo((prev) => (prev === id ? null : id));
  };

  const updateTodo = (id, newData) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, data: newData } : todo
      )
    );
  };

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
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleEdit={toggleEdit}
        updateTodo={updateTodo}
        editingTodo={editingTodo}
      />
    </div>
  );
};

export default TodoDemo;
