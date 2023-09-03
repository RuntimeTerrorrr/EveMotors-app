import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx'
import SimpleRegistrationForm from './Register.jsx'
import Home from './Home.jsx'
import FormDashboard from './Dashboard.jsx';
import './index.css'
import AddACar from './AddACar.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename='/evemotors-app.vercel.app'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SimpleRegistrationForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<FormDashboard />} />
          <Route path="/addacar" element={<AddACar />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
);
