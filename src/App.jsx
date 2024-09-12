import Navbar from "./components/Navbar/Navbar";
import React , { useState } from "react";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./assets/Campus/Campus";
import Testimonials from "./components/Testiominals/Testiominals";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
const App = () =>{

  const [playState , setPlayState] = useState(false);
  return(
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title  subTitle = 'Our PROGRAM' title ='What We Offer'/>
        <Programs />
        <About setPlayState = {setPlayState} />
         <Title  subTitle = 'Gallery' title ='Campus Photos'/>
         <Campus />
         <Title  subTitle = 'Testimonials' title ='What Student Says'/>
         <Testimonials />
         <Title  subTitle = 'Contact Us' title ='Get in Touch'/>
         <Contact />
         <Footer />
      </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}
export default App;