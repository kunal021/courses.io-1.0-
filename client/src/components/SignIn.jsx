/* eslint-disable react/prop-types */
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://courses-io.onrender.com/api/v1/users/signin",
        {
          username,
          password,
        }
      );
      // console.log(res);
      // localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("signedin", res.data.data);
      localStorage.setItem("usertoken", res.data.token);
      login();
      setLoading(false);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data.message);
      setLoading(false);
      // console.log(error.response);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="flex justify-center items-center m-10">
      <div className="flex flex-col justify-center items-center rounded-lg border-transparent bg-gray-200">
        <h1 className="text-xl font-black py-1 px-3">Sign In</h1>
        <p className="text-sm font-semibold text-gray-500 text-center py-1 px-3">
          Enter your credentials to access your account
        </p>
        <form
          onSubmit={handleSumbit}
          className="flex flex-col justify-start items-start px-3 w-full"
        >
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
            {loading ? "loading..." : "Sign In"}
          </button>
        </form>
        <div className="text-sm font-semibold text-gray-900 text-center py-1 px-3">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </div>
        <div className="text-sm font-semibold text-red-500 text-center py-1 px-3">
          {!success && error}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
