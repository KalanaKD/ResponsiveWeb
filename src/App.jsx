import React from 'react' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import GsapExp from './components/GsapExp'

function App() {
  return (
    <>
      <div >
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards/>
        <Footer />
        <GsapExp />
      </div>
    </>
  )
}

export default App
