import { useTranslation } from "react-i18next"
import Button from "../components/Button"
import React from "react"
import { Listbox, Transition } from "@headlessui/react"
import { languages } from "../lib/constants/languages"
import { useModalStore } from "../stores/useModalStore"

const Header = () => {
  const { t, i18n } = useTranslation()
  const setIsActiveModal = useModalStore((state) => state.setIsModalActive)

  const onChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const onClickProfile = () => {
    setIsActiveModal()
  }

  return (
    <header className='container mx-auto px-4 py-2 flex items-center justify-between'>
      <img className='w-[40px]' src="/images/undplogo.png" alt="" />
      <h1>{t('hi')}</h1>
      <div className='flex items-center gap-x-8'>
        <h2 className='text-primary'>Course features & benefits</h2>
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
                  onChange={() => console.log('asd')}
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
        <button onClick={onClickProfile} className="py-3 px-3.5 rounded-lg"><img src="/images/profile.svg" alt="" /></button>
      </div>
    </header>
  )
}

export default Header