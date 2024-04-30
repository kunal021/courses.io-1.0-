import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>Courses.io</p>
      </div>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Courses</NavLink>
        </li>
        <li>
          <NavLink>Learning Path</NavLink>
        </li>
        <li>
          <NavLink>Sign Up</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
