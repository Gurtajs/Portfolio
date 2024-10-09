import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import Project from './components/Project.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Project/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
