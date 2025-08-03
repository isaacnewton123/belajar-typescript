import ImgButton from "./imgButton"
import type { Comment } from "@/services/types"
import { formatTimeAgo } from "../utils/formatDate"
import { IoIosMore } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { MdDelete } from "react-icons/md";

interface CommentContentProps extends Comment {
    profile?: string
    onDelete: () => void

}


const CommentContent = ({ user: { avatar, fullName, username }, content, createdAt, profile, onDelete }: CommentContentProps) => {

    const date = formatTimeAgo(createdAt)

    return (
        <div className="p-4 flex items-start space-x-3">
            <ImgButton profile={{
                avatar: avatar,
                fullName: fullName
            }}
            />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold text-sm">{fullName}</p>
                    <p className="text-xs text-gray-500">@{username} · {date}</p>
                    {username === profile ?
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full cursor-pointer">
                                <IoIosMore className="w-6 h-6" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-35" align="start">
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={onDelete} className="text-red-600 cursor-pointer">
                                    <MdDelete className="w-3 h-3 text-red-500" /> Delete
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    : <></>
                }
                </div>
                
                <p className="text-sm mt-1">{content}</p>
            </div>
        </div>
    )
}

export default CommentContent