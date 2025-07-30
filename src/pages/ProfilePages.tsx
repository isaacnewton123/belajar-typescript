import ModalEditProfile from "@/components/modal/ModalEditProfile"
import Profile from "@/components/profile/profile/Profile"
import Headers from "@/components/ui/Headers"
import { useState } from "react"

const ProfilePages = () => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpen = () => {
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }
    
    return (
        <div className="bg-gray-100 text-gray-900" >
            <Headers children={"Profile"} />
            <Profile onClick={handleOpen} />
            {
                openModal && (
                    <ModalEditProfile onClick={handleClose} />
                )
            }
        </div>
    )
}

export default ProfilePages