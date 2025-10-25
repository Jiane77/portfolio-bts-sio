import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './assets/components/navbar'
import Hero from './assets/components/hero'
import About from './assets/components/about'
import Skills from './assets/components/skills'
import Projects from './assets/components/projetcs'
import Internship from './assets/components/internship'
import TechWatch from './assets/components/techWatch'
import Contact from './assets/components/contact'  


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Internship />
              <TechWatch />
              <Contact />
            </motion.div>
          } />
        </Routes>
      </div>                                
    </Router>
  )
}

export default App
