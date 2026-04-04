import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Articles from './components/Articles'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
        </>
      )}
      
      {currentPage === 'catalog' && <Catalog />}
      {currentPage === 'articles' && <Articles />}
      {currentPage === 'reviews' && <Reviews />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
