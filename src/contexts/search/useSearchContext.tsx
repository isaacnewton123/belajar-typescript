import { createContext, useContext } from "react";
import type { SearchContextType } from "./types";

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const useSearchContext = () => {
    const context = useContext(SearchContext)
    if (!context) {
        throw new Error('useSearchContext must be used within an SearchProvider')
    }

    return context
} 