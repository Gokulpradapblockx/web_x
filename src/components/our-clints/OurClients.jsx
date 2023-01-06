import React from "react";
import shiba from "../../Assets/shiba.svg";
import elephant from "../../Assets/download-removebg-preview.png";
import coinbac from "../../Assets/coinbanc logo black (1).png";
import p3n from "../../Assets/PEN.png";
import "./our-clint.css";
const OurClients = () => {
  return (
    <section className="our__clint">
      <div className="container">
        <div className="our__clint-heading">
          <h2>Our Clients</h2>
        </div>
        <div className="our__clint-logo scrollmenu">
          <a target="_blank" href="https://www.coinbanc.app" rel="noreferrer">
            <img className="coinbanc__img" src={coinbac} alt="" />
          </a>
          <a target="_blank" href="http://www.shibaswap.com" rel="noreferrer">
            <img className="coinbanc__img" src={shiba} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.thechillelephantsnft.site"
            rel="noreferrer"
          >
            {" "}
            <img className="elephant__img" src={elephant} alt="" />
          </a>
          <a target="_blank" href="https://p3nprotocol.com/" rel="noreferrer">
            {" "}
            <img className="coinbanc__img" src={p3n} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.mylottocoin.com/"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://www.mylottocoin.com/assets/images/logo.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
