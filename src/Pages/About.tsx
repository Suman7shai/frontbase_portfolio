import { useEffect, useRef } from "react"
import Navigation from "../components/Navigation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from "../components/Footer"
import img from "/image/Employees-at-work.avif"

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: "Manjil Shrestha",
    title: "CEO & Founder",
    bio: "15+ years in software architecture. Built Frontbase from vision to reality.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Sushil Shai",
    title: "Lead Backend Developer",
    bio: "Python expert specializing in scalable systems and API development. BCA graduate.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "suvarna Thapa",
    title: "Frontend Lead",
    bio: "React & GSAP animation specialist creating pixel-perfect user experiences.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=300&fit=crop",
    links: { linkedin: "#" },
  },
  {
    name: "Anil Gurung",
    title: "Mobile App Developer",
    bio: "iOS/Android expert delivering seamless cross-platform mobile solutions.",
    img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=300&h=300&fit=crop",
    links: { linkedin: "#" },
  },
  {
    name: "Saraswati Pandey",
    title: "UI/UX Designer",
    bio: "Crafting intuitive interfaces that users love. Figma & Adobe Suite specialist.",
    img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=300&h=300&fit=crop",
    links: { linkedin: "#" },
  },
  {
    name: "Saraswati Pandey",
    title: "UI/UX Designer",
    bio: "Crafting intuitive interfaces that users love. Figma & Adobe Suite specialist.",
    img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=300&h=300&fit=crop",
    links: { linkedin: "#" },
  },
]

const About = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return

    // Hero & sections
    const heroElems = rootRef.current.querySelectorAll(".hero-animate")
    gsap.fromTo(heroElems, { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out" })

    // Expertise cards
    const cards = rootRef.current.querySelectorAll(".expert-card")
    gsap.fromTo(
      cards,
      { y: 20, opacity: 0, scale: 0.99 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: cards, start: "top 80%" },
      }
    )

    // Stats counter
    const stats = statsRef.current ? Array.from(statsRef.current.querySelectorAll(".stat")) : []
    stats.forEach((el) => {
      const end = Number(el.getAttribute("data-end") || "0")
      const obj = { val: 0 }
      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val).toString() + (end >= 50 ? "+" : "")
        },
      })
    })

    // Team cards entrance
    const teamCards = rootRef.current.querySelectorAll(".team-card")
    gsap.fromTo(
      teamCards,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.easeOut",
        scrollTrigger: { trigger: teamRef.current, start: "top 90%" },
      }
    )

    // cleanup: kill ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={rootRef} className="min-h-screen w-screen font-[font-1]">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-28 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="hero-animate text-4xl md:text-5xl font-bold leading-tight">Empowering Businesses with Innovative Digital Solutions</h1>
            <p className="hero-animate mt-4 text-lg md:text-xl max-w-xl">Frontbase IT crafts cutting-edge websites, mobile apps, and custom software that drive growth and efficiency for modern enterprises.</p>

            <div className="mt-6 flex items-center gap-6" ref={statsRef}>
              <div className="stat-block hero-animate">
                <div className="text-3xl font-bold stat" data-end="20">0+</div>
                <div className="text-sm opacity-80">Projects Delivered</div>
              </div>
              <div className="stat-block hero-animate">
                <div className="text-3xl font-bold stat" data-end="50">0</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
              <div className="stat-block hero-animate">
                <div className="text-3xl font-bold stat" data-end="3">0+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </div>

            <div className="mt-8">
              <a href="/work" className="inline-block px-6 py-3 bg-white text-[#1E3A8A] font-semibold rounded shadow hover:shadow-lg transition-all duration-300 hover:brightness-105">View Our Work</a>
            </div>
          </div>

          <div className="h-70 w-full rounded-lg overflow-hidden ">
            <img src={img} alt="work" />
          </div>
        </div>
      </section>

      <main className="bg-white text-black">
        <section className="max-w-6xl mx-auto px-6 md:px-20 py-16">
          <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="expert-card p-6 bg-linear-to-b from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-semibold">Website Development</div>
              <p className="mt-3 text-sm text-gray-700">React.js, Next.js, custom CMS</p>
            </article>

            <article className="expert-card p-6 bg-linear-to-b from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-semibold">Mobile Applications</div>
              <p className="mt-3 text-sm text-gray-700">iOS/Android native & cross-platform</p>
            </article>

            <article className="expert-card p-6 bg-linear-to-b from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-semibold">Enterprise Software</div>
              <p className="mt-3 text-sm text-gray-700">Backend systems, APIs, cloud solutions</p>
            </article>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-20 py-12">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>

          <div className="relative">
            <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((m, idx) => (
                <div key={idx} className="team-card bg-white rounded-xl p-4 shadow-md transform transition-all duration-300 hover:-translate-y-2">
                  <div className="w-full flex flex-col items-center text-center">
                    <div className="aspect-3/4 overflow-hidden mb-4">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="font-bold text-lg text-black">{m.name}</div>
                    <div className="text-sm text-gray-600">{m.title}</div>
                    <p className="mt-3 text-sm text-gray-700">{m.bio}</p>
                    <div className="mt-3 flex gap-3">
                      {m.links.linkedin && <a href={m.links.linkedin} className="text-blue-600">LinkedIn</a>}
                      {m.links.github && <a href={m.links.github} className="text-gray-800">GitHub</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-20 py-8 text-sm text-gray-600">Serving clients globally from Kathmandu, Nepal (Nepal Timezone)</div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default About
