import type { Post } from "@/contexts/posts/types";

export interface AuthResponse {
    token: string;
    user: UserProfile
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


export interface UserProfile {
    id: string;
    username: string;
    fullName: string;
    bio: string;
    avatar: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    createdAt: string;
    isFollowing: boolean;
}


export interface UpdateProfile {
    fullName?: string;
    bio?: string;
    avatar?: string | null;
}

export interface AuthPost {
    id: string;
    userId: string;
    content: string;
    image: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    user: UserProfile;
    isLiked: boolean;
    posts: Post[]
    hashMore: boolean;
}

export interface FormPost {
    content: string;
    image: string | null;
}


export interface Comment {

    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: string;
    user: UserProfile;
}

export interface Comments {
    comments: Comment[]
}

export interface Search {
    users: UserProfile[]
}

export interface Feed {
    posts: AuthPost[];
    hasMore: boolean;
    totalPosts: number;
}