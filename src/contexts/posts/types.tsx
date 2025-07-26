import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { User } from "../auth/types";

export interface AuthProviderProps {
    children: ReactNode;
}

export interface Post {
    _id: string;
    userId: string;
    content: string;
    image: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    user: User;
    isLiked: boolean;
}

export interface PostsContextType {
    posts: Post[];
    setPosts: Dispatch<SetStateAction<Post[]>>;
    singlePost: Post|null;
    setSinglePost: Dispatch<SetStateAction<Post|null>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    hasMore: boolean;
    setHasMore: Dispatch<SetStateAction<boolean>>;
    fetchPost: (pages?: number, limit?: number, reset?: boolean) => Promise<void>
}