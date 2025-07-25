import { postAPI } from "@/services/api";
import { toast } from "react-toastify";
import type { AuthProviderProps, Post } from "./types";
import { useEffect, useState } from "react";
import { PostContext } from "./usePostContext";

export const PostProvider = ({ children }: AuthProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)


    const fetchPost = async (pages = 1, limit = 10, reset = false) => {
        try {
            setLoading(true)
            const response = await postAPI.getAllPost(pages, limit)
            const { posts: newPost, hashMore: moreAvailable } = response;

            if (reset) {
                setPosts(newPost)
            } else {
                setPosts((prev) => [...prev, ...newPost])
            }

            setHasMore(moreAvailable)
        } catch (error) {
            console.error("Failed to fetch posts", error)
            toast.error("Failed to fetch posts")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPost(1, 10, true)
    }, [])

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        hasMore,
        setHasMore,
        fetchPost
    }

    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}