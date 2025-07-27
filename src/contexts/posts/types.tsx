import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface PostProviderProps {
    children: ReactNode;
}

export interface User {
    id: string;
    username: string;
    fullName: string;
    avatar: string;
}

export interface posts {
    posts: [
        Post
    ]
    hasMore: boolean;
    totalPosts: number;
}


export interface Post {
    id: string;
    userId: string;
    content: string;
    image: string | null;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    user: User;
    isLiked: boolean;
}

export interface PostsContextType {
    posts: Post[];
    setPosts: Dispatch<SetStateAction<Post[]>>;
    singlePost: Post | null;
    setSinglePost: Dispatch<SetStateAction<Post | null>>;
    hasMore: boolean;
    setHasMore: Dispatch<SetStateAction<boolean>>;
}