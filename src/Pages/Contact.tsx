import React, { useEffect, useRef, useState } from "react"
import Navigation from "../components/Home/Navigation"
import { gsap } from "gsap"
import Footer from "../components/Footer"

const Contact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const submitBtnRef = useRef<HTMLButtonElement | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<null | string>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const elems = containerRef.current.querySelectorAll(".animate")
    gsap.fromTo(
      elems,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" }
    )
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setStatus("Please fill all fields.")
      const statusElems: Element[] = containerRef.current
        ? Array.from(containerRef.current.querySelectorAll(".status"))
        : []
      gsap.fromTo(statusElems, { y: -6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 })
      return
    }

    setStatus("Sending...")
    if (submitBtnRef.current) {
      gsap.to(submitBtnRef.current, { scale: 0.95, duration: 0.08, yoyo: true, repeat: 1 })
    }

    // Simulate send
    setTimeout(() => {
      setStatus("Message sent — thanks!")
      gsap.to(containerRef.current, { opacity: 0, y: -10, duration: 0.6 })
    }, 700)
  }

  return (
    <section className="w-full font-[font-1]">
      <div className="text-white bg-gray-950 min-h-screen w-screen font-[font-1] flex flex-row">
        <Navigation />

      <div ref={containerRef} className="pl-20 flex-row gap-2 w-150 py-12">
        <h1 className="text-7xl font-bold animate text-[#69c8ff] mb-5 mt-50">Contact</h1>
        <p className="text-lg pt-6 leading-5 animate mt-5">
          FrontBase is a cutting-edge web application designed to streamline and enhance your online
          experience. Built with modern technologies, it offers a sleek interface and robust
          functionality to meet the needs of today's users.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 mt-30 animate">
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 animate border-2 border-white bg-white text-black p-6 rounded-lg h-120 w-120">
          <div className="flex flex-col">
            <label className="text-sm mb-2">Name</label>
            <input
              className="p-3 rounded bg-black/5 border border-black/10 focus:border-white/30 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-2">Email</label>
            <input
              className="p-3 rounded bg-black/5 border border-black/10 focus:border-white/30 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-2">Message</label>
            <textarea
              className="p-3 rounded bg-black/5 border border-black/10 focus:border-white/30 outline-none"
              style={{ minHeight: 120 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              ref={submitBtnRef}
              type="submit"
              className="px-5 py-3 bg-[#69c8ff] text-black rounded font-medium"
            >
              Send Message
            </button>

            <div className="text-sm text-black status">{status}</div>
          </div>
        </form>
      </div>
    </div>
      <Footer />
    </section>

  )
}

export default Contact
