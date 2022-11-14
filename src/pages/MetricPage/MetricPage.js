import React from 'react';
import Navbar from '../../components/navbar';
import styles from './MetricPage.module.scss';
import { Route, useLoaderData, Routes } from 'react-router-dom';

import Temperature from '../../components/MetricComponents/Temperature';
import Co2 from '../../components/MetricComponents/Co2'
import Methan from '../../components/MetricComponents/Methan';
import No2 from '../../components/MetricComponents/No2';
import PolarIce from '../../components/MetricComponents/PolarIce';


function MetricPage() {

  const loaderData = useLoaderData(); 

  return (
    <div>
      <Navbar />
      <div className={styles.container}>

        {/* Invece di creare un gafico unico ho conservato i grafici come componenti perchè sono tutti diversi l'uno dall'altro */}

        <Routes>
          <Route exact path={'/temperature'} element={<Temperature loaderData={loaderData}/>}/>
          <Route exact path={'/co2'} element={<Co2 loaderData={loaderData} />} />
          <Route exact path={'/methane'} element={<Methan loaderData={loaderData}/>} />
          <Route exact path={'/nitrous-oxide'} element={<No2 loaderData={loaderData}/>} />
          <Route exact path={'/arctic'} element={<PolarIce loaderData={loaderData}/>} />
        </Routes>

      </div>
    </div>
  )
}

export default MetricPage;
