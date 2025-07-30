import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Headers = ({children}: {children: string} ) => {

    const navigate = useNavigate()

    return (
        <div className="bg-white shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* <!-- Back Button --> */}
                    <a onClick={() => navigate(-1)} className="text-gray-600 hover:bg-gray-100 p-2 rounded-full cursor-pointer">
                        <IoArrowBack className="w-6 h-6" />
                    </a>

                    <h2 className="font-bold text-lg">{children}</h2>

                    {/* <!-- Placeholder for keeping children --> */}
                    <div className="w-8"></div>
                </div>
            </div>
        </div>
    )
}

export default Headers