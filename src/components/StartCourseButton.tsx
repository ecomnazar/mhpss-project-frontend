import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { getUserEmail } from '../lib/userData'
import toast from 'react-hot-toast'
import { useUserStore } from '../stores/useUserStore'

const StartCourseButton = () => {
    const navigate = useNavigate()
    const setIsActiveModal = useUserStore((state) => state.setIsModalActive)
    const isActiveModal = useUserStore((state) => state.isModalActive)

    const email = getUserEmail()

    const handleClick = () => {
        if (email) {
            navigate('/course')
        } else {
            toast('Please login first!')
            setIsActiveModal()
        }
    }

    React.useEffect(() => {

    }, [isActiveModal])

    return (
        <Button onClick={handleClick} className="!bg-primary" title={"Start course"} />
    )
}

export default StartCourseButton