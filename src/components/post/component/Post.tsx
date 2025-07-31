import PostContent from "@/components/ui/PostContent"
import { usePostContext } from "@/contexts/posts/usePostContext"
import { usePost } from "@/hooks/usePost"

const Post = () => {
    const { singlePost } = usePostContext()
    const { likePost, unlikePost } = usePost()

    const handleDummyClick = () => {};

    return (
        <div>
            {singlePost && (
                <PostContent
                {...singlePost}
                onLike={() => singlePost.id && likePost(singlePost.id)}
                onUnlike={() => singlePost.id && unlikePost(singlePost.id)}
                onGetPost={handleDummyClick}
                />
            )}
        </div>
    )
}

export default Post