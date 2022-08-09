import React from "react";
import "./home.css";
import NewContact from "../components/NewContact";

function Contactus() {  
  return ( 
      <div className="About About-contact">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="why">
              <h1>
                <span>Get In</span> <br />
                <strong>Touch !!!</strong>
              </h1>
            </div>
          </div>
          <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="container mb-5">
          <NewContact/>         
        </div>
      </div>
   
  );
}

export default Contactus;
