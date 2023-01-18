import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/skills" element={<Skills />}>
        </Route>
        <Route path="/projects" element={<Projects />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
