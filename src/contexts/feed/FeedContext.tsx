import { useEffect, useState } from "react";
import type { FeedsProviderProps } from "./types";
import { FeedsContext } from "./useFeedContext";
import { useFeed } from "@/hooks/useFeed";
import type { Feeds } from "@/services/types";

export const FeedsProvider = ({ children }: FeedsProviderProps) => {
    const [feeds, setFeeds] = useState<Feeds | null>(null)
    const { getFeeds } = useFeed()

    useEffect(() => {
        getFeeds(1, 10, true)
    }, [getFeeds])

    const value = {
        feeds,
        setFeeds,
    }

    return <FeedsContext.Provider value={value}>{children}</FeedsContext.Provider>
}