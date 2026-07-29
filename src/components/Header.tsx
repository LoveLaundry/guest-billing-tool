import Logo from "./ui/Logo";

const Header=()=>{
    return(
        <div className="w-full h-32 flex justify-center items-center gap-8">
            <Logo/>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="text-4xl text-red-600 font-bold font-pacifico">Love Laundry</div>
                <div className="text-sm font-medium border py-1 px-3 rounded-2xl bg-black text-white">Guest Laundry Accounts</div>
            </div>
        </div>
    )
}

export default Header;