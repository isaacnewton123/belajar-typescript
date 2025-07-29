import HeadersDashboard from "@/components/dashboard/HeadersDashboard"
import Search from "@/components/search/search"

const SearchPages = () => {
    return (
        <div className="bg-gray-100 text-gray-900">
            <HeadersDashboard
                search="text-blue-600"
            />
            <Search />
        </div>
    )
}

export default SearchPages