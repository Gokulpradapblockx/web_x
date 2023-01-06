import React from 'react'
import Router from './Router'
import Nav from "./Nav"
import Footer from "../Home/Footer"
import ScrollToTop from "./ScrollToTop";
import Social from './Social';
const Layout = () => {
  return (
   <>
   <ScrollToTop />
   <Social/>
   <Nav/>
   <Router/>
   <Footer/>
   </>
  )
}

export default Layout