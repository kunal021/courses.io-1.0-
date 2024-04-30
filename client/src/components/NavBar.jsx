import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-black/30">
      <div className="flex justify-between items-center m-6 mx-10">
        <div>
          <p className="cursor-pointer">Courses.io</p>
        </div>
        <ul className="flex justify-center items-center space-x-6">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/courses"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-black"}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/learning-path"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-black"}`
              }
            >
              Learning Path
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/signup"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-black"}`
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
