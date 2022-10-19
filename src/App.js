import React from 'react';
import styles from './App.module.scss';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home/Home';
import Temperature, { loader as tempLoader } from './pages/ChartPages/Temperature';
import Co2, { loader as co2Loader } from './pages/ChartPages/Co2';
import Methan, { loader as methanLoader } from './pages/ChartPages/Methan';
import No2, { loader as no2Loader } from './pages/ChartPages/No2';
import PolarICe, { loader as polariceLoader } from './pages/ChartPages/PolarIce';

const router = createBrowserRouter(createRoutesFromElements( 
  <Route className={styles.App}>
    <Route path='/' element={<Home />}/>
    <Route path='/temperature' element={<Temperature />} loader={tempLoader}/>
    <Route path='/co2' element={<Co2 />} loader={co2Loader}/>
    <Route path='/methan' element={<Methan />} loader={methanLoader}/>
    <Route path='/no2' element={<No2 />} loader={no2Loader}/>
    <Route path='/polar-ice' element={<PolarICe />} loader={polariceLoader}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

