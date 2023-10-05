import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import React from 'react'
import About from './pages/about/About';
import Services from './pages/services/Services';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
}

export default AppRoutes;
