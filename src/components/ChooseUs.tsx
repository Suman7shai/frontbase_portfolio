import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaCrown, FaMedal } from "react-icons/fa"
import { MdConnectWithoutContact, MdOutlineSecurity } from "react-icons/md"



const ChooseUs = () => {
    const cardsRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const container = cardsRef.current
        if (!container) return

        const cards = container.querySelectorAll<HTMLElement>(".home-card")
        if (!cards.length) return

        // ensure cards take full cell width
        cards.forEach((c) => c.classList.add("w-full"))

        gsap.fromTo(
            cards,
            { y: 30, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.easeOut",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                },
            }
        )
        gsap.fromTo(".head", {
            y: 50,
        }, {
            y: 0,
            duration: 1,
            ease: "power2.easeOut",
            scrollTrigger: {
                trigger: ".head",
                start: "top 90%",
                end: "bottom 90%",
                toggleActions: "play none none reverse",
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill())
            gsap.killTweensOf(cards)
        }
    }, [])

    return (
    <>
            <div className="h-screen w-full mt-12 md:mt-20 bg-white text-black rounded-bl-4xl rounded-br-4xl">
                <div className="head mt-10 max-w-6xl mx-auto px-6 md:px-20 py-6 text-center">
                    <h1 className="text-3xl mt-30 md:text-5xl font-bold text-[#69c8ff]">Why Choose FrontBase?</h1>
                    <p className="mt-4 text-base md:text-lg">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
                </div>
                <div ref={cardsRef} className="w-full mt-15 max-w-full mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                    <div className="home-card p-6 w-full flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-3 text-5xl text-[#69c8ff]"><FaMedal /> </div>
                        <div className="mt-5 mb-5">
                            <h1 className="text-xl font-semibold">Expertise</h1>
                        </div>
                        <div>
                            <p>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
                        </div>
                    </div>

                    <div className="home-card p-6 w-full flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-3 text-5xl text-[#69c8ff]"><MdConnectWithoutContact /></div>
                        <div className="mt-5 mb-5">
                            <h1 className="text-xl font-semibold">Client-Centric Approach</h1>
                        </div>
                        <div>
                            <p>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
                        </div>
                    </div>

                    <div className="home-card p-6 w-full flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-3 text-5xl text-[#69c8ff]"><MdOutlineSecurity /></div>
                        <div className="mt-5 mb-5">
                            <h1 className="text-xl font-semibold">Results-Driven Solution</h1>
                        </div>
                        <div>
                            <p>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
                        </div>
                    </div>

                    <div className="home-card p-6 w-full flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-3 text-5xl text-[#69c8ff]"><FaCrown /></div>
                        <div className="mt-5 mb-5">
                            <h1 className="text-xl font-semibold">Collaborative Partnership</h1>
                        </div>
                        <div>
                            <p>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>

                )
}

                export default ChooseUs
