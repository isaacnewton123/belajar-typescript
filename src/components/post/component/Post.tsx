import PostContent from "@/components/ui/PostContent"
import { usePost } from "@/hooks/usePost"
import type { Post } from "@/services/types"
import { useAuthContext } from "@/contexts/auth/useAuthContext"


const PostSingle = ({post} : {post: Post}) => {
    const { likePost, unlikePost, deletePost } = usePost()
    const {user} = useAuthContext()

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
                profile={user?.username}
                onDelete={() => deletePost(post.id)}
                />
            )}
        </div>
    )
}

export default PostSingle