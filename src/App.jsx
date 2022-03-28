import React from 'react'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonial from './components/Testimonial/Testimonial'


const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App