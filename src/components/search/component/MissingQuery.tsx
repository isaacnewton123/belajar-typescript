import { IoAlertCircleOutline } from "react-icons/io5";


const MissingQuery = ({ query }: { query: string }) => {
    return (
        <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
                <IoAlertCircleOutline className="w-16 h-16 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">No results for "{query}"</h3>
            <p className="text-gray-500 mt-2">Try double checking the spelling or using different keywords.</p>
        </div>
    )
}

export default MissingQuery