/* eslint-disable react/prop-types */
const TodoList = ({
  todos,
  deleteTodo,
  toggleEdit,
  updateTodo,
  editingTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li style={{ listStyle: "none" }} className="todoInfo" key={todo.id}>
          {todo.id === editingTodo ? (
            <input
              type="text"
              defaultValue={todo.data}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
          ) : (
            <h1>{todo.data}</h1>
          )}
          <div>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete Todo
            </button>
            <button className="edit" onClick={() => toggleEdit(todo.id)}>
              Edit Todo
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
