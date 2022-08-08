
import './App.css';
import School from './image/School.png'
import React, { Component }  from 'react';
import Main from './web/main.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/main" element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;
