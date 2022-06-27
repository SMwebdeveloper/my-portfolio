import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

export default function Header() {
    const [navActive, setNavActive] = useState(false)

    const openMenu = () =>{
        setNavActive(!navActive)
    }
  return (
    <div className='header'>
        <div className="logo">
            <span>Robb</span>
        </div>

        <nav>
            <ul className={navActive? 'list-items active' : 'list-items'}>
                <div className="close-icon">
                <i className="fa-solid fa-times " onClick={openMenu}></i>
                </div>

                <li>
                    <Link to="/">Works</Link>
                </li>
                
                <li>
                    <Link to="/">Projects</Link>
                </li>
                
                <li>
                    <Link to="/">Licences</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
             
        </nav>
             <div className="hamburger-icon">
             <i className="fa-solid fa-bars icon" 
             onClick={openMenu}></i>
             </div>
    </div>
  )
}
