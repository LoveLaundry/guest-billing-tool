const PopupBox=({children, onClose}:{children: React.ReactNode; onClose: () => void})=>{
    return(
        <div className="w-full h-full flex justify-center items-center bg-opacity-30 backdrop-blur-lg absolute top-0 left-0 animate-slideIn">
            <div className="w-[90%] h-[95%] max-w-xl max-h-md p-8 flex flex-col justify-center items-center border-2 border-black bg-white rounded-lg shadow-lg backdrop-blur-lg relative">
                <div onClick={onClose} className="absolute flex items-center top-2 right-2 text-2xl font-bold cursor-pointer border-2 border-black rounded-full w-6 h-6 hover:bg-black hover:text-white transition-colors duration-300">
                    <div className="relative">
                        <div className="absolute w-[2px] h-3 left-[9px] bottom-[-6px] rotate-45 bg-black rounded-sm"></div>
                        <div className="absolute w-[2px] h-3 left-[9px] bottom-[-6px] -rotate-45 bg-black rounded-sm"></div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default PopupBox;