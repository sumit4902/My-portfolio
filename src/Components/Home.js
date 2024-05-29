import React from 'react'
import Do from "./Do";
import Projects from "./Projects";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skills from "./Skills";
import Contact from "./Contact";
 export default function Home() {
   return (
     <>
      
     <Navbar/>
       <HeroSection/> 
       <Do/> 
       <Projects/> 
        <Skills/>
        <Contact/>
       <Footer/>
     </>
   )
 }