import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import type { AuthProviderProps, myjwtpayload } from "./types";
import type { AuthResponse, UserProfile } from "@/services/types";


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserProfile | null>(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const token: string | null = localStorage.getItem('token')
        if (token) {
            try {
                const decodedUser = jwtDecode<myjwtpayload>(token);
                const isExperied = decodedUser.exp * 1000 < Date.now();
                if (isExperied) {
                    setUser(null)
                } else {
                    setUser(decodedUser as unknown as UserProfile)
                    navigate('/dashboard')
                }
            } catch (error) {
                console.error(error)
                setUser(null)
            }
        }
        setLoading(false)
    }, [navigate])

    const value = {
        user,
        loading,
    }

    return <AuthProvider value={value}>{children}</AuthProvider>
}