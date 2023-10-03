import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import React from 'react'
import About from './pages/about/About';
import Services from './pages/services/Services';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
}

export default AppRoutes;
