const PopupBox=({children, onClose}:{children: React.ReactNode; onClose: () => void})=>{
    return(
        <div className="w-[95%] h-[95%] max-w-sm max-h-md flex justify-center items-center border-2 border-black bg-white rounded-lg shadow-lg backdrop-blur-lg relative animate-slideIn">
            <div onClick={onClose} className="absolute top-2 right-2 text-2xl font-bold cursor-pointer">x</div>
            {children}
        </div>
    )
}

export default PopupBox;