import { useState } from "react"
import type { UserProviderProps, User } from './types'
import { UserContext } from "./useUserContext"

export const UserProvider = ({ children }: UserProviderProps) => {
    const [profile, setProfile] = useState<User | null>(null)

    const value = {
        profile,
        setProfile,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

} 