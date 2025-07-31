import { FollowToggleButton } from "@/components/ui/buttonProfile";
import DetailUser from "@/components/ui/DetailUser";
import ImgCover from "@/components/ui/imgConver";
import { useUser } from "@/hooks/useUser";
import type { UserProfile as UserProfileType } from '@/services/types';

const UserProfile = ({ user }: { user: UserProfileType }) => {

    const { followUser, unfollowUser } = useUser();

    return (
        <div className="container mx-auto min-h-screen px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <div className="bg-white rounded-lg shadow-sm">
                        <ImgCover />
                        <DetailUser
                            user={user}
                            actionButton={
                                <FollowToggleButton
                                    isFollowing={user.isFollowing}
                                    onFollow={() => followUser(user.id)}
                                    onUnfollow={() => unfollowUser(user.id)}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;