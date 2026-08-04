import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Internship from './Internship'
import Education from './Education'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import Certificates from './Certificates'

function Home() {
  return (
    <div>
      <Hero/> <hr />
      <About/> <hr />
      <Skills/> <hr />
      <Projects/> <hr />
      <Internship/> <hr />
      <Education/> <hr />
      <Certificates/> <hr />
      <Contact/> 
    </div>
  )
}

export default Home
