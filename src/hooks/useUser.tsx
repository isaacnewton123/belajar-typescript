import { userApi } from "@/services/api";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { useUserContext } from "@/contexts/user/useUserContext";
import { toast } from "react-toastify";
import type { UpdateProfile } from '@/services/types'


export const useUser = () => {

    const { setProfile, setUserProfile } = useUserContext()
    const { setLoading } = useLoadingContext()

    const getProfile = async () => {
        setLoading(true)
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

    const getUserProfile = async (username: string) => {
        setLoading(true)
        setUserProfile(null)
        try {
            const response = await userApi.searchUser(username)

            if (response.username !== username) {
                setUserProfile(null)
            } else {
                setUserProfile(response)
            }

        } catch (error) {
            console.error('cannot get Profile', error)
            toast.error('cannot Get user, please try again later')
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (formData: UpdateProfile) => {
        setLoading(true)
        try {
            const response = await userApi.updatePofile(formData)
            setProfile((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    ...response
                }
            })

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
            setProfile((prev) => {
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

            setProfile((prev) => {
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
