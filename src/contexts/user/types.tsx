import type { UserProfile } from "@/services/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserProviderProps {
    children: ReactNode;
}

export interface UserContextType {

    userProfile: UserProfile | null;
    setUserProfile: Dispatch<SetStateAction<UserProfile | null>>;

}