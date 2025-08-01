import { useState, type FormEvent } from "react"
import ImgButton from "./imgButton"
import { useComment } from "@/hooks/useComment"
import { useAuthContext } from "@/contexts/auth/useAuthContext"
import type { CreateComment } from "@/services/types"

const CommentForm = ({ postId }: { postId: string }) => {
    const [content, setContent] = useState<string>('')

    const { user } = useAuthContext()
    const { createComment } = useComment()


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!content.trim()) return;

        const result: CreateComment = {
            content: content
        }
        createComment(postId, result)
        setContent('')
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
                <ImgButton 
                    profile={{
                    avatar: user?.avatar,
                    fullName: user?.fullName
                }} />
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Post your reply!"
                        className="w-full bg-gray-100 border border-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50"
                    disabled={!content.trim()}
                >
                    Reply
                </button>
            </div>
        </form>
    )
}

export default CommentForm