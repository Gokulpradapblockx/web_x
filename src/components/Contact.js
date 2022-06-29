import React from 'react'
import { FaHandshake, FaBlenderPhone } from 'react-icons/fa';
import { SiXdadevelopers } from 'react-icons/si';
import { BsArrowUpRight } from 'react-icons/bs';
import "./css/contact.css"

const Contact = () => {
  return (
    <div className="row text-center contact-bottom">
    <div className="col-lg-4 contact-deatails">
        <h5>Need Consulting?</h5>
        <h1><FaBlenderPhone/></h1>
        <a target="_blank" href="https://www.linkedin.com/in/manjari-a-9b1aa345/"><BsArrowUpRight/></a>
    </div>
    <div className="col-lg-4 contact-deatails">
        <h5>Need Development</h5>
        <h1><SiXdadevelopers/></h1>
        <a target="_blank" href="https://www.linkedin.com/in/nischayvaish/"><BsArrowUpRight/></a>
    </div>
    <div className="col-lg-4 contact-deatails">
       <h5> Join Us?</h5>
       <h1><FaHandshake/></h1>       
       <a href="./Single"><BsArrowUpRight/></a>
    </div>
    </div>
  )
}

export default Contact