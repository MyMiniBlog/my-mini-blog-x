import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyLayout from './components/layout/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/landing';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
       <Route path="/layout" element={<MyLayout />} />
        </Routes>
      </Router>
      <MyLayout />
    </div>
  );
}

export default App;
