import type { UserProfile } from "@/services/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface AuthProviderProps {
    children: ReactNode;
}

export interface Post {
    id: string;
    userId: string;
    content: string;
    image: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    user: UserProfile;
    isLiked: boolean;
}

export interface PostsContextType {
    posts: Post[];
    setPosts: Dispatch<SetStateAction<Post[]>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    hasMore: boolean;
    setHasMore: Dispatch<SetStateAction<boolean>>;
    fetchPost: (pages?: number, limit?: number, reset?: boolean) => Promise<void>
}