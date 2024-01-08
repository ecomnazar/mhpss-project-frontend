import React from 'react'
import MainModal from './MainModal'
import SignUpForm from '../SignUpForm'
import SignInForm from '../SignInForm'
import { useUserStore } from '../../stores/useUserStore'

const FormModal = () => {
    const isOpen = useUserStore((state) => state.isModalActive)
    const setIsModalActive = useUserStore((state) => state.setIsModalActive)
    const [changeForm, setChangeForm] = React.useState(true)

    const onChangeForm = () => {
        setChangeForm(!changeForm)
    }

    return (
        <MainModal isOpen={isOpen} setIsOpen={setIsModalActive}>
            {changeForm ? <SignUpForm onChangeForm={onChangeForm} /> : <SignInForm onChangeForm={onChangeForm} />}
        </MainModal>
    )
}

export default FormModal