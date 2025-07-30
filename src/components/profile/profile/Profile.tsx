import { EditProfileButton } from "@/components/ui/buttonProfile";
import DetailUser from "@/components/ui/DetailUser"
import ImgCover from "@/components/ui/imgConver";
import { useAuthContext } from "@/contexts/auth/useAuthContext"

const Profile = ({ onClick }: { onClick: () => void }) => {
    const { user: myProfile } = useAuthContext();


    return (
        <div className="container mx-auto min-h-screen px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <div className="bg-white rounded-lg shadow-sm">
                        <ImgCover />
                        {myProfile && (
                            <DetailUser
                                user={myProfile}
                                actionButton={
                                    <EditProfileButton
                                        onClick={onClick}
                                    />

                                }
                            />

                        )}
                    </div >
                </div>
            </div>
        </div>

    );
}

export default Profile