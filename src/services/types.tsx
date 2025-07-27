

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

export interface UserPost {
    id: string;
    username: string;
    fullName: string;
    avatar: string | null;
}

export interface Post {
    id: string;
    userId: string;
    content: string;
    image: string | null;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    user: UserPost
    isLiked: boolean;
}

export interface Posts {
    posts: Post[];
    hasMore: boolean;
    totalPosts: number;
}

export interface FormPost {
    content: string;
    image: string | null;
}


interface UserComment {
    id: string;
    username: string;
    fullName: string;
    avatar: string | null;
}

export interface Comment {
    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: string;
    user: UserComment;
}


export interface Comments {
    comments: [Comment];
}

interface UserSearch {
    id: string;
    username: string;
    fullName: string;
    avatar: string | null;
    followersCount: number;
}

export interface Search {
    users: [UserSearch];
}

interface PostFeed {
    id: string;
    userId: string;
    content: string;
    image: string | null;
    createdAt: string;
    likesCount: number
    commentsCount: number;
    user: UserComment;
    isLiked:boolean;
}

export interface Feed {
    posts: [PostFeed];
    hasMore: boolean;
    totalPosts: number;
}