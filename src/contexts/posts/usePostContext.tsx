import { createContext, useContext } from "react"
import type { PostsContextType } from "./types"


export const PostContext = createContext<PostsContextType | undefined>(undefined)

export const usePostContext = () => {
    const context = useContext(PostContext)
    if (!context) {
        throw new Error("usePostContexr must be used within an PostProvider")
    }
    return context
}