import React from 'react';
import styles from './Home.module.scss';
import Card from '../../components/card';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';

function Home() {
    
    const style = {textDecoration: 'none'}

    return (
        <div>
            <Navbar />
            <div className={styles.cardContainer}>
                <div className={styles.cardCntTop}>
                    <Link to={'temperature'} style={style}><Card title='Temperature' subtitle='Global temperature'/></Link>
                    <Link to={'co2'} style={style}><Card title='CO2' subtitle='Carbon Dioxide levels'/></Link>
                </div>
                <div className={styles.cardCntBottom}>
                    <Link to={'methane'} style={style}><Card title='Methan' subtitle='Methane levels'/></Link>
                    <Link to={'nitrous-oxide'} style={style}><Card title='NO2' subtitle='Nitrous Oxide levels'/></Link>
                    <Link to={'arctic'} style={style}><Card title='Polar Ice' subtitle='Melted Polar Ice Caps'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Home