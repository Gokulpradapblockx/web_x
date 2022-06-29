import React from "react";
import About from "../Home/About";
import Contactus from "../Home/Contactus";
import Why from "../Home/Why";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Servicecard from './Servicecard'
import Portfolio from "./Portfolio";

const Home = () => {
  return (
  
   <>
     <Header />
      <About />
      <Servicecard/>
      <Portfolio/>     
      <Why />
      <Contactus />
      
      <Footer />
      </>     
  );
};

export default Home;