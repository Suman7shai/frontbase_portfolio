import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"


const ContactLink = () => {
  return (
    <div className="flex flex-col h-30 w-30 absolute top-10 left-10 ">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub" className="top-4 left-4">
            <div className="h-10 w-10 mt-20 rounded-full bg-black text-white text-6xl flex items-center justify-center hover:bg-[#69c8ff] hover:text-black transition-colors">
              <FaGithub />
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub" className=" top-4 left-4">
            <div className="h-10 w-10 mt-10 rounded-full bg-black text-white text-6xl flex items-center justify-center hover:bg-orange-600 hover:text-black transition-colors">
              <FaSquareInstagram />
            </div>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub" className=" top-4 left-4">
            <div className="h-10 w-10 mt-10 rounded-full bg-black text-[#69c8ff] text-6xl flex items-center justify-center hover:bg-[#69c8ff] hover:text-black transition-colors">
              <FaLinkedin />
            </div>
          </a>
    </div>
    
  )
}

export default ContactLink  
