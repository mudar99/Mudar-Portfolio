import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import React from 'react'
import About from './pages/about/About';
import Education from './pages/education/Education';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
        </Routes>
    );
}

export default AppRoutes;
