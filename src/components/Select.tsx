import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx';

interface Props {
    content: string[];
    defaultValue?: string;
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ content, defaultValue, active, setActive }: Props) => {
    return (
        <Listbox>
            <div className="relative">
                <Listbox.Button className={clsx("border border-[#EDEDED] text-black/50 relative w-full cursor-pointer rounded-lg p-2.5 text-left focus-visible:ring-offset-primary/70 text-[14px] sm:text-sm", {
                    ['!text-black']: active
                })}>
                    {/* <img src="/images/language-icon.svg" alt="" /> */}
                    {active ? active : defaultValue}

                </Listbox.Button>
                <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        className="max-h-60 mt-2 w-full rounded-md bg-white backdrop-blur text-base shadow-lg overflow-scroll ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {content.map((item, i) => (
                            <Listbox.Option
                                key={i}
                                onClick={() => setActive(item)}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 rounded-md text-black/50 ${active && '!text-primary bg-primary/10'}`
                                }
                                value={item}
                            >
                                {({ selected }) => (
                                    <>
                                        <button
                                            className={`px-2.5 truncate text-center ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {item}
                                        </button>

                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default Select