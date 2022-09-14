import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Footer from './Footer';

function Navbar() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}

export default Navbar;
