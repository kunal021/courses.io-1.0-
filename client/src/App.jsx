import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
// import DashBoard from "./components/DashBoard";
// import TransferMoney from "./components/TransferMoney";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";
// import Test from "./Test";
import Courses from "./components/Courses";
import DataStructures from "./components/learning-path/DataStructures";
import WebDevelopement from "./components/learning-path/WebDevelopement";
import MachineLearning from "./components/learning-path/MachineLearning";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="bg-black/30 h-full w-full">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/data-structure" element={<DataStructures />} />
          <Route path="/web-developement" element={<WebDevelopement />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            {/* <Route path="/dashboard" element={<DashBoard />} /> */}
          </Route>
          <Route path="/send" element={<PrivateRoute />}>
            {/* <Route path="/send" element={<TransferMoney />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
