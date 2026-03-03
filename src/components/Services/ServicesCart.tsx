

interface CartProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCart = (props: CartProps) => {
  return (
    <div className="flex flex-col font-[font-1] p-3">
      <div className="w-full min-h-60 flex flex-col items-center text-black bg-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 p-6"> 
        <div className="h-14 w-14 flex justify-center items-center text-4xl text-[#69c8ff] mb-4">
          {props.icon}
        </div>
        <h1 className="text-2xl text-center mb-2">{props.title}</h1>
        <p className="text-xs text-center">{props.description}</p>
      </div>
    </div>
  )
}

export default ServicesCart
