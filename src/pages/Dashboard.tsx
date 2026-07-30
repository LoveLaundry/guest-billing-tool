import { useState } from "react";
import HoverTabItem from "../components/ui/HoverTabItem";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('billBook');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleHover = (tab: string | null) => {
    setHoveredTab(tab);
    //alert(`Activated ${activeTab}`);
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  }

  return (
    <div className="w-full min-h-full border-2 p-1 flex gap-1 flex-col flex-grow justify-center items-center">
        <div className="w-full flex flex-1 gap-1">
            <div onClick={()=>handleTabClick('billBook')} onPointerEnter={()=>handleHover("billBook")} onPointerLeave={()=>handleHover(null)} className="overflow-hidden relative bg-black cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              {hoveredTab === "billBook" ? null : "Bill Book"}
              {hoveredTab === "billBook" && <HoverTabItem tab={hoveredTab}/>}
            </div>
            <div onClick={()=>handleTabClick('addBill')} onPointerEnter={()=>handleHover("addBill")} onPointerLeave={()=>handleHover(null)} className="overflow-hidden relative bg-red-500 cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              {hoveredTab === "addBill" ? null : "Add Bill"}
              {hoveredTab === "addBill" && <HoverTabItem tab={hoveredTab}/>}
            </div>
        </div>
        <div className="w-full flex flex-1 gap-1">
            <div onClick={()=>handleTabClick('analytics')} onPointerEnter={()=>handleHover("analytics")} onPointerLeave={()=>handleHover(null)} className="overflow-hidden relative bg-green-500 cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              {hoveredTab === "analytics" ? null : "Analytics"}
              {hoveredTab === "analytics" && <HoverTabItem tab={hoveredTab}/>}
            </div>
            <div onClick={()=>handleTabClick('quotation')} onPointerEnter={()=>handleHover("quotation")} onPointerLeave={()=>handleHover(null)} className="overflow-hidden relative bg-orange-500 cursor-pointer w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              {hoveredTab === "quotation" ? null : "Quotation"}
              {hoveredTab === "quotation" && <HoverTabItem tab={hoveredTab}/>}
            </div>
        </div>
    </div>
  )
}

export default Dashboard