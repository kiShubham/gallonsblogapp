import "./App.css";
import BlogPage from "./components/BlogPage/BlogPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
