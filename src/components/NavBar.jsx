import { MdOutlineMenuOpen } from "react-icons/md";

const NavBar = () => {
    return (
        <div className=" text-white flex items-center justify-between h-24 mx-auto px-4">
            <h1 className="text-xl w-full text-green-500 font-black cursor-pointer">Dummy Site.</h1>
            <ul className="flex hidden uppercase font-semibold cursor-pointer">
                <li className="p-3">Home</li>
                <li className="p-3">Company</li>
                <li className="p-3">Resources</li>
                <li className="p-3">Contact</li>
                <li className="p-3">About</li>
            </ul>
            <div>
                <MdOutlineMenuOpen size={30} className="cursor-pointer" />
            </div>
            <div className="fixed left-0 top-0 w-[60%] uppercase font-semibold cursor-pointer">
                <ul className="pt-23 uppercase font-semibold cursor-pointer">
                    <li className="p-3">Home</li>
                    <li className="p-3">Company</li>
                    <li className="p-3">Resources</li>
                    <li className="p-3">Contact</li>
                    <li className="p-3">About</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
