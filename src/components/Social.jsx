/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Gmail from "../Assets/gmail.png";
import LinkedIn from "../Assets/linkedin.png";
import Instagram from "../Assets/instagram.png";
import Whatsapp from "../Assets/whatsapp.png" 
import "./css/social.css"



const Social = () => {
  return (
    <section className='social__page'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 social__links">
                  <ul>
                  <li><img src={LinkedIn} alt="" />
                        <a target="_blank" href="https://www.linkedin.com/company/blockx-technologies-inc/">BlockX IT Solutions LLP</a>
                    </li>
                    <li>
                    <img className='gmail__logo' src={Gmail} alt="" />
                        <a href="mailto:contact@blockxsolutions.io">contact@blockxsolutions.io</a>
                    </li>
                    <li><img src={Whatsapp} alt="" />
                        <a href="#"> +91 8531824727</a>
                    </li>
                    <li>
                    <img src={Instagram} alt="" />
                        <a target="_blank" href="https://instagram.com/blockxsolutions?igshid=NTdlMDg3MTY=" rel="noreferrer">@blockxsolutions</a>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Social