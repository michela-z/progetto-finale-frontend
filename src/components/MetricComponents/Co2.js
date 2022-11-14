import React from 'react';
import { Await } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './MetricComponents.module.scss';

function Co2( props ) {

    let loader = props.loaderData;

    let result = loader.data.co2.slice(-1);
    let lastvalue = result[0].trend;

    return (
        <div>
            <div className={styles.container}>
            <h2 className={styles.title}>Carbon Dioxide</h2>
            <p className={styles.subtitle}>Carbon Dioxide levels from 2012 to present</p>
            
            <div className={styles.info}>
                <p>Last Value: {lastvalue}</p>
            </div>

            <React.Suspense fallback={<p>Loading...</p>}>
            <Await resolve={loader}>
                {(data) => (
                <ResponsiveContainer width='100%' height={500}>
                <AreaChart data={data.data.co2} margin={{bottom: 10, left: 10}}>
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

export default Co2;