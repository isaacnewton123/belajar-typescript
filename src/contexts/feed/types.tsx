import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface FeedsProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    username: string;
    fullName: string;
    avatar: string | null;
}

interface Feed {
    id: string;
    userId: string;
    content: string;
    image: string | null;
    createdAt: string;
    likesCount: number
    commentsCount: number;
    user: User;
    isLiked: boolean;
}

export interface Feeds {
    posts: Feed[];
    hasMore: boolean;
    totalPosts: number;
}

export interface FeedsContextType {
    feeds: Feeds | null;
    setFeeds: Dispatch<SetStateAction<Feeds | null>>;

}