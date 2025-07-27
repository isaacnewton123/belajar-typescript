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
}

export interface User {
    id: string;
    username: string;
    email: string;
    fullName: string;
    bio: string;
    avatar: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
}