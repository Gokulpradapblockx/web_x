import "./App.css";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Careers from "./components/Careers";
import Single from "./components/Single";
import ScrollToTop from "./components/ScrollToTop";
import ServiceNew from "./components/ServiceNew";
import Nft from "./components/Servicefloor/Nft";
import Defi from "./components/Servicefloor/Defi";
import Crypto from "./components/Servicefloor/Crypto";
import Smart from "./components/Servicefloor/Smart";
import Audit from "./components/Servicefloor/Audit";
import Mobile from "./components/Servicefloor/Mobile";
import Blockchain from "./components/Servicefloor/Blockchain";
import Backend from "./components/Servicefloor/Backend";
import Grapic from "./components/Servicefloor/Grapic";
import Meta from "./components/Servicefloor/Meta";
import Frontend from "./components/Servicefloor/Frontend";
import Coin from "./components/Servicefloor/Coin";

function App() {
  return (
    <>    
      <BrowserRouter>
      <ScrollToTop />
        <Nav/>
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
      </BrowserRouter>
    </>
  );
}

export default App;
