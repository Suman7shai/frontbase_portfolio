import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ServiceCart from "./ServicesCart"
import { IoStatsChart } from "react-icons/io5"
import { PiPaintBrushFill } from "react-icons/pi"
import { CiMobile3 } from "react-icons/ci"
import { GiBurningEye } from "react-icons/gi"
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2"
import { IoMdFiling } from "react-icons/io"
import { SiCustomink } from "react-icons/si"
import Navigation from "../Navigation"
import { MdLocalMovies } from "react-icons/md"



const Services = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const container = containerRef.current
        if (!container) return

        const cards = Array.from(container.querySelectorAll<HTMLDivElement>(".service-card"))
        if (!cards.length) return

        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { y: 40, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })

        gsap.fromTo(".header", {
            y: 20, autoAlpha: 0
        },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".header",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            }
        )


                return() => {
    ScrollTrigger.getAll().forEach((st) => st.kill())
    gsap.killTweensOf(cards)
}
    }, [])
return (
    <section className="font-[font-1]">
        <div className=" text-white bg-gray-950  min-h-screen w-screen font-[font-1] flex flex-col items-center ">
            <Navigation />
            <div className="header w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center py-12 mt-12 animate">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#69c8ff] mb-4">Our Services</h1>
                <p className="max-w-3xl text-center sm:text-center text-base sm:text-lg leading-6 mt-3">
                    FrontBase is a cutting-edge web application designed to streamline and enhance your online
                    experience. Built with modern technologies, it offers a sleek interface and robust
                    functionality to meet the needs of today's users.
                </p>
            </div>
            <div className="max-w-6xl w-full mt-8 px-4 sm:px-6 lg:px-8 animate" ref={containerRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="service-card">
                        <ServiceCart
                            icon={<MdLocalMovies />}
                            title="Digital Marketing"
                            description="Our digital marketing services help your business reach its target audience effectively through SEO, social media, content marketing, and more, driving growth and engagement."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<IoStatsChart />}
                            title="Software Development"
                            description="We specialize in custom software development, creating tailored solutions that optimize your business processes and drive innovation."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<PiPaintBrushFill />}
                            title="Graphics Design"
                            description="Our graphic design services bring your brand to life with visually stunning designs for logos, marketing materials, and digital content that captivate your audience."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<IoMdFiling />}
                            title="UI/UX Design"
                            description="Our UI/UX design services create intuitive and engaging user experiences that enhance usability and drive user satisfaction."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<HiOutlineDocumentMagnifyingGlass />}
                            title="SEO Optimization"
                            description="Our SEO optimization services help improve your website's visibility in search engine results, driving more organic traffic to your business."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<CiMobile3 />}
                            title="Mobile App Development"
                            description="Our mobile app development services create high-performance, user-friendly applications for iOS and Android platforms."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<GiBurningEye />}
                            title="AI Solutions"
                            description="Our AI solutions leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and deliver intelligent insights for your business."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCart
                            icon={<SiCustomink />}
                            title="Custom Software"
                            description="Our custom software development services deliver tailored solutions that optimize your business processes and drive innovation."
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Services
