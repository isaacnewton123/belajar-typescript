import UserProfile from "@/components/profile/other-profile/UserProfile"
import Headers from "@/components/ui/Headers"
import { useUserContext } from "@/contexts/user/useUserContext"

const UserProfilePages = () => {

    const { userProfile } = useUserContext()

    if (!userProfile) {
        return
    }

    return (
        <div className="bg-gray-100 text-gray-900">
            <Headers children={userProfile?.username} />
            <UserProfile />
        </div>
    )
}

export default UserProfilePages