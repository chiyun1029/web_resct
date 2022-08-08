import SnakeGame from '../map/containers/SnakeGame';
import { Provider } from 'react-redux'
// import store from '../map/store';
import { Row } from 'react-bootstrap';
import './style.css';
// import React, { useState, useEffect } from 'react';
import School from '../image/School.png'
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


const Main = () => (
  
  <div className="App">
    <header className="App-header">
      <img src={School} className="School" alt="School" />
      <div class="target-element" data-text="." style={{top: '28rem',left: '39rem' }}></div>
      <div class="target-element" data-text="." style={{top: '28rem',left: '20.8rem' }}></div>
      <div class="target-element" data-text="." style={{top: '28rem',left: '55.8rem' }}></div>
      <div class="target-element" data-text="." style={{top: '3rem',left: '56rem' }}></div>
      <div class="target-element" data-text="." style={{top: '11rem',left: '56rem' }}></div>
      <div class="target-element" data-text="." style={{top: '22.3rem',left: '56.3rem' }}></div>
      <div class="target-element" data-text="." style={{top: '26.5rem',left: '44.4rem' }}></div>

      <div class="target-element7" data-text="." style={{top: '25.3rem',left: '43.2rem' }}></div>
      <div class="target-element7" data-text="." style={{top: '26.8rem',left: '19.6rem' }}></div>
      <div class="target-element7" data-text="." style={{top: '26.8rem',left: '54.6rem' }}></div>
      <div class="target-element7" data-text="." style={{top: '1.8rem',left: '54.8rem' }}></div>
      <div class="target-element7" data-text="." style={{top: '9.8rem',left: '54.8rem' }}></div>
      <div class="target-element7" data-text="." style={{top: '21rem',left: '55.1rem' }}></div>
      <div class="target-element7" data-text="." style={{top: '26.8rem',left: '37.7rem' }}></div>

      <div class="target-element8" data-text="." style={{top: '23.7rem',left: '41.7rem' }}></div>
      <div class="target-element8" data-text="." style={{top: '25.2rem',left: '18.1rem' }}></div>
      <div class="target-element8" data-text="." style={{top: '25.2rem',left: '53rem' }}></div>
      <div class="target-element8" data-text="." style={{top: '0.2rem',left: '53.3rem' }}></div>
      <div class="target-element8" data-text="." style={{top: '8.1rem',left: '53.2rem' }}></div>
      <div class="target-element8" data-text="." style={{top: '19.4rem',left: '53.6rem' }}></div>
      <div class="target-element8" data-text="." style={{top: '25.2rem',left: '36.2rem' }}></div>

    </header>
  </div>

)

export default Main;