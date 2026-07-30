const PopupBox=({children, onClose}:{children: React.ReactNode; onClose: () => void})=>{
    return(
        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-lg absolute top-0 left-0 animate-slideIn">
            <div className="w-[90%] h-[90%] max-w-sm max-h-md flex justify-center items-center border-2 border-black bg-white rounded-lg shadow-lg backdrop-blur-lg relative">
                <div onClick={onClose} className="absolute top-2 right-2 text-2xl font-bold cursor-pointer">x</div>
                {children}
            </div>
        </div>
    )
}

export default PopupBox;