import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaHamburger, FaTwitterSquare,  } from "react-icons/fa";

const Nav = () => {

  const[showIcons, setIcons] = useState(false);


  return (
    <>
    <nav className="main-nav">
    <div className="logo">
    <NavLink className="nav-link"  to="/"><h1><span>L</span>OGO <span>H</span>ERE</h1></NavLink>
    </div>
    <div className={showIcons ? "menu-link mobile-menu-link" : "menu-link"}>
    <ul>
    <li>
    <NavLink className="nav-link"  to="/">Home</NavLink>
    </li>
    <li>
    <NavLink className="nav-link" to="/Breakfast">Breakfast</NavLink>
    </li>
    <li>
    <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
    </li>
    <li>
    <NavLink className="nav-link" to="/evening">Evening</NavLink>
    </li>
    <li>
    <NavLink className="nav-link" to="/dinner">Dinner</NavLink>
    </li>
    </ul>
  </div>
    <div className="social-media">
    <ul className='social-media-desktop' >
      <li><a href="https://www.facebook.com" target="-blank"><FaFacebookSquare className='facebook hover-fx'/></a></li>
      <li><a href="https://www.twitter.com" target="-blank"><FaTwitterSquare className='twitter hover-fx'/></a></li>
      <li><a href="https://www.instagram.com" target="-blank"><FaInstagramSquare className='instagram hover-fx'/></a></li>
    </ul>
    {/* hamburger menu */}
    <div className="hamburger-menu">
          <a href='#' onClick={()=> setIcons(!showIcons)}>
          <FaHamburger/> 
          </a>
    </div>
    </div>
    </nav>    
    {/* <section className='hero-section' >
      <p>Welcome to</p>
      <h1>Logo-Name</h1>
    </section> */}
      </>
  )
}

export default Nav;