import type { User } from "@/services/types";
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