import { usePostContext } from "@/contexts/posts/usePostContext";
import { usePost } from "@/hooks/usePost";
import PostContent from "@/components/ui/PostContent";
import CreatePostForm from "@/components/ui/CreatePostForm";
import { useEffect } from "react";

const AllPost = () => {
    const { posts } = usePostContext()
    const { fetchPost, revwieSinglePost, likePost, unlikePost } = usePost()

    const post = posts?.posts

    useEffect(() => {
        fetchPost(1, 10, true);
    }, [fetchPost]);

    return (
        <main className="container min-h-screen mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <CreatePostForm />
                    {
                    post?.map((a) =>
                        <PostContent
                            key={a.id}
                            {...a}
                            onGetPost={() => revwieSinglePost(a.id)}
                            onLike={() => likePost(a.id)}
                            onUnlike={() => unlikePost(a.id)}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}

export default AllPost