import Icon from "./Home/icon"


const ChooseUs = () => {
  return (
    <section>
        <div className="w-full mt-12 md:mt-20 bg-white text-black rounded-bl-4xl rounded-br-4xl">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Why Choose FrontBase?</h1>
          <p className="mt-4 text-base md:text-lg">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
        </div>
        <div className="max-w-8xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 py-8">
          <div className="home-card p-6 h-100 w-75 flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 text-2xl text-[#69c8ff]"><Icon /></div>
            <div className="mt-5 mb-5">
              <h1 className="text-xl font-semibold">Expertise</h1>
            </div>
            <div>
              <p>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>
          </div>

          <div className="home-card p-6 h-100 w-75 flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 text-2xl text-[#69c8ff]"><Icon /></div>
            <div className="mt-5 mb-5">
              <h1 className="text-xl font-semibold">Client-Centric Approach</h1>
            </div>
            <div>
              <p>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
            </div>
          </div>

          <div className="home-card p-6 h-100 w-75 flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 text-2xl text-[#69c8ff]"><Icon /></div>
            <div className="mt-5 mb-5">
              <h1 className="text-xl font-semibold">Results-Driven Solution</h1>
            </div>
            <div>
              <p>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
            </div>
          </div>

          <div className="home-card p-6 h-100 w-75 flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 text-2xl text-[#69c8ff]"><Icon /></div>
            <div className="mt-5 mb-5">
              <h1 className="text-xl font-semibold">Collaborative Partnership</h1>
            </div>
            <div>
              <p>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
