import { CiCamera } from "react-icons/ci";
import ImgCover from "./imgConver";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useAuthContext } from "@/contexts/auth/useAuthContext";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { useUser } from "@/hooks/useUser";



const EditProfileForm = ({ onClick }: { onClick: () => void }) => {
    const { user } = useAuthContext()
    const { updateProfile } = useUser()
    const API_BASE_URL = import.meta.env.VITE_API_IMAGE;

    const [fullName, setFullName] = useState<string>(user?.fullName || '')
    const [bio, setBio] = useState<string>(user?.bio || '')
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(
        user?.avatar ? `${API_BASE_URL}/uploads/${user.avatar}` : null
    );
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            const MAX_FILE_SIZE = 5 * 1024 * 1024;

            if (file.size > MAX_FILE_SIZE) {
                toast.error('To Large File Size')
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                return;
            }

            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!fullName.trim()) {
            toast.error("Full name cannot be empty.");
            return;
        }

        const formData = new FormData();

        formData.append('fullName', fullName);
        formData.append('bio', bio);
        if (image) {
            formData.append('avatar', image);
        }
        updateProfile(formData);
    };


    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        onClick={onClick}
                        id="close-edit-modal-button"
                        className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <IoClose className="w-6 h-6 " />
                    </button>
                    <h3 className="text-lg font-semibold">Edit Profile</h3>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 text-sm cursor-pointer">
                    Save
                </button>
            </div>
            {/* <!-- Cover Photo & Avatar Preview --> */}
            <div className="p-4">
                <div className="relative mb-16">
                    <div className="h-40 bg-gray-200 rounded-lg">
                        <ImgCover />
                    </div>
                    <div className="absolute -bottom-12 left-4">
                        <div className="relative">
                            <img
                                id="avatar-preview"
                                src={
                                    imagePreview ||
                                    `https://placehold.co/100x100/E2E8F0/4A5568?text=${user?.fullName?.[0] || ''}`
                                }
                                className="w-24 h-24 rounded-full border-4 border-white bg-gray-200"
                                alt="Preview Avatar"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                id="avatar-upload-button"
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity">
                                <CiCamera className="w-6 h-6 text-white" />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                id="avatar-input"
                                className="hidden"
                                accept="image/*" />
                        </div>
                    </div>
                </div>
                {/* <!-- Input Fields --> */}
                <div className="space-y-4 mt-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                            id="bio"
                            rows={3}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditProfileForm