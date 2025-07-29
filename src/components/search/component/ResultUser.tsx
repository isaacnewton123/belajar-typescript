import ImgButton from "@/components/ui/imgButton"
import type { UserSearch } from "@/services/types"

const ResultUser = ({ fullName, username, followersCount, avatar }: UserSearch) => {

    return (
        <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
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
            <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700">
                Follow
            </button>
        </div>
    )
}

export default ResultUser