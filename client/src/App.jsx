import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Courses from "./components/Courses";
import DataStructures from "./components/learning-path/DataStructures";
import WebDevelopement from "./components/learning-path/WebDevelopement";
import MachineLearning from "./components/learning-path/MachineLearning";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import LearningPath from "./components/learning-path/LearningPath";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="bg-white/20 h-full w-full top-0 sticky">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/courses" element={<Courses />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="learning-path" element={<LearningPath />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/data-structure" element={<DataStructures />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/web-developement" element={<WebDevelopement />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/machine-learning" element={<MachineLearning />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
