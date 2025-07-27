import type { Post } from "@/contexts/posts/types";


export interface User {
    id: string;
    username: string;
    email: string;
    fullName: string;
    bio: string | null;
    avatar: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    createdAt: string;
}


export interface AuthResponse {
    token: string;
    user: User
}

export interface UserData {
    username: string;
    email: string;
    password: string;
    fullName: string;
}


export interface Credential {
    email: string;
    password: string;
}


export interface GetUserProfile {
    id: string;
    username: string;
    fullName: string;
    bio: string | null;
    avatar: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    createdAt: string;
}

export interface FollowUser {
    id: string;
    username: string;
    fullName: string;
    bio: string | null;
    avatar: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    createdAt: string;
    isFollowing: boolean;
}

export interface UpdateProfile {
    id: string;
    username?: string;
    fullName?: string;
    bio?: string | null;
    avatar?: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
}

export interface AuthPost {
    id: object;
    userId: string;
    content: string;
    image: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    user: FollowUser;
    isLiked: boolean;
    posts: Post[]
    hashMore: boolean;
}

export interface FormPost {
    content: string;
    image: string | null;
}


export interface Comment {

    id: object;
    postId: string;
    userId: string;
    content: string;
    createdAt: string;
    user: FollowUser;
}

export interface Comments {
    comments: Comment[]
}

export interface Search {
    users: FollowUser[]
}

export interface Feed {
    posts: AuthPost[];
    hasMore: boolean;
    totalPosts: number;
}