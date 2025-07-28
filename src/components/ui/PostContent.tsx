import type { Post } from "@/services/types";
import ImgButton from "./imgButton"
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";

interface PostContentProps extends Post {
  onClick: () => void;
}

const PostContent = ({ user: { avatar, fullName }, createdAt, content, image, likesCount, commentsCount, isLiked, onClick }: PostContentProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm mb-6" onClick={onClick}>
            {/* <!-- Header Post --> */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <ImgButton profile={{
                        avatar: avatar,
                        fullName: fullName
                    }} />
                    <div>
                        <p className="font-semibold text-gray-800">{fullName}</p>
                        <p className="text-xs text-gray-500">{createdAt}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full">
                    <i data-feather="more-horizontal"></i>
                </button>
            </div>
            {/* <!-- Content Post --> */}
            <div className="px-4 pb-2">
                <p>{content}</p>
            </div>
            {/* <!-- Image Post --> */}
            {image !== null ? <img src={image} alt="Gambar Postingan" className="w-full h-auto" /> : <></>}
            {/* <!-- action post --> */}
            <div className="p-4 flex justify-between items-center text-gray-500">
                <div className="flex space-x-5">
                    <button className="flex items-center space-x-2 hover:text-red-500">
                        {isLiked === true ? <BiSolidLike className='text-blue-700' /> : <BiLike />}
                        <span>{likesCount} Likes</span>
                    </button>
                    <button className="comment-button flex items-center space-x-2 hover:text-blue-600">
                        <FaRegCommentAlt /> <span>{commentsCount} Comment</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostContent
