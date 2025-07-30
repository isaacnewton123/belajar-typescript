import FeedsPost from "@/components/dashboard/FeedsPost"
import HeadersDashboard from "@/components/dashboard/HeadersDashboard"

const FeedsPages = () => {
    return (
        <div className="bg-gray-100 text-gray-900">
            <HeadersDashboard
                feeds="text-blue-600"
            />
            <FeedsPost />
        </div>
    )
}

export default FeedsPages