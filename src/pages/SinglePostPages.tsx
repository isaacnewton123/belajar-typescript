import SinglePost from "@/components/post/SinglePost"
import Headers from "@/components/ui/Headers"

const SinglePostPages = () => {
    return (
        <div className="container mx-auto px-4 mt-6">
            <Headers
                children={"Post"}
            />
            <SinglePost />
        </div>
    )
}

export default SinglePostPages