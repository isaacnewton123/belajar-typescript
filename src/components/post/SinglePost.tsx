import { useEffect } from "react"
import { useComment } from "@/hooks/useComment"
import Post from "./component/Post"
import Comments from "./component/comments"
import { useParams } from "react-router-dom"

const SinglePost = () => {

    const { postId } = useParams<{ postId: string }>()

    const { getComments } = useComment()

    useEffect(() => {

        if (postId) {
            getComments(postId)
        }

    }, [postId, getComments])

    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <Post />
                    {postId && (
                        <Comments
                            postId={postId}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SinglePost