import { AiOutlineHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useAuthContext } from "@/contexts/auth/useAuthContext";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu, DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu";
import ImgButton from "../ui/imgButton";


const Headers = () => {

    const { user } = useAuthContext()

    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold text-blue-600">
                        <a>FidoApps</a>
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
                                    <ImgButton profile={{
                                        avatar: user?.avatar,
                                        fullName: user?.fullName
                                    }} />
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