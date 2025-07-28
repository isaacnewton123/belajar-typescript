import { useState } from "react";
import { SearchContext } from "./useSearchContext";
import type { SearchProviderProps } from "./types";
import type { Search } from '@/services/types'

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [search, setSearch] = useState<Search | null>(null)

    const value = {
        search,
        setSearch,
    }

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}