import HeadersDashboard from "@/components/dashboard/HeadersDashboard"
import AllPost from "@/components/dashboard/AllPost"

const DashboardPages = () => {
    return (
        <body className="bg-gray-100 text-gray-900">
            <HeadersDashboard
                home="text-blue-600"
            />
            <AllPost />
        </body>
    )
}

export default DashboardPages