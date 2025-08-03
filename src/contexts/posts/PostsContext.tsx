import type { PostProviderProps } from "./types";
import { useState } from "react";
import { PostContext } from "./usePostContext";
import type { Post, Posts } from "@/services/types";

export const PostProvider = ({ children }: PostProviderProps) => {
    const [posts, setPosts] = useState<Posts | null>(null)
    const [singlePost, setSinglePost] = useState<Post | null>(null)

    const value = {
        posts,
        setPosts,
        singlePost,
        setSinglePost,
    }

    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}