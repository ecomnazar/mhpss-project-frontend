import React from 'react'
import Button from './Button'
import clsx from 'clsx'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

interface Props {
    activeIndex: number
    onClickNext: () => void
    onClickPrev: () => void
    content: any[];
}

const LessonNavigatorButtons: React.FC<Props> = ({ activeIndex, onClickNext, onClickPrev, content }) => {
    const { t } = useTranslation()
    return (
        <div className="flex items-center justify-between w-full">
            <Button
                className={clsx("rotate-[180deg] w-full sm:w-fit min-w-[150px] md:mt-4", {
                    ['hidden']: activeIndex === 0
                })} title={<div className="rotate-[90deg]"><MdKeyboardArrowUp size={27} /></div>
                }
                onClick={onClickPrev}
            />
            <Button
                className={clsx("w-full sm:w-fit min-w-[150px] md:mt-4", {
                    ['ml-auto']: activeIndex === 0
                })}
                title={
                    activeIndex === content.length - 1 ? t('next') : <div className="rotate-[90deg]">
                        <MdKeyboardArrowUp size={27} />
                    </div>
                }
                onClick={onClickNext}
            />
        </div>
    )
}

export default LessonNavigatorButtons