import { useSearchContext } from "@/contexts/search/useSearchContext";
import { searchAPI } from "@/services/api";
import { toast } from "react-toastify";

export const useSearch = () => {
    const { setSearch } = useSearchContext()

    const getSearch = async (q: string) => {
        try {
            const response = await searchAPI.searchUser(q)
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