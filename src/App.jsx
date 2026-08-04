import React from 'react'
import './index.css'
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Education from './components/Education'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import CertificateDetails from './components/CertificateDetails'

function App() {
  return (

      <Router>
        <Header/>
        <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Internship' element={<Internship/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/certificates' element={<Certificates/>}/>
          <Route path='/certificate/:id' element={<CertificateDetails/>}/>
        </Routes>
        </main>
      
      <Footer/>
      </Router>

  )
}

export default App
