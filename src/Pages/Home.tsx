import { useGSAP } from "@gsap/react";
import Navigation from "../components/Navigation"
import logo from "/image/taglogo.svg"
import gsap from "gsap";
import Contact from "./Contact";
import TextAnimation from "../components/TextAnimation";
import ServiceCom from "../components/Services/ServiceCom";
import ChooseUs from "../components/ChooseUs";


const Home = () => {
  const tl = gsap.timeline()
  useGSAP(() => {
    tl.fromTo(".head1", {
      x: 0,
      opacity: 0
    }, {
      x: -45,
      opacity: 1,
      duration: 2,
      delay: 0.9,
      ease: "power3.out"
    },
      0
    )
    gsap.to(".tag", {
      rotate: 360,
      repeat: -1,
      duration: 20,
      ease: "linear"
    })

    // animate feature cards
    tl.fromTo(
      ".home-card",
      { y: 12, opacity: 0, scale: 0.985 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.7, delay: 1.0, ease: "power3.out" },
      0
    )
    tl.fromTo(".head2", {
      x: 0,
      opacity: 0
    }, {
      x: 45,
      opacity: 1,
      duration: 2,
      delay: 0.9,
      ease: "power3.out"
    },
      0
    )
    tl.fromTo(".head3", {
      x: 0,
      opacity: 0
    }, {
      x: 45,
      opacity: 1,
      duration: 4,
      delay: 0.9,
      ease: "power3.out"
    },
      0
    )

    // tech badges float-in
    tl.fromTo(
      ".tech-badge",
      { y: 10, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.9, ease: "elastic.out(1,0.6)" },
      0.2
    )

    // feature cards
    tl.fromTo(
      ".feature-card",
      { y: 18, opacity: 0, scale: 0.985 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.10, duration: 0.7, ease: "power3.out" },
      0.6
    )

  })

  return (

    <main className="bg-black min-h-screen w-full overflow-x-hidden font-[font-1]">
      {/* landing Section */}
      <div className="relative bg-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-6 rounded-bl-3xl rounded-br-4xl overflow-hidden">
        <Navigation />
        <div className=" text-black flex flex-col  justify-center items-center text-center md:text-left gap-6 md:gap-10 max-w-xl">
          <h1 className="head1 mt-2 text-3xl md:text-6xl font-bold leading-tight"><span className="text-5xl md:text-7xl text-[#69c8ff]">W</span>elcome to FrontBase</h1>
          <h2 className="head2 text-2xl md:text-4xl">We build your Dream.</h2>
          <p className="head3 text-base md:text-lg">FrontBase is a digital agency that helps businesses build and scale their online presence with innovative web and mobile solutions.</p>
        </div>
        <div className="hidden md:block">
          <img className="tag md:h-200 md:w-100 -mt-10" src={logo} alt="FrontBase Logo" />
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <TextAnimation />
        </div>
      </div>

      <ServiceCom />
      <ChooseUs />

      {/* Why Choose Us Section */}
      
      <Contact />
    </main>

  )
}

export default Home
