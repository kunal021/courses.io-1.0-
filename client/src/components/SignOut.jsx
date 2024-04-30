import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function SignOut() {
  const { logout, isAuthenticated } = useAuth();
  const handleLogOut = () => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("signedin");
    logout();
  };
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <button
        onClick={handleLogOut}
        className="flex justify-center items-center p-2 rounded-lg border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white text-base font-bold transition-all duration-300"
      >
        LOG OUT
      </button>
    </div>
  );
}

export default SignOut;
