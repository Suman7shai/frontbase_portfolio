

interface CartProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCart = (props: CartProps) => {
  return (
    <div className="flex flex-grid font-[font-1]">
      <div className="h-70 w-130 m-5 flex flex-col justify-center text-black bg-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 "> 
        <div className="flex items-center gap-4 p-4">
          <div className="h-10 w-10 flex justify-center items-center text-4xl text-[#69c8ff]">
            {props.icon}
          </div>
          <h1 className="text-2xl m-0">{props.title}</h1>
        </div>
        <div className="px-4 pb-4 text-xs">
          <p className="m-0">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCart
