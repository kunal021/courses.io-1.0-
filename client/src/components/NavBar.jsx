import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext";
import SignOut from "./SignOut";
import bars from "../../public/open.svg";
import xbar from "../../public/close.svg";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  //   console.log(isAuthenticated);
  return (
    <div className="z-50">
      <div className="hidden md:flex justify-between items-center p-2 px-10">
        <div>
          <Link
            to={"/"}
            className="cursor-pointer text-black font-black text-xl"
          >
            Courses.io
          </Link>
        </div>
        <ul className="flex justify-center items-center space-x-6">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-gray-500 font-black"
                    : "text-black font-black"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/courses"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-gray-500 font-black"
                    : "text-black font-black"
                }`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/learning-path"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-gray-500 font-black"
                    : "text-black font-black"
                }`
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
      <div className="flex flex-col md:hidden justify-center items-center p-5">
        <div
          className="cursor-pointer flex flex-col p-5"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img
              height={20}
              width={20}
              src={xbar}
              alt="X"
              className="flex justify-center items-center mx-auto"
            />
          ) : (
            <img
              height={25}
              width={25}
              src={bars}
              alt="O"
              className="flex justify-center items-center mx-10"
            />
          )}
        </div>

        {open && (
          <ul className="flex flex-col justify-center items-center space-y-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-gray-500 font-black"
                      : "text-black font-black"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/courses"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-gray-500 font-black"
                      : "text-black font-black"
                  }`
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/learning-path"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-gray-500 font-black"
                      : "text-black font-black"
                  }`
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
        )}
      </div>
    </div>
  );
}

export default NavBar;
