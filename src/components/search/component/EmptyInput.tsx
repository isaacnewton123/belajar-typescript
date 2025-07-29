import { FaUserFriends } from "react-icons/fa";


const EmptyInput = () => {
    return (
        <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
                <FaUserFriends className="w-16 h-16 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Find Your Friends</h3>
            <p className="text-gray-500 mt-2">Start typing to find friends, family, or other users.</p>
        </div>
    )
}

export default EmptyInput