import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FollowToggleButton } from "@/components/ui/buttonProfile";
import DetailUser from "@/components/ui/DetailUser";
import { useUserContext } from "@/contexts/user/useUserContext";
import { useUser } from "@/hooks/useUser";

const UserProfile = () => {
    const { username } = useParams<{ username: string }>();
    const { userProfile } = useUserContext();
    const { getUserProfile, followUser, unfollowUser } = useUser();

    useEffect(() => {
        if (username) {
            getUserProfile(username);
        }
    }, [username, getUserProfile]);

    if (!userProfile) {
        return ;
    }

    return (
        <div>
            <DetailUser
                user={userProfile}
                actionButton={
                    <FollowToggleButton
                        isFollowing={userProfile.isFollowing}
                        onFollow={() => followUser(userProfile.id)}
                        onUnfollow={() => unfollowUser(userProfile.id)}
                    />
                }
            />
        </div>
    );
};

export default UserProfile;