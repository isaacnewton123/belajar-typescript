import { useState } from "react";
import type { CommentsProviderProps } from './types'
import { CommentsContext } from "./useCommentContext";
import type { Comments } from "@/services/types";

export const CommentsProvider = ({ children }: CommentsProviderProps) => {
    const [comments, setComments] = useState<Comments | null>(null)

    const value = {
        comments,
        setComments,
    }

    return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>
}