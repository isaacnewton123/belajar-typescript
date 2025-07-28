import { usePostContext } from "@/contexts/posts/usePostContext";
import { usePost } from "@/hooks/usePost";
import PostContent from "../ui/PostContent";

const Post = () => {
    const { posts } = usePostContext()
    const { getPost } = usePost()

    const post = posts?.posts

    return (
        <>
            {post?.map((a) =>
                <PostContent
                    key={a.id}
                    {...a}
                    onClick={() => getPost(a.id)}
                />
            )}
        </>
    )
}

export default Post