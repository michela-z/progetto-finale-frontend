import React from 'react';
import Navbar from '../../components/navbar';
import { getData } from '../../api'
import { useEffect, useState } from 'react';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart, CartesianGrid, Area, Label } from 'recharts';
import './Methan.css'

function Methan() {
        const [methane, setMethane] = useState([]);
        const [lastvalue, setLastvalue] = useState([]);

        const getLastValue = () => {
            let result = methane.slice(-1);
            let lastValue = result[0]?.average;
            setLastvalue(lastValue)
        }

        const param = 'methane';
    
        useEffect(() => {
        getData(param)
        .then((response) => {
            setMethane(response.data.methane)
            //console.log(response.data.methane)
        })
        },[])

        useEffect(() => {
            getLastValue()
        },[methane])

        return (
        <div>
            <Navbar />
            <div className='main-container'>
            <h2 className='page-title'>Methan</h2>
            <p className='subtitle'>Methane levels from 1983 to present</p>
            
            <div className='info'>
                <p>Last Value: {lastvalue}</p>
            </div>
            
            <ResponsiveContainer width='100%' height={500}>
                {/* <LineChart data={methane} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date"/>
                <YAxis dataKey="trend"/>
                <CartesianAxis strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Line name="Methane" type="monotone" dataKey="average" stroke="#00ffff" />
                </LineChart> */}

                <AreaChart data={methane} margin={{bottom: 10, left: 10}}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2451b7" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <Area dataKey="average" stroke="#3774FF" fill="url(#color)" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false}>
                        <Label value="Year" offset={-10} position="insideBottom" fill="#4c7482" />
                    </XAxis>
                    <YAxis dataKey="trend" axisLine={false} tickLine={false} tickCount={10}>
                        <Label value="ppm" offset={0} position="insideLeft" fill="#4c7482" angle="270" />
                    </YAxis>

                    <CartesianGrid opacity={0.1} vertical={false}/>
                    <Tooltip contentStyle={{ backgroundColor: "#4c7482" }} labelStyle={{ color: "#173E46", textAlign: 'left' }}/>
                </AreaChart>

            </ResponsiveContainer>
    
            </div>
        </div>
        )
}

export default Methan