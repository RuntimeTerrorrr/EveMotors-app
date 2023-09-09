import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx'
import Register from './Register.jsx'
import Home from './Home.jsx'
import FormDashboard from './Dashboard.jsx';
import './index.css'
import AddACar from './AddACar.jsx';
import CarDetail from './CarDetail.jsx';
import Carlisting from './Carlisting.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/car/:carId" component={CarDetail} />

        <Route path="/dashboard" element={<FormDashboard />} />
        <Route path="/addacar" element={<AddACar />} />
        <Route path="/carlisting" element={<Carlisting />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
