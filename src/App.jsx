import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import { store } from "./Redux/store";
import { setUser } from "./Redux/User/userSlice";
import Dashboard from "./Components/Auth/Dashboard/Dashboard";

const App = () => {
  const storedUserData = localStorage.getItem('user');

  if (storedUserData) {
    store.dispatch(setUser(JSON.parse(storedUserData)));
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;