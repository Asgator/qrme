import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { MainPage } from './pages/main';
import { CreateTextPage } from './pages/create/text';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/create/text" element={<CreateTextPage />} />
    </Routes>
  );
}

export default App;
