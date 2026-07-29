import Logo from "./ui/Logo";

const Header=()=>{
    return(
        <div className="w-full h-40 flex justify-center items-center gap-20">
            <Logo/>
            <div>
                <div className="text-2xl font-bold">Love Laundry</div>
            </div>
        </div>
    )
}

export default Header;