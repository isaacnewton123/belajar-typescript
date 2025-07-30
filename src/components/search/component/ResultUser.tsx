import ImgButton from "@/components/ui/imgButton"
import type { UserSearch } from "@/services/types"

interface typeSearchUpdate extends UserSearch {
    onGetUser: () => void;
}

const ResultUser = ({ fullName, username, followersCount, avatar, onGetUser }: typeSearchUpdate) => {

    return (
        <div
            className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            onClick={onGetUser}>
            <div className="flex items-center space-x-4">
                <ImgButton profile={{
                    avatar: avatar,
                    fullName: fullName
                }}
                />
                <div>
                    <p className="font-semibold text-gray-800">{fullName}</p>
                    <p className="text-sm text-gray-500">@{username}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        <span className="font-bold text-gray-800">{followersCount}
                        </span>
                        followers
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResultUser