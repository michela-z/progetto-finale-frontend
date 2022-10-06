import React from 'react'
import Navbar from '../../components/navbar';
import './No2.css'
import { getData } from '../../api';
import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function No2() {

    const [no2, setNo2] = useState([]);
    const [lastvalue, setLastvalue] = useState([]);

    const getLastValue = () => {
        let result = no2.slice(-1);
        let lastValue = result[0]?.average;
        setLastvalue(lastValue)
    }

    const param = 'nitrous-oxide';

    useEffect(() => {
        getData(param)
        .then((response) => {
            setNo2(response.data.nitrous);
            //console.log(response.data.nitrous);
        })
    },[])

    useEffect(() => {
        getLastValue()
    },[no2])

    return (
        <div>
            <Navbar />
            <div className='main-container'>
            <h2 className='page-title'>Nitrous Oxide</h2>
            <p className='subtitle'>Nitrous Oxide levels from 2000 to present</p>

            <div className='info'>
                <p>Last Value: {lastvalue}</p>
            </div>

                <ResponsiveContainer width='100%' height={500}>

                <AreaChart data={no2} margin={{bottom: 10, left: 10}}>
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
                    <YAxis dataKey="average" axisLine={false} tickLine={false} tickCount={10}>
                    <Label value="ppb" offset={0} position="insideLeft" fill="#4c7482" angle="270"/>
                    </YAxis>
                    <CartesianGrid opacity={0.1} vertical={false}/>
                    <Tooltip contentStyle={{ backgroundColor: "#4c7482" }} labelStyle={{ color: "#173E46", textAlign: 'left' }}/>
                </AreaChart>

                </ResponsiveContainer>

            </div>
        </div>
    )
}

export default No2