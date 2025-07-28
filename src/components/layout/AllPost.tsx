import { usePostContext } from "@/contexts/posts/usePostContext";
import { usePost } from "@/hooks/usePost";
import PostContent from "../ui/PostContent";
import CreatePostForm from "../ui/CreatePostForm";

const AllPost = () => {
    const { posts } = usePostContext()
    const { getPost, likePost } = usePost()

    const post = posts?.posts

    return (
        <main className="container mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <CreatePostForm />
                    {post?.map((a) =>
                        <PostContent
                            key={a.id}
                            {...a}
                            onGetPost={() => getPost(a.id)}
                            onLike={() => likePost(a.id)}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}

export default AllPost