import EditProfileForm from "../ui/editProfileForm"

const ModalEditProfile = ({ onClick }: { onClick: () => void }) => {

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClick();
        }
    };
    return (
        <div
            id="edit-profile-modal"
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
            <EditProfileForm onClick={onClick} />
        </div>
    )
}

export default ModalEditProfile