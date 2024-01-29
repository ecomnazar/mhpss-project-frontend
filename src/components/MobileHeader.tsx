import clsx from "clsx";
import React from "react";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";
import { languages } from "../lib/constants/languages";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getUserEmail, removeUser } from "../lib/userData";
import toast from "react-hot-toast";
import { useUserStore } from "../stores/useUserStore";
import Button from "./Button";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const email = getUserEmail()
    const setIsActiveModal = useUserStore((state) => state.setIsModalActive)
    const setIsActiveEditModal = useUserStore((state) => state.setIsEditModalActive)
    const { t } = useTranslation()

    const onChangeMenu = () => {
        setIsOpen(!isOpen)
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsOpen(false)
    }

    const navigateTo = (link: string) => {
        setIsOpen(false)
        navigate(`/${link}`)
    }

    const navigateToCourse = () => {
        setIsOpen(false)
        if (email) {
            navigate('/course')
        } else {
            toast('Please login first!')
            setIsActiveModal()
        }
    }

    const onEditProfile = () => {
        setIsOpen(false)
        setIsActiveEditModal()
    }

    const onLogout = () => {
        setIsOpen(false)
        removeUser()
        navigate('/')
        toast.success('Logout success!')
    }

    const onRegister = () => {
        setIsOpen(false)
        setIsActiveModal()
    }

    return (
        <div>
            <button onClick={onChangeMenu}>
                <img className="w-[25px]" src="/images/menu.svg" alt="" />
            </button>
            <div style={{ touchAction: isOpen ? "none" : "auto" }} className={clsx("fixed transition-all duration-500 p-4 top-0 w-screen h-[100dvh] overflow-scroll bg-white z-[9999] flex flex-col", {
                ['right-0']: isOpen,
                ['right-[-100%]']: !isOpen,
            })}>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <Logo fn={() => setIsOpen(false)} />
                        <button onClick={onChangeMenu}>
                            <CgClose size={32} />
                        </button>
                    </div>
                    <div>
                        <div className="flex flex-col gap-y-4 mt-8">
                            <button onClick={() => navigateTo("about")} className="bg-[#EDEDED] text-left p-4 rounded-md flex items-center justify-between">
                                <p>{t('courseFeaturesBenefits')}</p>
                                <img className="text-md" src="/images/arrow-right.svg" alt="" />
                            </button>
                            <button onClick={navigateToCourse} className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-between">
                                <p>{t('viewCourse')}</p>
                                <img className="text-md" src="/images/arrow-right.svg" alt="" />
                            </button>
                            {email ? <button onClick={onEditProfile} className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-between">
                                <p>{t('profile')}</p>
                                <img className="text-md" src="/images/arrow-right.svg" alt="" />
                            </button> : <button onClick={onRegister} className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-between">
                                <p>{t('register')}</p>
                                <img className="text-md" src="/images/arrow-right.svg" alt="" />
                            </button>}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    {email && <Button title={t('signout')} onClick={onLogout} className="bg-red-400" />}
                    <ul className="ml-auto flex space-x-2">
                        {languages.map((lng) => {
                            return (
                                <li key={lng}><button onClick={() => changeLanguage(lng)} className={clsx("py-2.5 px-4 rounded-md text-sm text-black", {
                                    ['bg-primary text-white']: lng === i18n.language
                                })}>{lng.toUpperCase()}</button></li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default MobileHeader