import React from "react";
import About from "../Home/About";
import Contactus from "../Home/Contactus";
import Why from "../Home/Why";
import Header from "../Home/Header";
import Servicecard from './Servicecard';
import OurClients from "./our-clints/OurClients";

const Home = () => {
  return (
  
   <>
     <Header />
      <About />
      <Servicecard/>
      <OurClients/>     
      <Why />
      </>     
  );
};

export default Home;