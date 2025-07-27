import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProviderProps {
    children: ReactNode;
}

export interface LoadingContextType {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}