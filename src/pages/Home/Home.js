import React from 'react';
import './Home.css';
import Card from '../../components/card';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';

function Home(props) {
    
    const style = {textDecoration: 'none'}

    return (
        <div className="App">
            <Navbar />
            <div className='card-container'>
                <div className='card-cnt-top'>
                    <Link to={'/temperature'} style={style}><Card title='Temperature' subtitle='Global temperature'/></Link>
                    <Link to={'/co2'} style={style}><Card title='CO2' subtitle='Carbon Dioxide levels'/></Link>
                </div>
                <div className='card-cnt-bottom'>
                    <Link to={'/methan'} style={style}><Card title='Methan' subtitle='Methane levels'/></Link>
                    <Link to={'/no2'} style={style}><Card title='NO2' subtitle='Nitrous Oxide levels'/></Link>
                    <Link to={'/polar-ice'} style={style}><Card title='Polar Ice' subtitle='Melted Polar Ice Caps'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Home