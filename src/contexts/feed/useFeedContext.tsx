import { createContext, useContext } from "react"
import type { FeedsContextType } from "./types"


export const FeedsContext = createContext<FeedsContextType | undefined>(undefined)

export const useFeedsContext = () => {
    const context = useContext(FeedsContext)
    if (!context) {
        throw new Error("useFeedsContext must be used within an FeedsProvider")
    }
    return context
}