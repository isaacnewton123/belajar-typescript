import ImgButton from "./imgButton"
import type { Comment } from "@/services/types"
import { formatTimeAgo } from "../utils/formatDate"

const CommentContent = ({ user: { avatar, fullName, username }, content, createdAt }: Comment) => {

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
                </div>
                <p className="text-sm mt-1">{content}</p>
            </div>
        </div>
    )
}

export default CommentContent