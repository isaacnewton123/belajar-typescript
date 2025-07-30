import {  useState } from "react";
import type { FeedsProviderProps } from "./types";
import { FeedsContext } from "./useFeedContext";
import type { Feeds } from "@/services/types";

export const FeedsProvider = ({ children }: FeedsProviderProps) => {
    const [feeds, setFeeds] = useState<Feeds | null>(null)
    
    const value = {
        feeds,
        setFeeds,
    }

    return <FeedsContext.Provider value={value}>{children}</FeedsContext.Provider>
}