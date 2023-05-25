import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { actions } from "../features/todos/todosSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(actions.toggleTodo({ id }));
  };

  const handleRemove = (id) => {
    dispatch(actions.deleteTodo({ id }));
  };

  const handleEdit = (id, content) => {
    dispatch(actions.editTodo({ id, content }));
  };

  const [edit, setEdit] = useState(false);

  return (
    <div className="flex justify-between p-2 bg-slate-100 rounded mb-4 items-center">
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
          style={{ width: "1.2rem", height: "1.2rem" }}
        />
        <label htmlFor="completed"></label>
      </div>
      <div className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
        {edit ? (
          <input
            type="text"
            name="content"
            value={todo.content}
            onChange={(e) => handleEdit(todo.id, e.target.value)}
          />
        ) : (
          <p>{todo.content}</p>
        )}
      </div>
      {!todo.completed && (
      <div className="flex gap-3 items-center">
        <button className="btn" onClick={() => setEdit((value) => !value)}>
          <BsFillPencilFill />
        </button>
        <button className="btn" onClick={() => handleRemove(todo.id)}>
          <BsFillTrashFill />
        </button>
      </div>
      )}
    </div>
  );
};

export default TodoCard;
