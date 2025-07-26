import type { ReactNode } from "react";


export interface AuthProviderProps {
    children: ReactNode;
}

export interface myjwtpayload {
    exp: number;

}

export interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    fullName: string;
    bio: string;
    avatar: string;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    createdAt: Date;
    updatedAt: Date;
}