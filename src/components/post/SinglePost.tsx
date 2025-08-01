
import type { Post } from "@/services/types"
import Comments from "./component/comments"
import PostSingle from "./component/Post"

interface SinglePostProps {
    post: Post;
    postId: string;
}

const SinglePost = ({post, postId}: SinglePostProps) => {

    return (
        <div className="container min-h-screen mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <PostSingle post={post} />
                    <div className="bg-white rounded-lg shadow-sm">
                    <Comments
                        postId={postId}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost