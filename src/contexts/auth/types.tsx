import type { UserProfile } from "@/services/types";
import type { ReactNode } from "react";


export interface AuthProviderProps {
    children: ReactNode;
}

export interface myjwtpayload {
    exp: number;

}

export interface AuthContextType {
    user: UserProfile | null;
    setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}