import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";
import SignOut from "./SignOut";

function NavBar() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <div className="flex justify-between items-center p-2 px-10">
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
        {!isAuthenticated ? (
          <li>
            <NavLink
              to={"/signup"}
              className="flex justify-center items-center p-2 rounded-lg border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-base font-bold transition-all duration-300"
            >
              Sign Up
            </NavLink>
          </li>
        ) : (
          <SignOut />
        )}
      </ul>
    </div>
  );
}

export default NavBar;
