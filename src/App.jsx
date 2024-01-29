import Projects from "./views/projects";
import Home from "./views/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes> 
  );
}

export default App;
