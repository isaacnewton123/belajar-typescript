import { useState } from "react";
import { SearchContext } from "./useSearchContext";
import type { Search,  SearchProviderProps } from "./types";

export const SearchProvider = ({children}: SearchProviderProps) => {
    const [search, setSearch] = useState<Search | null>(null)

    const value = {
        search,
        setSearch,
    }

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}