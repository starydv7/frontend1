import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/add" element={<Navbar />} />

              <Route path="/" element={<Navbar />} />
              <Route path="/" element={<Navbar />} />

      </Routes>
    </div>
  );
}

export default AllRoutes