import SinglePost from "@/components/post/SinglePost"
import Headers from "@/components/ui/Headers"
import { useComment } from "@/hooks/useComment"
import { usePost } from "@/hooks/usePost"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { usePostContext } from "@/contexts/posts/usePostContext"

const SinglePostPages = () => {

    const { postId } = useParams<{ postId: string }>()
    const { getPost } = usePost()
    const { singlePost } = usePostContext()
    const { getComments } = useComment()

    useEffect(() => {
        const fetchData = async () => {
            if (postId) {
                await Promise.all([
                    getPost(postId),
                    getComments(postId)
                ]);
            }
        };
        fetchData();
    }, [postId, getComments, getPost]);

    if (!postId) {
        return null;
    }

    if (!singlePost) {
        return null
    }

    return (
        <div
            className="bg-gray-100 text-gray-900">
            <Headers
                children={"Post"}
            />
            <SinglePost
                post={singlePost}
                postId={postId} />
        </div>
    )
}

export default SinglePostPages