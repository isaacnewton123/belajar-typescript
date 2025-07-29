import { IoSearch } from "react-icons/io5";
import type { ChangeEvent } from "react";

interface InputSearchProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch = ({ value, onChange }: InputSearchProps) => {

    return (
        <div className="mb-6">
            <div className="relative">
                <input
                    type="search"
                    placeholder="Search user..."
                    value={value}
                    onChange={onChange}
                    className="w-full bg-white border border-gray-300 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IoSearch className="w-6 h-6 text-gray-400" />
                </div>
            </div>
        </div>
    );
};

export default InputSearch;