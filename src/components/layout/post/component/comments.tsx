import CommentContent from "@/components/ui/commentContent"
import CommentForm from "@/components/ui/commentForm"
import { useCommentsContext } from "@/contexts/comment/useCommentContext"

const Comments = ({ postId }: { postId: string }) => {
    const { comments } = useCommentsContext()

    const comment = comments?.comments

    return (
        <div className="bg-white rounded-lg shadow-sm mt-6">
            <CommentForm postId={postId} />
            <div className="divide-y divide-gray-100">
                {comment?.length
                    ? comment.map((a) =>
                        <CommentContent
                            key={a.id}
                            {...a}
                        />)
                    : <p className="p-4 text-sm text-gray-500 text-center">No replies yet. Be the first!</p>
                }

            </div>
        </div>
    )
}

export default Comments