import {  useState } from "react"
import type { UserProviderProps } from './types'
import { UserContext } from "./useUserContext"
import type { UserProfile } from "@/services/types"

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

    const value =  {
        userProfile,
        setUserProfile
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

} 