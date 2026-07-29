import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('billBook');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleHover = (tab: string | null) => {
    setHoveredTab(tab);
    alert(`Hovered over ${tab}`);
  }

  return (
    <div className="w-full min-h-full flex gap-1 flex-col flex-grow justify-center items-center">
        <div className="w-full flex flex-1 gap-1">
            <div onPointerEnter={()=>handleHover("billBook")} onPointerLeave={()=>handleHover(null)} className="bg-black cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Bill Book
            </div>
            <div onPointerEnter={()=>handleHover("addBill")} onPointerLeave={()=>handleHover(null)} className="bg-red-500 cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Add a Bill
            </div>
        </div>
        <div className="w-full flex flex-1 gap-1">
            <div onPointerEnter={()=>handleHover("analytics")} onPointerLeave={()=>handleHover(null)} className="bg-green-500 cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Analytics
            </div>
            <div onPointerEnter={()=>handleHover("quotation")} onPointerLeave={()=>handleHover(null)} className="bg-orange-500 cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Quetation
            </div>
        </div>
    </div>
  )
}

export default Dashboard