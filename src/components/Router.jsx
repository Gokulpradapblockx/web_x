import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Single from "./Single";

import ServiceNew from "./ServiceNew";
import Nft from "./Servicefloor/Nft";
import Defi from "./Servicefloor/Defi";
import Crypto from "./Servicefloor/Crypto";
import Smart from "./Servicefloor/Smart";
import Audit from "./Servicefloor/Audit";
import Mobile from "./Servicefloor/Mobile";
import Blockchain from "./Servicefloor/Blockchain";
import Backend from "./Servicefloor/Backend";
import Grapic from "./Servicefloor/Grapic";
import Meta from "./Servicefloor/Meta";
import Frontend from "./Servicefloor/Frontend";
import Coin from "./Servicefloor/Coin";
const Router = () => {
  return (
  
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Portfolio" element={<Portfolio />}/>
        <Route path="/Services" element={<ServiceNew />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Single" element={ <Single/>} />
        <Route path="/Nft" element={ <Nft/>} />
        <Route path="/DeFi" element={ <Defi/>} />
        <Route path="/Crypto" element={ <Crypto/>} />
        <Route path="/Smart" element={ <Smart/>} />
        <Route path="/Audit" element={ <Audit/>} />
        <Route path="/Mobile" element={  <Mobile/>} />
        <Route path="/Blockchain" element={  <Blockchain/>} />
        <Route path="/Backend" element={  <Backend/>} />
        <Route path="/Grapic" element={  <Grapic/>} />
        <Route path="/Meta" element={  <Meta/>} />
        <Route path="/Frontend" element={  <Frontend/>} />
        <Route path="/Coin" element={  <Coin/>} />
      </Routes>
 
  )
}

export default Router