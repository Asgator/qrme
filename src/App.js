import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from './pages/main';
import { CreateTextPage } from './pages/create/text';

const Redirect = () => {
    return <Navigate to="/qrme" />;
}

function App() {
  return (
    <Routes>
      <Route path="/qrme" element={<MainPage />} />
      <Route path="/qrme/create/text" element={<CreateTextPage />} />
      <Route path="/" element={<Redirect />} />
    </Routes>
  );
}

export default App;
