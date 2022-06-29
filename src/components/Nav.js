import React from 'react'
import {Link } from 'react-router-dom';
import logo from '../Assets/logo1.png';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./css/nav.css"

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container"><a href="/"><img src={logo} alt="logo" /></a>
            
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           
            {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
         <ul class="navbar-nav me-auto m-2 mb-lg-0">
         <li class="nav-item">
           <Link class="nav-link active" to="/">Home</Link>
         </li>
         {/* <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Services">Services</Link>
         </li> */}
         {/* <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Portfolio">Portfolio</Link>
         </li> */}
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Careers">Careers</Link>
         </li>
         <li class="nav-item">
           <a target="_blank" class="nav-link active" aria-current="page" href="https://blogs.blockxtechnologies.com/">Blog</a>
         </li>
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/Aboutus">About us</Link>
         </li>
         
         <form class="d-flex">                   
         <Link to="./Single">Contact us</Link>        
       </form>
       </ul>
        
        )}













          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">Home</Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Services">Services</Link>
              </li> */}
              {/* <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Portfolio">Portfolio</Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Careers">Careers</Link>
              </li>
              <li class="nav-item">
                <a target="_blank" class="nav-link active" aria-current="page" href="https://blogs.blockxtechnologies.com/">Blog</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Aboutus">About us</Link>
              </li>
              
              <form class="d-flex">            
              <Link to="/Single">Contact us</Link>
            </form>
            </ul>
            </div>
        </div>
      </nav>
    
  )
}

export default Nav;