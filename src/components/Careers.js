import React from "react";
import "../carrers.css";
import Contactus from "../Home/Contactus";
import Footer from "../Home/Footer";
import Weare from "./Weare";
import Whyus from "./Whyus";
const carrers = () => {
  return (
    <>
     <div className=" gradient__bg">
      <div class="col-lg-12 container">
        <div class="row  pt-5 pb-5">
          <div class=" imade col-lg-6 col-md-12 col-xs-12 col-sm-12 mb-5">
          <img
                  src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/12/career-in-information-technology.png.webp"
                  alt=""
                />
          </div>

         <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 mb-5">
         <div className="main-page__title-block mb-5">
         <span className="main-page__title main-page__title--big"> <h2>Become A Part of </h2>
                <h1>
                  BlockX Software <br />
                  Team
                </h1> </span>
        
                </div>
                <div className="main-page__description mb-5">
                <p>
                  Your dream team and dream job are here. <br /> Check out our
                  perks and benefits, meet our team, and read about the
                  mentorship program.
                </p>           
          </div>
                
          </div>
        </div>
      </div>
    </div>
     
      <Weare />
      <Whyus />
    </>
  );
};

export default carrers;
