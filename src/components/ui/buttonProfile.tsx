interface FollowButtonProps {
    isFollowing: boolean;
    onFollow: () => void;
    onUnfollow: () => void;
}

export const FollowToggleButton = ({ isFollowing, onFollow, onUnfollow }: FollowButtonProps) => {
    if (isFollowing) {
        return (
            <button
                onClick={onUnfollow}
                className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-300 text-sm"
            >
                Mengikuti
            </button>
        );
    }

    return (
        <button
            onClick={onFollow}
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 text-sm"
        >
            Ikuti
        </button>
    );
};


export const EditProfileButton = ({onClick} : {onClick : () => void}) => {
    return (
        <button
            onClick={onClick}
            id="open-edit-modal-button"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 text-sm cursor-pointer"
        >
            Edit Profil
        </button>
    );
};