type ProfileProps = {
    profile?: {
        avatar?: string | null;
        fullName?: string | null;
    }

}

const ImgButton = ({ profile }: ProfileProps) => {

    const API_BASE_URL = import.meta.env.VITE_API_IMAGE;

    const avatarUrl = `${API_BASE_URL}/uploads/${profile?.avatar}`;
    const initial = profile?.fullName?.[0] || '';
    const placeholderUrl = `https://placehold.co/40x40/E2E8F0/4A5568?text=${initial}`;

    return (
        <button>
            <img
                src={profile?.avatar ? avatarUrl : placeholderUrl}
                className="w-10 h-10 rounded-full cursor-pointer"
                alt={profile?.fullName || 'User Avatar'}
            />
        </button>
    )
}

export default ImgButton;