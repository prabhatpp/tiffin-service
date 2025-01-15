import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoodCars from './components/FoodCars';
import Shoplist from './components/Shoplist';
import Subscription from './components/Subscription';
import Login from './components/Login'; // Import Login component
import AboutUs from './components/AboutUs'; // Import AboutUs component
import MonthlyPrice from './components/MonthlyPrice';
import Partners from './components/Partners'; // Partners Page




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodCars />} />
        <Route path="/partners" element={<Partners />} /> {/* Partners page */}
        <Route path="/shop" element={<Shoplist />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/pricing" element={<MonthlyPrice />} />
      </Routes>
    </Router>
  );
};

export default App;
