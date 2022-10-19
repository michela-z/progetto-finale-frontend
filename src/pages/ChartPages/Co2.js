import React from 'react'
import Navbar from '../../components/navbar';
import { getData } from '../../api';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './ChartPage.module.scss';
import { Await, useLoaderData } from 'react-router-dom';

const param = 'co2';

function Co2() {

    const loaderData = useLoaderData();

    let result = loaderData.data.co2.slice(-1);
    let lastvalue = result[0].trend;

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
            <h2 className={styles.title}>Carbon Dioxide</h2>
            <p className={styles.subtitle}>Carbon Dioxide levels from 2012 to present</p>

            <div className={styles.info}>
                <p>Last Value: {lastvalue}</p>
            </div>

            <React.Suspense fallback={<p>Loading...</p>}>
            <Await resolve={loaderData.data.co2}>
                {(data) => (
                <ResponsiveContainer width='100%' height={500}>
                <AreaChart data={data} margin={{bottom: 10, left: 10}}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2451b7" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area dataKey="cycle" stroke="#3774FF" fill="url(#color)" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false}>
                    <Label value="Year" offset={-10} position="insideBottom" fill="#4c7482" />
                    </XAxis>
                    <YAxis dataKey="cycle" axisLine={false} tickLine={false} tickCount={10}>
                    <Label value="ppm" offset={0} position="insideLeft" fill="#4c7482" angle="270" />
                    </YAxis>
                    <CartesianGrid opacity={0.1} vertical={false}/>
                    <Tooltip contentStyle={{ backgroundColor: "#4c7482" }} labelStyle={{ color: "#173E46", textAlign: 'left' }}/>
                    </AreaChart>
                    </ResponsiveContainer>
                    )}
                </ Await>
                </React.Suspense>

            </div>
        </div>
    )
}

export default Co2

export function loader() {
    return getData(param);
}