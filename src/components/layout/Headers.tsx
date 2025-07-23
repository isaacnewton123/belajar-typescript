
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu, DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu";




const Headers = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold text-blue-600">
                        <a href="#">SosialApp</a>
                    </div>

                    <div className="flex items-center space-x-5">
                        <a className="cursor-pointer text-gray-600 hover:text-blue-600">
                            <AiOutlineHome className="w-6 h-6" />
                        </a>
                        <a className="cursor-pointer text-gray-600 hover:text-blue-600">
                            <IoSearchSharp className="w-6 h-6" />
                        </a>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="relative">
                                    <button id="profile-menu-button">
                                        {/* TODO : SRC from useState */}
                                        <img src='https://placehold.co/40x40/E2E8F0/4A5568?text=U' alt="Avatar Pengguna" className="w-10 h-10 rounded-full cursor-pointer" />
                                    </button>
                                    <div id="profile-menu" className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className=" cursor-pointer">
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600 cursor-pointer">
                                        <SlLogout className="w-3 h-3 text-red-500" /> Log Out
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Headers