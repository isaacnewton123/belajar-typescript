import { useState } from "react";
import type { CommentsData, CommentsProviderProps } from './types'
import { CommentsContext } from "./useCommentContext";

export const CommentsProvider = ({ children }: CommentsProviderProps) => {
    const [comments, setComments] = useState<CommentsData | null>(null)

    const value = {
        comments,
        setComments,
    }

    return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>
}