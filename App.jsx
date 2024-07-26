import React from 'react'
import './App.css'
import Window from './Components/Window/Window'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <Window />
      <Header/>
      <About/>
      <Services/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
