import clsx from "clsx";
import React from "react";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClickMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={onClickMenu}>
                <img className="w-[25px]" src="/images/menu.svg" alt="" />
            </button>
            <div className={clsx("fixed transition-all duration-1000 p-4 top-0 w-screen h-screen bg-white z-[9999]", {
                ['right-0']: isOpen,
                ['right-[-100%]']: !isOpen,
            })}>
                <div className="flex items-center justify-between">
                    <Logo />
                    <button onClick={onClickMenu}>
                        <CgClose size={32} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader