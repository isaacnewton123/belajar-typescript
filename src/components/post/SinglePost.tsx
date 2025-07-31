import { useEffect } from "react"
import { useComment } from "@/hooks/useComment"
import Post from "./component/Post"
import Comments from "./component/comments"
import { useParams } from "react-router-dom"
import { usePost } from "@/hooks/usePost"

const SinglePost = () => {

    const { postId } = useParams<{ postId: string }>()
    const { getPost } = usePost()
    const { getComments } = useComment()

    useEffect(() => {
        if (postId) {
            getPost(postId)
            getComments(postId)
            
        }
    }, [postId, getComments, getPost])

    if (!postId) {
        return null;
    }

    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <Post />
                    <div className="bg-white rounded-lg shadow-sm">
                    <Comments
                        postId={postId}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost