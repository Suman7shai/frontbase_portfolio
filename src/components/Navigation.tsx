import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const Navigation = () => {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const current = window.scrollY
      const delta = current - lastY.current

      if (current <= 50) {
        setVisible(true)
      } else if (delta > 2) {
        // scrolling down
        setVisible(false)
      } else if (delta < 0) {
        // scrolling up
        setVisible(true)
      }

      lastY.current = current
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm text-black font-[font-1] w-full transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-20 flex items-center h-16 justify-between">
        <div className="text-2xl cursor-pointer flex items-center gap-2">
          <img className="h-10 w-10" src="/image/taglogo.svg" alt="FrontBase Logo" />
          <Link to="/" className=" text-black" >Frontbase</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className=" hover:text-[#69c8ff]" >Home</Link>
          <Link to="/about" className=" hover:text-[#69c8ff]" >About</Link>
          <Link to="/services" className=" hover:text-[#69c8ff]" >Services</Link>
          <Link to="/contact" className=" hover:text-[#69c8ff]" >Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link to="/contact">
              <button className=" mr-0 bg-[#69c8ff] hover:bg-[#4a90c5] cursor-pointer px-4 py-2 rounded-md ">Contact Us</button>
            </Link>
          </div>

          <MobileMenuButton />
        </div>
      </div>

      <MobileMenu />
    </nav>
  )
}

const MobileMenuButton = () => {
  return (
    <button onClick={() => window.dispatchEvent(new CustomEvent('toggleMobileMenu'))} className="md:hidden p-2 rounded-md mr-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const hide = () => setOpen(false)
    const toggle = () => setOpen((v) => !v)
    window.addEventListener('resize', hide)
    window.addEventListener('toggleMobileMenu', toggle as EventListener)
    return () => {
      window.removeEventListener('resize', hide)
      window.removeEventListener('toggleMobileMenu', toggle as EventListener)
    }
  }, [])

  return (
    <div className={`md:hidden bg-white/95 border-t shadow-sm ${open ? 'block' : 'hidden'}`}>
      <div className="px-6 py-4 space-y-3">
        <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
        <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
        <Link to="/services" onClick={() => setOpen(false)} className="block">Services</Link>
        <Link to="/work" onClick={() => setOpen(false)} className="block">Work</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="block mt-2">
          <button className="w-full bg-[#69c8ff] text-black py-2 rounded">Contact Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
