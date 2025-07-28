type ProfileProps = {
    profile: {
        avatar?: string | null;
        fullName?: string;
    }
}

const ImgButton = ({ profile }: ProfileProps) => {


    return (
        <button>
            <img src={`${profile?.avatar !== null ? profile?.avatar : `https://placehold.co/40x40/8B0000/FFFF?text=${profile?.fullName?.[0] || 'noName'}`}`} className="w-10 h-10 rounded-full cursor-pointer" />
        </button>
    )
}

export default ImgButton