import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUserContext } from "@/contexts/user/useUserContext";
import { useUser } from "@/hooks/useUser";
import UserProfile from "@/components/profile/other-profile/UserProfile"; // Komponen UI
import Headers from "@/components/ui/Headers";

const UserProfilePages = () => {
    const { username } = useParams<{ username: string }>();
    const { userProfile } = useUserContext();
    const { getUserProfile } = useUser();

    useEffect(() => {
        if (username) {
            getUserProfile(username);
        }
    }, [username, getUserProfile]);

    if (!userProfile) {
        return;
    }

    return (
        <div className="bg-gray-100 text-gray-900">
            <Headers children={userProfile.username} />
            <UserProfile user={userProfile} /> 
        </div>
    );
};

export default UserProfilePages;