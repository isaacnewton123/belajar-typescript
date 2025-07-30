import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { useSearchContext } from "@/contexts/search/useSearchContext";
import InputSearch from "./component/inputSearch";
import EmptyInput from "./component/EmptyInput";
import MissingQuery from "./component/MissingQuery";
import ResultUser from "./component/ResultUser";
import { useUser } from "@/hooks/useUser";

const Search = () => {
    const [q, setQ] = useState<string>('');
    const { search, setSearch } = useSearchContext();
    const { getSearch } = useSearch();
    const { getUserProfile } = useUser()

    useEffect(() => {
        const time = setTimeout(() => {
            if (q) {
                getSearch(q);
            } else {
                setSearch(null);
            }
        }, 500);

        return () => {
            clearTimeout(time);
        };
    }, [q, getSearch, setSearch]);

    const renderContent = () => {
        if (search === null) {
            return <EmptyInput />;
        }

        if (search.users.length === 0) {
            return <MissingQuery query={q} />;
        }

        return (
            <div className="bg-white rounded-lg shadow-sm">
                <div className="divide-y divide-gray-100">
                    {search.users.map((user) => (
                        <ResultUser
                            key={user.id}
                            {...user}
                            onGetUser={() => getUserProfile(user.username)}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="container min-h-screen mx-auto px-4 mt-6">
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <InputSearch
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />

                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Search;