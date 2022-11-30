import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/add" element={<h1>Add Products</h1>} />
        <Route path="/update" element={<h1>Update Products</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes