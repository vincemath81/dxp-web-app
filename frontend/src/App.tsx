import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Main from "./pages/main";
import LRS from "./pages/lrs";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lrs" element={<LRS />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/platformcatalog" element={<Main />} />
          <Route path="/savedcourses" element={<Main />} />
          <Route path="/completedcourses" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
