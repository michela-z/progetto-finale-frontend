import React from 'react'
import Navbar from '../../components/navbar';
import './PolarIce.css'
import { getData } from '../../api'
import { useEffect, useState } from 'react';
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function PolarIce() {
    const [ice, setIce] = useState([]);

    const param = 'arctic';

    useEffect(() => {
    getData(param)
    .then((response) => {
        setIce(response.data.arcticData)
        //console.log(response.data.arcticData)
    })
    },[])

    return (
    <div>
        <Navbar />
        <div className='main-container'>
        <h2 className='page-title'>Melted Polar Ice Caps</h2>
        <p className='subtitle'>Melted Polar Ice Caps since 1979</p>

        <ResponsiveContainer width='100%' height={500} >
            <LineChart data={ice} margin={{bottom: 10, left: 10}}>
            <XAxis dataKey="year">
            <Label value="Year" offset={-10} position="insideBottom" fill="#4c7482" />
            </XAxis> 
            <YAxis dataKey="area">
            <Label value="Milion square km" offset={20} position="insideLeft" fill="#4c7482" angle="270"/>
            </YAxis>
            <CartesianGrid opacity={0.1} vertical={false}/>
            <Tooltip contentStyle={{ backgroundColor: "#4c7482", textAlign: 'left'}} labelStyle={{ color: "#173E46", textAlign: 'left' }}/>
            <Legend verticalAlign="top" height={36}/>
            <Line name="extent" type="monotone" dataKey="extent" stroke="#00A3FF" />
            <Line name="area" type="monotone" dataKey="area" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>

        </div>
    </div>
    )
}

export default PolarIce