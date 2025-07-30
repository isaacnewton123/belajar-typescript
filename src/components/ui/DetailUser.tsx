import type { User, UserProfile } from "@/services/types"
import { IoCalendar } from "react-icons/io5";
import { format } from 'date-fns';
import { useEffect } from "react";


type DetailUserProps = {
    user: User | UserProfile;
    actionButton: React.ReactNode;
};

const DetailUser = ({ user, actionButton }: DetailUserProps) => {

    useEffect(() => {
        console.log(user.createdAt)
    }, [user])

    const API_BASE_URL = import.meta.env.VITE_API_IMAGE ;


    const joinedDate = user.createdAt
        ? `Joined ${format(new Date(user.createdAt), 'MMMM yyyy')}`
        : '';

    return (
        <div className="p-4">
            <div className="flex items-end -mt-16">
                <img src={user?.avatar ? `${API_BASE_URL}/uploads/${user.avatar}` : `https://placehold.co/100x100/E2E8F0/4A5568?text=${user?.fullName?.[0] || ''}`
                } alt="Avatar" className="w-32 h-32 rounded-full border-4 border-white bg-gray-200" />
                <div className="flex-grow flex justify-end">
                    {actionButton}
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-2xl font-bold">{user.fullName}</h1>
                <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
            <p className="mt-2 text-gray-700">{user.bio}</p>
            <div className="mt-4 flex space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <IoCalendar className="w-4 h-4" />
                    <span>{joinedDate}</span>
                </div>
            </div>
            <div className="mt-4 flex space-x-6">
                <div><span className="font-bold">{user.followingCount}</span> <span className="text-gray-500">Following</span></div>
                <div><span className="font-bold">{user.followersCount}</span> <span className="text-gray-500">Followers</span></div>
            </div>
        </div>
    )
}

export default DetailUser