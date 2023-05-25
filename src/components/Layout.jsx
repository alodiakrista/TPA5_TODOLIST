import { NavLink, Outlet } from "react-router-dom";
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const userInput = useSelector(state => state.todos.userInput);
  const dispatch = useDispatch();

  const handleCreateTodo = (e) => {
    e.preventDefault();
    dispatch(actions.createTodo());
  }

  const handleSetUserInput = (userInput) => {
    dispatch(actions.setUserInput({ userInput }));
  }

  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-center font-bold text-4xl mb-16">What's the plan for today?</h1>
      <form className="flex gap-2 mb-12" onSubmit={handleCreateTodo}>
        <input 
          type="text"
          value={userInput}
          onChange={(e) => handleSetUserInput(e.target.value)}
          placeholder="What to do?"
          className="p-2 w-full border-rose-100 border-solid border-2 rounded"
        />
        <input type="submit" className="btn bg-[#1d2b64] text-white font-medium w-60" value="Add" />
      </form>
      <nav className="mt-4">
        <ul className="flex justify-center gap-3">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
              isActive
              ? "rounded-full text-white font-medium text-sm px-3.5 py-0.5 bg-[#1d2b64]"
              : "rounded-full text-black font-medium text-sm px-3.5 py-0.5  bg-gradient-to-r from-violet-200 to-pink-200"
              }
            >
              ALL
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/active"}
              className={({ isActive }) =>
              isActive
              ? "rounded-full text-white font-medium text-sm px-3.5 py-0.5 bg-[#1d2b64]"
              : "rounded-full text-black font-medium text-sm px-3.5 py-0.5 bg-gradient-to-r from-violet-200 to-pink-200"
              }
            >
              ACTIVE
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/completed"}
              className={({ isActive }) =>
              isActive
              ? "rounded-full text-white font-medium text-sm px-3.5 py-0.5 bg-[#1d2b64]"
              : "rounded-full text-black font-medium text-sm px-3.5 py-0.5 bg-gradient-to-r from-violet-200 to-pink-200"
              }
            >
              COMPLETED
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="mt-4">
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;