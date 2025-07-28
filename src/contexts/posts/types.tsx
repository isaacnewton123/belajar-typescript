import type { Post, Posts } from "@/services/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface PostProviderProps {
    children: ReactNode;
}

export interface PostsContextType {
    posts: Posts | null;
    setPosts: Dispatch<SetStateAction<Posts | null>>;
    singlePost: Post | null;
    setSinglePost: Dispatch<SetStateAction<Post | null>>;
}