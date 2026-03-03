import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Footer = () => {
  const root = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!root.current) return
    const items = root.current.querySelectorAll(".ft-item")
    gsap.fromTo(items, { y: 12, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" })
  }, [])

  const hoverIn = (el?: HTMLElement | null) => {
    if (!el) return
    gsap.to(el, { y: -6, scale: 1.03, duration: 0.16 })
  }
  const hoverOut = (el?: HTMLElement | null) => {
    if (!el) return
    gsap.to(el, { y: 0, scale: 1, duration: 0.16 })
  }

  return (
    <footer ref={root} className="bg-white/90 text-black">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8">
        <div className="ft-item">
          <div className="text-xl font-bold text-[#69c8ff]">FrontBase</div>
          <div className="text-sm text-black">Building delightful web products</div>
        </div>

        <nav className="flex gap-6 ft-item">
          <a href="/" className="text-black-300 hover:text-[#69c8ff]">Home</a>
          <a href="/about" className="text-black-300 hover:text-[#69c8ff]">About</a>
          <a href="/services" className="text-black-300 hover:text-[#69c8ff]">Services</a>
          <a href="/contact" className="text-black-300 hover:text-[#69c8ff]">Contact</a>
        </nav>

        <div className="flex gap-3 items-center ft-item">
          <button
            onMouseEnter={(e) => hoverIn(e.currentTarget as HTMLElement)}
            onMouseLeave={(e) => hoverOut(e.currentTarget as HTMLElement)}
            className="px-3 py-2 rounded bg-black/3 text-sm"
          >
            GitHub
          </button>

          <button
            onMouseEnter={(e) => hoverIn(e.currentTarget as HTMLElement)}
            onMouseLeave={(e) => hoverOut(e.currentTarget as HTMLElement)}
            className="px-3 py-2 rounded bg-black/3 text-sm"
          >
            Twitter
          </button>

          <button
            onMouseEnter={(e) => hoverIn(e.currentTarget as HTMLElement)}
            onMouseLeave={(e) => hoverOut(e.currentTarget as HTMLElement)}
            className="px-3 py-2 rounded bg-black/3 text-sm"
          >
            Email
          </button>
        </div>
      </div>

      <div className="border-t border-white/6 text-sm text-black py-3 text-center">© {new Date().getFullYear()} FrontBase</div>
    </footer>
  )
}

export default Footer
