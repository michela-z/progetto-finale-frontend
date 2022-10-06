import React from 'react';
import Navbar from '../../components/navbar';
import './Temperature.css'
import { getData } from '../../api'
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Temperature() {

  const [temperature, setTemperature] = useState([]);
  const [lastvalue, setLastvalue] = useState([]);

  const getLastValue = () => {
      let result = temperature.slice(-1);
      let lastValue = result[0]?.station;
      setLastvalue(lastValue)
  }

  const param = 'temperature';

  useEffect(() => {
    getData(param)
    .then((response) => {
      setTemperature(response.data.result)
      //console.log(response.data.result)
    })
  },[])

  useEffect(() => {
      getLastValue()
  },[temperature])

  return (
    <div>
      <Navbar />
      <div className='main-container'>
      <h2 className='page-title'>Temperature</h2>
      <p className='subtitle'>Global temperature anomalies from 1880 to present</p>

      <div className='info'>
        <p>Last Value: {lastvalue}</p>
      </div>

      <div className='chart-container'>
        <ResponsiveContainer width='90%' height={500}>
          <BarChart data={temperature} margin={{bottom: 10, left: 10}}>
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
      </div>

      </div>
    </div>
  )
}

export default Temperature