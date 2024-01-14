import { Listbox, Popover, Transition } from '@headlessui/react'
import React from 'react'
import Button from './Button'
import { languages } from '../lib/constants/languages'
import { useTranslation } from 'react-i18next'
import { getUserEmail, getUserFullname, getUserGender, getUserRegion, removeUser } from '../lib/userData'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useUserStore } from '../stores/useUserStore'

const DesktopHeader = () => {
    const { i18n } = useTranslation()
    const fullname = getUserFullname()
    const email = getUserEmail()
    const gender = getUserGender()
    const region = getUserRegion()
    const navigate = useNavigate()
    const setIsActiveModal = useUserStore((state) => state.setIsModalActive)
    const setIsActiveEditModal = useUserStore((state) => state.setIsEditModalActive)
    const registerLoading = useUserStore((state) => state.registerLoading)
    const loginLoading = useUserStore((state) => state.loginLoading)


    const onChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    const onClickProfile = () => {
        if (fullname === null || fullname === undefined) {
            setIsActiveModal()
            return
        }
        navigate('/profile')
    }

    const onLogout = () => {
        removeUser()
        navigate('/')
        toast.success('Logout success!')
    }

    const onEditProfile = () => {
        setIsActiveEditModal()
    }

    React.useEffect(() => {
        console.log('ih');

    }, [registerLoading, loginLoading])

    return (
        <div className='flex items-center gap-x-8'>
            <Link to={'/about'} className='text-primary hidden sm:block'>Course features & benefits</Link>
            <Button title={"View course"} />
            <div className="">
                <Listbox>
                    <div className="relative">
                        <Listbox.Button className="relative w-full cursor-pointer rounded-lg p-3 text-left focus-visible:ring-offset-primary/70 sm:text-sm">
                            <img src="/images/language-icon.svg" alt="" />
                        </Listbox.Button>
                        <Transition
                            as={React.Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="absolute max-h-60 w-full rounded-md bg-primary/50 backdrop-blur text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">

                                {languages.map((lng, i) => (
                                    <Listbox.Option
                                        key={i}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 text-white rounded-md ${active && 'bg-primary/70'}`
                                        }
                                        onClick={() => onChangeLanguage(lng)}
                                        value={lng}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <button
                                                    className={`block mx-auto truncate text-center ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {lng.toUpperCase()}
                                                </button>

                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>

            {/*  */}

            {fullname ? <Popover className={'relative mt-[0px] ml-0.5'}>
                <Popover.Button className={'px-[13px] py-[12px] rounded-md'}>
                    <img src="/images/profile.svg" alt="" />
                </Popover.Button>
                <Popover.Panel className={'absolute flex flex-col space-y-6 right-0 z-10 top-16 w-72 p-6 origin-top-right rounded-sm bg-white text-black shadow-lg ring-1 ring-black/5'}>
                    <h2 className="text-md">{fullname}</h2>
                    <div className="flex items-center space-x-2">
                        <img className="w-4" src="/images/email.svg" alt="" />
                        <p className="text-[#64748B] text-sm">{email}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img className="w-4" src="/images/location.svg" alt="" />
                        <p className="text-[#64748B] text-sm">{region}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img className="w-4" src="/images/gender.svg" alt="" />
                        <p className="text-[#64748B] text-sm">{gender}</p>
                    </div>

                    <hr className="bg-[#64748B]" />

                    <button onClick={onEditProfile} className="flex items-center space-x-2">
                        <img className="w-4" src="/images/editprofile.svg" alt="" />
                        <p className="text-black text-sm">Edit profile</p>
                    </button>

                    <button onClick={onLogout} className="flex items-center space-x-2">
                        <img className="w-[13px] text-red-600" src="/images/signout.svg" alt="" />
                        <p className="text-red-600 text-sm">Sign out</p>
                    </button>
                </Popover.Panel>
            </Popover> : <button onClick={onClickProfile} className="py-3 px-3.5 rounded-lg"><img src="/images/profile.svg" alt="" /></button>}
        </div>
    )
}

export default DesktopHeader