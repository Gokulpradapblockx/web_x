import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
import {  
  FaLinkedinIn,
    FaArrowRight,
  } from "react-icons/fa";
const Managers = () => {
  return (
    <div className="container">        
        
    <div className="manager-card">           
            <div className="row card-component">
                <div className="col-lg-12 mb-4 compont">
                    <h5>Need Consulting?</h5>
                    <p className='m-1 pb-5'>If you want to have a complete Blockchain Consulting, I as a Blockchain Consultant can help you and Guide you in providing the best solution to your requirement or your idea.We have provide our consulting services to about 50+ companies from the scratch of building a complete Blockchain Solution</p>
                  
                    <a target="_blank" href="https://www.linkedin.com/in/manjari-a-9b1aa345/">  To Consult <FaArrowRight/></a>
                </div>
                <div className="col-lg-12 mb-4 compont">
                    <h5>Need Development?</h5>
                    <p className='m-1  pb-1'>We are Team of Professionals working in Blockchain Space  in providing a complete Quality Decentralized Application. We are exclusively focusing on all Types of Blockchain Project Development such as Decentralized Finances, Decentralized Autonomous Organization,NFTs, End to End Blockchain Development, Decentralized Exchanges, P2P Lending,Borrowing, Stacking, Web 3.0 Applications. Games Etc.</p>
                    <a target="_blank" href="https://www.linkedin.com/in/nischayvaish/">
                     To Tech <FaArrowRight/></a>
                </div>
                <div className="col-lg-12 mb-4 compont">
                    <h5>Join Us?</h5>
                    <p className='m-1 pb-4'>Constantly we are looking for Blockchain Developers, Front End ,Back End Developers, Full Stack Developers, Mobile Application Developers all these collective talents and Skills makes the Blockchain Application the best in the market and you want to be a part of our team in building a better future with the Demanding possibilities. Join with Us</p>
                    <Link to="./Single">Contact us <FaArrowRight/></Link>
                </div>
            </div>
        
    </div>
</div>
  )
}

export default Managers