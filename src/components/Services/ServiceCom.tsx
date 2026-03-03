import ServiceCart from "./ServicesCart"
import { FcFilmReel } from "react-icons/fc"
import { IoStatsChart } from "react-icons/io5"
import { PiPaintBrushFill } from "react-icons/pi"
import { CiMobile3 } from "react-icons/ci"
import { GiBurningEye } from "react-icons/gi"
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2"
import { IoMdFiling } from "react-icons/io"
import { SiCustomink } from "react-icons/si"
import Navigation from "../Navigation"



const Services = () => {
    return (
        <section className="font-[font-1]">
            <div className="text-white bg-gray-950  min-h-screen w-screen font-[font-1] flex flex-col items-center ">
                <Navigation />
                <div className="gap-2 w-full max-w-3xl px-4 flex flex-col items-center py-12 mt-16 md:mt-30 animate">
                    <h1 className="text-4xl md:text-7xl font-bold text-[#69c8ff] mb-5 mt-8 md:mt-30">Our Services</h1>
                    <p className="text-lg pt-6 leading-7 mt-3">
                        FrontBase is a cutting-edge web application designed to streamline and enhance your online
                        experience. Built with modern technologies, it offers a sleek interface and robust
                        functionality to meet the needs of today's users.
                    </p>
                </div>
        <div className="w-full max-w-6xl px-4 mt-12 md:mt-30 animate">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        <ServiceCart
                            icon={<FcFilmReel />}
                            title="Digital Marketing"
                                description="Our digital marketing services help your business reach its target audience effectively through SEO, social media, content marketing, and more, driving growth and engagement."
                        />
                        <ServiceCart
                            icon={<IoStatsChart />}
                            title="Software Development"
                                description="We specialize in custom software development, creating tailored solutions that optimize your business processes and drive innovation."
                        />
                        <ServiceCart
                            icon={<PiPaintBrushFill />}
                            title="Graphics Design"
                                description="Our graphic design services bring your brand to life with visually stunning designs for logos, marketing materials, and digital content that captivate your audience."
                        />
                        <ServiceCart
                            icon={<IoMdFiling />}
                            title="UI/UX Design"
                                description="Our UI/UX design services create intuitive and engaging user experiences that enhance usability and drive user satisfaction."
                        />
                        <ServiceCart
                            icon={<HiOutlineDocumentMagnifyingGlass />}
                            title="SEO Optimization"
                                description="Our SEO optimization services help improve your website's visibility in search engine results, driving more organic traffic to your business."
                        />
                        <ServiceCart
                            icon={<CiMobile3 />}
                            title="Mobile App Development"
                                description="Our mobile app development services create high-performance, user-friendly applications for iOS and Android platforms."
                        />
                        <ServiceCart
                            icon={<GiBurningEye />}
                            title="AI Solutions"
                                description="Our AI solutions leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and deliver intelligent insights for your business."
                        />
                        <ServiceCart
                            icon={<SiCustomink />}
                            title="Custom Software"
                                description="Our custom software development services deliver tailored solutions that optimize your business processes and drive innovation."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
