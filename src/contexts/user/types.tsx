import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserProviderProps {
    children: ReactNode;
}

export interface User {
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

export interface UserProfile {
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


export interface UserContextType {
    profile: User | null;
    setProfile: Dispatch<SetStateAction<User | null>>;
    userProfile: UserProfile | null;
    setUserProfile: Dispatch<SetStateAction<UserProfile | null>>;

}