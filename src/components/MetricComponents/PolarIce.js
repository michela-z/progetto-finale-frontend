import React from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './MetricComponents.module.scss';
import { Await } from 'react-router-dom';

function PolarIce(props) {

    let loader = props.loaderData;

    return (
    <div>
        <div className={styles.container}>
        <h2 className={styles.title}>Melted Polar Ice Caps</h2>
        <p className={styles.subtitle}>Melted Polar Ice Caps since 1979</p>

        <React.Suspense fallback={<p>Loading...</p>}>
            <Await resolve={loader.data.arcticData}>
            {(data) => (
            <ResponsiveContainer width='100%' height={500} >
                <LineChart data={data} margin={{bottom: 10, left: 10}}>
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
            )}
            </ Await>
        </React.Suspense>

        </div>
    </div>
    )
}

export default PolarIce;