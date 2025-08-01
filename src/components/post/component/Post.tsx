import PostContent from "@/components/ui/PostContent"
import { usePost } from "@/hooks/usePost"
import type { Post } from "@/services/types"


const PostSingle = ({post} : {post: Post}) => {
    const { likePost, unlikePost } = usePost()

    const handleDummyClick = () => {};

    return (
        <div>
            {post && (
                <PostContent
                key={post.id}
                {...post}
                onLike={() => post.id && likePost(post.id)}
                onUnlike={() => post.id && unlikePost(post.id)}
                onGetPost={handleDummyClick}
                />
            )}
        </div>
    )
}

export default PostSingle