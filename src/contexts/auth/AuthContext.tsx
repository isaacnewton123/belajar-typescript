import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import type { AuthProviderProps, myjwtpayload, User } from './types';
import { AuthContext } from "./useAuthContext";


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
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
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                } else {
                    setUser(decodedUser as unknown as User)
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
        setUser,
        loading,
        setLoading,
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}