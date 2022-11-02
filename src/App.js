import React from 'react';
import styles from './App.module.scss';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home/Home';
import MetricPage from './pages/MetricPage/MetricPage';
import { getData } from './api';


const router = createBrowserRouter(createRoutesFromElements( 
  <Route className={styles.App}>
    <Route path='/' element={<Home />}/>
    <Route path='/*' element={<MetricPage />} loader={({params}) => {
      let param = Object.values(params)[0];
      return getData(param);
    }}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;