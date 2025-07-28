import type { Dispatch, ReactNode, SetStateAction } from "react";
import type {Search} from '@/services/types'

export interface SearchProviderProps {
    children: ReactNode;
}

export interface SearchContextType {
    search: Search | null;
    setSearch: Dispatch<SetStateAction<Search | null>>;

}