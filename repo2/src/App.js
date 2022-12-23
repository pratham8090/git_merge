import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Books from "./components/Books";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
