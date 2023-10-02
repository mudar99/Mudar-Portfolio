import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
