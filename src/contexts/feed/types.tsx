import type { Feeds } from "@/services/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface FeedsProviderProps {
    children: ReactNode;
}

export interface FeedsContextType {
    feeds: Feeds | null;
    setFeeds: Dispatch<SetStateAction<Feeds | null>>;

}