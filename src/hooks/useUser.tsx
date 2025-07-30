import { userApi } from "@/services/api";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { useUserContext } from "@/contexts/user/useUserContext";
import { toast } from "react-toastify";
import { useAuthContext } from "@/contexts/auth/useAuthContext";
import { useNavigate } from "react-router-dom";


export const useUser = () => {

    const { setUserProfile } = useUserContext()
    const { setLoading } = useLoadingContext()
    const {user, setUser } = useAuthContext()

    const navigate = useNavigate()

    const getProfile = async () => {
        setLoading(true)
        try {
            const response = await userApi.getProfile()
            setUser(response)
            navigate('/profile')
        } catch (error) {
            console.error('cannot get profile', error)
            toast.error('cannot get profile , please try again later')
        } finally {
            setLoading(false)
        }
    }

    const getUserProfile = async (username: string) => {
        setLoading(true)
        setUserProfile(null)
        try {
            const response = await userApi.searchUser(username)
            setUserProfile(response)
            navigate(`/user/${username}`)
        } catch (error) {
            console.error('cannot get Profile', error)
            toast.error('cannot Get user, please try again later')
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (formData: FormData) => {
        setLoading(true)
        try {
            const response = await userApi.updateProfile(formData)
            const currentUser = user

            if (!currentUser) {
            toast.error("User Not Found.");
            setLoading(false);
            return;
            }

            const result = {
                ...currentUser,
                ...response
            }
            setUser(result)
            localStorage.setItem('user', JSON.stringify(result));

            toast.success('Successfull Edit profile')
        } catch (error) {
            console.error('cannot edit profile', error)
            toast.error('cannot update profile , please try again later')
        } finally {
            setLoading(false)
        }
    }


    const followUser = async (userId: string) => {
        try {
            await userApi.followUser(userId)
            setUserProfile((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    isFollowing: true,
                    followersCount: prev.isFollowing ? prev.followersCount + 1 : prev.followersCount - 1
                }
            })
            setUser((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    followingCount: prev.followingCount + 1
                }
            })
        } catch (error) {
            console.log('cannot follow User', error)
            toast.error('cannot follow user , please try again later')
        }
    }

    const unfollowUser = async (userId: string) => {
        try {
            await userApi.unfollowUser(userId)
            setUserProfile((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    isFollowing: false,
                    followersCount: prev.isFollowing ? prev.followersCount - 1 : prev.followersCount + 1
                }
            })

            setUser((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    followingCount: prev.followingCount - 1
                }
            })
        } catch (error) {
            console.error('cannot unfollow user', error)
            toast.error('cannot unfollow user , please try again later')
        }
    }

    return {
        getProfile,
        getUserProfile,
        updateProfile,
        followUser,
        unfollowUser
    }
}
