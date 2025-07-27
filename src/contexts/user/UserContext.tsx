import { useState } from "react"
import type { UserProviderProps, User, UserProfile } from './types'
import { UserContext } from "./useUserContext"

export const UserProvider = ({ children }: UserProviderProps) => {
    const [profile, setProfile] = useState<User | null>(null)
    const [userProfile, setUserProfile] = useState<UserProfile | null> (null)

    const value = {
        profile,
        setProfile,
        userProfile,
        setUserProfile
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

} 