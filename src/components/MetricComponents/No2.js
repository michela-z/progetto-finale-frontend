import React from 'react'
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './MetricComponents.module.scss';
import { Await } from 'react-router-dom';

function No2(props) {

    let loader = props.loaderData;

    let result = loader.data.nitrous.slice(-1);
    let lastvalue = result[0].average;

    return (
        <div>
            <div className={styles.container}>
            <h2 className={styles.title}>Nitrous Oxide</h2>
            <p className={styles.subtitle}>Nitrous Oxide levels from 2000 to present</p>

            <div className={styles.info}>
                <p>Last Value: {lastvalue}</p>
            </div>

            <React.Suspense fallback={<p>Loading...</p>}>
            <Await resolve={loader.data.nitrous}>
                {(data) => (
                <ResponsiveContainer width='100%' height={500}>
                <AreaChart data={data} margin={{bottom: 10, left: 10}}>
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
            )}
            </ Await>
            </React.Suspense>

            </div>
        </div>
    )
}

export default No2;