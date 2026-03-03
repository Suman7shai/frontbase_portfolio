
import Home from './Pages/Home'
import Loading from './components/Loading'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'



const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(() => {
    // Only hide loader after first view per browser tab (session-based)
    return sessionStorage.getItem('hasSeenLoader') === 'true'
  })

  useEffect(() => {
    if (loadingComplete) {
      sessionStorage.setItem('hasSeenLoader', 'true')
    }
  }, [loadingComplete])

  return (
    <div>
      {!loadingComplete ? (
        <Loading onComplete={() => setLoadingComplete(true)} />
      ) : (
        < >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </div>
    
  )
}

export default App
