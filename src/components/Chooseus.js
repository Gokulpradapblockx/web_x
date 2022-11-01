import React from 'react'
import "./css/Chooseus.css"
import expert from "../Assets/expert advace.png";
import End from "../Assets/End to End Solution img.jpg"
import Support from "../Assets/Continuous Support img.jpg"
import Culture from "../Assets/Friendly Culture.png"
import Resource from "../Assets/Resource Outsourcing.png"
import Party from "../Assets/no third party img.jpg"


const Chooseus = () => {
  return (
    <div className="container">
        <div className="row choose-section">
            <div className="col-lg-4 choose-card">
                <img src={expert} alt="" />
                <h6>Expert Advice</h6>
                <p>We have experts who helps you to enhance your ideas and provide best tech
solutions for your problems.</p>
            </div>
            <div className="col-lg-4 choose-card">
                <img className='mt-4' src={End} alt="" />
                <h6>End to End Solution</h6>
                <p>Your service at our experts care from start to end of the project and we
provide you complete functional solution.</p>
                </div>
                <div className="col-lg-4 choose-card">
                <img src={Support} alt="" />
                <h6>Continuous Support</h6>
                <p>Our support exists even after your product lunch and we always stay in
support with your product growth.
</p>
                </div>
        </div>
        <div className="row choose-section">
          
                <div className="col-lg-4 choose-card">
                <img src={Culture} alt="" />
                <h6>Friendly Culture </h6>
                <p>We have friendly environment by providing positive mindset to our customers
and employees at our company.
</p>
            </div>
            <div className="col-lg-4 choose-card">
                <img className='mt-4' src={Resource} alt="" />
                <h6>Resource Outsourcing</h6>
                <p>We are outsourcing partners for major clients all around the world and from
any location our resource will help your project to lunch remotely.</p>
                </div>
                <div className="col-lg-4 choose-card final-card">
                <img  src={Party} alt="" />
                <h6>No Third Party</h6>
                <p >Our team always connect to customers directly for their services without third
party involvement.</p>
                </div>
        </div>
    </div>
  )
}

export default Chooseus;