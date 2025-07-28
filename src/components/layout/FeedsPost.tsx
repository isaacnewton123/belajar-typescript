import { useFeedsContext } from "@/contexts/feed/useFeedContext"
import { usePost } from "@/hooks/usePost"
import PostContent from "../ui/PostContent"


const FeedsPost = () => {

    const { feeds } = useFeedsContext()
    const { getPost } = usePost()

    const feed = feeds?.posts

    return (
        <>
            {feed?.map((a) =>
                <PostContent
                    key={a.id}
                    {...a}
                    onClick={() => getPost(a.id)}
                />
            )}
        </>
    )
}

export default FeedsPost