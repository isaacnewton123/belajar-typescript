import { createContext, useContext } from "react"
import type { CommentContextType } from "./types"


export const CommentsContext = createContext<CommentContextType | undefined>(undefined)

export const useCommentsContext = () => {
    const context = useContext(CommentsContext)
    if (!context) {
        throw new Error("useCommetsContexr must be used within an CommentsProvider")
    }
    return context
}