import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contacts from './sections/Contacts'
import Experience from './sections/Experience'


function App() {
  return (
    
    <div className="bg-[#0a192f] text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App