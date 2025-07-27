import { createContext, useContext } from "react"
import type { UserContextType } from "./types"


export const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("usePostContexr must be used within an PostProvider")
    }
    return context
}