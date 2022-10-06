import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const navStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'light',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }

    return (
        <div className='navbar'>
            
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h2>Global Warming</h2>
            </Link>

            <div className='nav-list'>
                <ul>
                <NavLink to={'/'} style={navStyles}><li>Home</li></NavLink>
                <NavLink to={'/temperature'} style={navStyles}><li>Temperature</li></NavLink>
                <NavLink to={'/co2'} style={navStyles}><li>Co2</li></NavLink>
                <NavLink to={'/methan'} style={navStyles}><li>Methan</li></NavLink>
                <NavLink to={'/no2'} style={navStyles}><li>No2</li></NavLink>
                <NavLink to={'/polar-ice'} style={navStyles} ><li>Polar Ice</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar