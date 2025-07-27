import { userApi } from "@/services/api";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { useUserContext } from "@/contexts/user/useUserContext";
import { toast } from "react-toastify";


const useUser = () => {

    const { setProfile } = useUserContext()
    const { setLoading } = useLoadingContext()

    const getProfile = async () => {
        setLoading(true)
        setProfile(null)
        try {
            const response = await userApi.getProfile()
            setProfile(response)
        } catch (error) {
            console.error('cannot get profile', error)
            toast.error('cannot get profile , please try again later')
        } finally {
            setLoading(false)
        }
    }

    const GetUserProfile = async () => {
        setLoading(true)
        setProfile(null)
        try {
            const response = await userApi.getProfile()
            
        }
    }
}
