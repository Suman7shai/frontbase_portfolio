import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useLocation } from "react-router-dom"
import  gsap  from "gsap"



const PageAnimation = (props: { children: React.ReactNode }) => {

    const currentPath = useLocation().pathname
    const stairParentRef = useRef<HTMLDivElement |null>(null)
    const pageRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
  
      const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
          display:'block'
         })
        tl.from('.stair', {
          height : 0,
          stagger :{
            amount:-0.2
          }
         })
         tl.to('.stair', {
          y:'100%',
          stagger :{
            amount:-0.2
          }
         })
         tl.to(stairParentRef.current, {
          display:'none'
         })
        tl.to('.stair', {
          y:'0%',
         })
        
        gsap.from(pageRef.current, {
         opacity:0,
         delay:1.3,
         duration:0.5,
         clearProps:"transform",
        })
      }, [currentPath])
  return (
    <div className="bg-black overflow-x-hidden">
    <div ref={stairParentRef} className="h-screen w-full fixed z-50">
      <div className="h-full w-full flex ">
        <div className="stair h-full w-1/5 bg-white"></div>
        <div className="stair h-full w-1/5 bg-white"></div>
        <div className="stair h-full w-1/5 bg-white"></div>
        <div className="stair h-full w-1/5 bg-white"></div>
        <div className="stair h-full w-1/5 bg-white"></div>
      </div>
    </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default PageAnimation
