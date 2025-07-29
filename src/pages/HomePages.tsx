import HeadersDashboard from "@/components/layout/dashboard/HeadersDashboard"
import AllPost from "@/components/layout/dashboard/AllPost"

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