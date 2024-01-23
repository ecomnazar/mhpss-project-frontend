import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useUserStore } from '../../stores/useUserStore';

interface Props {
    isOpen: boolean;
    setIsOpen: () => void;
    children: React.ReactNode;
}

const MainModal = ({ isOpen, children }: Props) => {
    const setIsModalDisable = useUserStore((state) => state.setIsModalDisable)
    const setIsEditModalDisable = useUserStore((state) => state.setIsEditModalDisable)


    const closeModal = () => {
        // setIsOpen()
        setIsModalDisable()
        setIsEditModalDisable()
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-white/20 backdrop-blur" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MainModal