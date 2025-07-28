import { useSearchContext } from "@/contexts/search/useSearchContext";
import { searchAPI } from "@/services/api";
import { toast } from "react-toastify";

export const useSearch = () => {
    const { setSearch } = useSearchContext()

    const getSearch = async (query: string) => {
        try {
            const response = await searchAPI.searchUser(query)
            setSearch(response)
        } catch (error) {
            console.error('cannot search', error)
            toast.error('cannot search , please try again later')
        }
    }

    return {
        getSearch
    }
}