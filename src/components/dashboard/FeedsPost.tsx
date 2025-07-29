import { useFeedsContext } from "@/contexts/feed/useFeedContext"
import { usePost } from "@/hooks/usePost"
import PostContent from "@/components/ui/PostContent"
import CreatePostForm from "@/components/ui/CreatePostForm"

const FeedsPost = () => {
    const { feeds } = useFeedsContext()
    const { getPost, likePost } = usePost()

    const feed = feeds?.posts

    return (
        <main className="container mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <CreatePostForm />
                    {feed?.map((a) =>
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

export default FeedsPost