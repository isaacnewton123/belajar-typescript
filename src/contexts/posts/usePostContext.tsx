import { createContext, useContext } from "react"
import type { PostsContextType } from "./types"


export const PostContext = createContext<PostsContextType | undefined>(undefined)

export const useAuthContext = () => {
    const context = useContext(PostContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}