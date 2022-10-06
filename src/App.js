import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Temperature from './pages/temperature/Temperature';
import Co2 from './pages/co2/Co2';
import Methan from './pages/methan/Methan';
import No2 from './pages/no2/No2';
import PolarICe from './pages/polar-ice/PolarIce'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/temperature' element={<Temperature />}/>
        <Route path='/co2' element={<Co2 />}/>
        <Route path='/methan' element={<Methan />}/>
        <Route path='/no2' element={<No2 />}/>
        <Route path='/polar-ice' element={<PolarICe />}/>
      </Routes>
    </div>
  );
}

export default App;
