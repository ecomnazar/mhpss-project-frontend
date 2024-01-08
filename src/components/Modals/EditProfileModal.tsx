import MainModal from './MainModal'
import { useUserStore } from '../../stores/useUserStore'
import EditProfileForm from '../EditProfileForm'

const EditProfileModal = () => {
    const isOpen = useUserStore((state) => state.isEditModalActive)
    const setIsModalActive = useUserStore((state) => state.setIsEditModalActive)

    return (
        <MainModal isOpen={isOpen} setIsOpen={setIsModalActive}>
            <EditProfileForm />
        </MainModal>
    )
}

export default EditProfileModal