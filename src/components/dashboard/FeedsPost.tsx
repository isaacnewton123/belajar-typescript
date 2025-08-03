import { useFeedsContext } from "@/contexts/feed/useFeedContext"
import { usePost } from "@/hooks/usePost"
import PostContent from "@/components/ui/PostContent"
import CreatePostForm from "@/components/ui/CreatePostForm"
import { useEffect } from "react"
import { useFeed } from "@/hooks/useFeed"
import { useAuthContext } from "@/contexts/auth/useAuthContext"

const FeedsPost = () => {
    const { feeds } = useFeedsContext()
    const { revwieSinglePost, likePost, unlikePost, deletePost } = usePost()
    const { getFeeds } = useFeed()
    const { user } = useAuthContext()

    const feed = feeds?.posts

    useEffect(() => {
        getFeeds(1, 10, true)
    }, [getFeeds])



    return (
        <main className="container mx-auto min-h-screen px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <CreatePostForm />
                    {feed?.map((a) =>
                        <PostContent
                            key={a.id}
                            {...a}
                            onGetPost={() => revwieSinglePost(a.id)}
                            onLike={() => likePost(a.id)}
                            onUnlike={() => unlikePost(a.id)}
                            onDelete={() => deletePost(a.id)}
                            profile={user?.username}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}

export default FeedsPost