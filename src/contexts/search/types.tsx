import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface SearchProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    username: string;
    fullName: string;
    avatar: string | null;
    followersCount: number;
}

export interface Search {
    users: User[];
}

export interface SearchContextType {
    search: Search | null;
    setSearch: Dispatch<SetStateAction<Search | null>>;

}