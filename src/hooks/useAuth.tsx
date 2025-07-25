import { authApi } from "@/services/api";
import { toast } from "react-toastify";
import { useAuthContext } from "@/contexts/auth/useAuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import type { Credential, UserData, UserProfile } from "@/services/types";
import type { myjwtpayload } from '@/contexts/auth/types'


export const useAuth = () => {

    const { setUser, setLoading } = useAuthContext()
    const navigate = useNavigate()

    const login = async (credential: Credential) => {
        setLoading(true)

        try {
            const response = await authApi.login(credential)

            if (response && response.token) {
                const decodedData = jwtDecode<myjwtpayload>(response.token)
                setUser(decodedData as unknown as UserProfile)
                toast.success('Login Success')
                navigate('/dashboard')
            } else {
                toast.error('Token Experied , or more')
            }
        } catch (error) {
            console.error('gagal mengambil token', error)
            toast.error('Unsuccess , username or password is wrong')
        } finally {
            setLoading(false)
        }
    }

    const register = async (userData: UserData) => {
        setLoading(true)
        try {
            await authApi.register(userData)
            toast.success('Register Succesfull Please Login')
            navigate('/login')
        } catch (error) {
            console.error('error register', error)
            toast.error('username already axis')
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        toast.info('Logout Success')
    }

    return {
        login,
        register,
        logout,
    }
}