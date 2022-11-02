import React from 'react';
import { Await } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './MetricComponents.module.scss';

function Temperature(props) {

  let loader = props.loaderData;

  let result = loader.data.result.slice(-1);
  let lastvalue = result[0].station;


  return (
    <div>
      <div className={styles.container}>
      <h2 className={styles.title}>Temperature</h2>
      <p className={styles.subtitle}>Global temperature anomalies from 1880 to present</p>

      <div className={styles.info}> 
        <p>Last Value: {lastvalue}</p>
      </div> 

      <React.Suspense fallback={<p>Loading...</p>}>
          <Await resolve={loader}>
          {(data) => ( 
            <ResponsiveContainer width='90%' height={500}>
                <BarChart data={data.data.result} margin={{bottom: 10, left: 10}}>
                  <CartesianGrid opacity={0.1} vertical={false}/>
                  <XAxis dataKey="time" stroke="#ffffff6b">
                  <Label value="Year" offset={-10} position="insideBottom" fill="#4c7482" />
                  </XAxis>
                  <YAxis dataKey="station" stroke="#ffffff6b" tickCount={15} domain={['dataMin - 1.5']}>
                  <Label value="Celsius" offset={0} position="insideLeft" fill="#4c7482" angle="270"/>
                  </YAxis>
                  <Tooltip contentStyle={{ backgroundColor: "#4c7482" }} labelStyle={{ color: "#173E46", textAlign: 'left' }}/>
                  <Bar dataKey="station" fill="#FF5C00" />
                </BarChart>
            </ResponsiveContainer>
          )}
          </ Await>
        </React.Suspense>

      </div>
    </div>
  )
}

export default Temperature;