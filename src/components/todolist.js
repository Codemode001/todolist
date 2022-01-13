import React, { useState } from "react";

const ToDo = () => {
  const [state, setState] = useState({
    todo: "",
    todolist: [],
  });

  const { todo, todolist } = state;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const createTodo = () => {
    const list = todolist;
    list.push(todo);

    setState({ ...state, todolist: list });
  };

  return (
    <div className="todo-main">
      <div className="form-wrapper">
        <input
          type="text"
          name="todo"
          placeholder="Create TodoList"
          value={todo}
          onChange={handleOnChange}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div className="Table-main">
        <div className="header-wrapper">
          <span>Todo</span>
          <span>Actions</span>
        </div>
        {todolist.lenght ? (
          todolist.map((value, index) => {
            return (
              <div className="row-wrapper">
                <span>Do my home work</span>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })
        ) : (
          <span>No records found!</span>
        )}

        <div className="row-wrapper">
          <span>Do my home work</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default ToDo;
