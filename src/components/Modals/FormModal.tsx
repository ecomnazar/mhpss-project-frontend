import React from 'react'
import MainModal from './MainModal'
import { useModalStore } from '../../stores/useModalStore'
import SignUpForm from '../SignUpForm'

const FormModal = () => {
    const isOpen = useModalStore((state) => state.isModalActive)
    const setIsModalActive = useModalStore((state) => state.setIsModalActive)
    return (
        <MainModal isOpen={isOpen} setIsOpen={setIsModalActive}>
            <SignUpForm />
        </MainModal>
    )
}

export default FormModal