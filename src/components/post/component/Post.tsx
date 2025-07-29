import PostContent from "@/components/ui/PostContent"
import { usePostContext } from "@/contexts/posts/usePostContext"
import { usePost } from "@/hooks/usePost"

const Post = () => {
    const { singlePost } = usePostContext()
    const { likePost } = usePost()

    const handleDummyClick = () => {};

    return (
        <div className="bg-white rounded-lg shadow-sm">
            {singlePost && (
                <PostContent
                {...singlePost}
                onLike={() => singlePost.id && likePost(singlePost.id)}
                onGetPost={handleDummyClick}
                />
            )}
        </div>
    )
}

export default Post