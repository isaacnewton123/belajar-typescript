import { authApi } from "@/services/api";
import { toast } from "react-toastify";
import { useAuthContext } from "@/contexts/auth/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useLoadingContext } from "@/contexts/useLoadingContext";

import type { Credential, UserData } from "@/services/types";


export const useAuth = () => {

    const { setUser } = useAuthContext()
    const { setLoading } = useLoadingContext()

    const navigate = useNavigate()

    const login = async (credential: Credential) => {
        setLoading(true)

        try {
            const response = await authApi.login(credential)

            if (response && response.token && response.user) {
                localStorage.setItem('token', response.token)
                setUser(response.user)
                toast.success('Login Success')
                navigate('/home')
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