import type { PostProviderProps, Post } from "./types";
import { useEffect, useState } from "react";
import { PostContext } from "./usePostContext";
import { usePost } from "@/hooks/usePost";

export const PostProvider = ({ children }: PostProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [singlePost, setSinglePost] = useState<Post|null>(null)
    const [hasMore, setHasMore] = useState(false)

    const {fetchPost} = usePost()

    useEffect(() => {
        fetchPost(1, 10, true)
    }, [fetchPost])

    const value = {
        posts,
        setPosts,
        singlePost,
        setSinglePost,
        hasMore,
        setHasMore,
    }

    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}