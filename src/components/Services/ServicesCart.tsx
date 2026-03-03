

interface CartProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCart = (props: CartProps) => {
  return (
    <div className="flex flex-grid font-[font-1]">
      <div className="h-70 w-130 m-5 flex flex-col justify-center text-black bg-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 "> 
        <div className="h-13 w-13 rounded-lg mt-2 ml-2 flex justify-center items-center text-5xl text-[#69c8ff]">
            {props.icon}
        </div>
        <div className="ml-2 mt-5 text-3xl">
            <h1>{props.title}</h1>
        </div>
        <div className="ml-2 text-xs mt-3  ">
            <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCart
