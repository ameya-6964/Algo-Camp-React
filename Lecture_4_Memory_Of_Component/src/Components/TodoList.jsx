const TodoList = ({ todos, deleteTodo }) => {
  return todos.map((todo) => (
    <li style={{ listStyle: "none" }} className="todoInfo" key={todo.id}>
      <h1> {todo.data} </h1>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        Delete Todo
      </button>
    </li> // Now has a unique key
  ));
};

export default TodoList;
