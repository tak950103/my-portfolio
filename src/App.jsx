import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
