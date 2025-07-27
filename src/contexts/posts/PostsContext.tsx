import type { PostProviderProps, Post, Posts } from "./types";
import { useEffect, useState } from "react";
import { PostContext } from "./usePostContext";
import { usePost } from "@/hooks/usePost";

export const PostProvider = ({ children }: PostProviderProps) => {
    const [posts, setPosts] = useState<Posts|null>(null)
    const [singlePost, setSinglePost] = useState<Post | null>(null)

    const { fetchPost } = usePost()

    useEffect(() => {
        fetchPost(1, 10, true)
    }, [fetchPost])

    const value = {
        posts,
        setPosts,
        singlePost,
        setSinglePost,
    }

    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}