import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videplayer/Videoplayer'

function App() {
  const[playstate,setplaystate]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What We Offer'/>
      <Program/>
      <About setplaystate={setplaystate}/>
      <Title subtitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subtitle='TESTIMONIALS' title='What Student says'/>
  <Testimonials/>
  <Title subtitle='Contact us' title='Get in touch'/>
  <Contact/>
  <Footer/>
      </div>
    <Videoplayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App
