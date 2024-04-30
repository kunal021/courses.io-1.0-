import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();

  // const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3500/api/v1/users/signup", {
      firstName,
      lastName,
      username,
      password,
    });
    localStorage.setItem("signedin", res.data.data);
    localStorage.setItem("usertoken", res.data.token);
    login();
  };

  if (isAuthenticated) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="flex justify-center items-center mt-10 w-[100vw]">
      <div className="flex flex-col justify-center items-center rounded-lg border-transparent bg-gray-200">
        <h1 className="text-xl font-black py-1 px-3">Sign Up</h1>
        <p className="text-sm font-semibold text-gray-500 text-center py-1 px-3">
          Enter your information to create an account
        </p>
        <form
          onSubmit={handleSumbit}
          className="flex flex-col justify-start items-start px-3 w-full"
        >
          <p className="flex flex-col w-full py-1 pb-0 text-sm font-semibold">
            First Name{" "}
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="p-2 mt-1 rounded-lg border-1"
            />
          </p>
          <p className="flex flex-col w-full py-1 pb-0 text-sm font-semibold">
            Last Name{" "}
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="p-2 mt-1 rounded-lg border-1"
            />
          </p>
          <p className="flex flex-col w-full py-1 pb-0 text-sm font-semibold">
            Email{" "}
            <input
              type="email"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe@email.com"
              className="p-2 mt-1 rounded-lg border-1"
            />
          </p>
          <p className="flex flex-col w-full py-1 pb-0 text-sm font-semibold">
            Password{" "}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              className="p-2 mt-1 rounded-lg border-1"
            />
          </p>
          <button className="flex justify-center items-center w-full p-2 mt-2 rounded-lg border-1 border-transparent bg-black hover:bg-gray-900 text-white text-sm font-semibold">
            Sign Up
          </button>
        </form>
        <div className="text-sm font-semibold text-gray-900 text-center py-1 px-3">
          Already have an account?{" "}
          <Link to="/signin" className="underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
