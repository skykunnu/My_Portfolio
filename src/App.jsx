import {useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contacts from './sections/Contacts'
import Experience from './sections/Experience'


function App() {

  useEffect(()=>{
    window.location.hash='#home'
  },[])
  return (
    
    <div className="bg-[#0a192f] text-white min-h-screen font-sans">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App