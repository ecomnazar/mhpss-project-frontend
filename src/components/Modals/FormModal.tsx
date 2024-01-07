import React from 'react'
import MainModal from './MainModal'
import { useModalStore } from '../../stores/useModalStore'
import SignUpForm from '../SignUpForm'
import SignInForm from '../SignInForm'

const FormModal = () => {
    const isOpen = useModalStore((state) => state.isModalActive)
    const setIsModalActive = useModalStore((state) => state.setIsModalActive)
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