import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { MdKeyboardArrowUp } from 'react-icons/md'
import Button from './Button'
import { useLogicStore } from '../stores/useLogicStore'
import { getThemeLS, getTickLS, setActiveDayThemeLS, setThemeLS, setTickLs } from '../lib/localStorage'
import { data } from '../pages/Course'
import { SwiperRef } from 'swiper/react'

interface Props {
    activeIndex: number
    onClickPrev: () => void
    content: any[];
    swiperRef: React.RefObject<SwiperRef>;
}

const LessonNavigatorButtons: React.FC<Props> = ({ activeIndex, onClickPrev, content, swiperRef }) => {
    const { t } = useTranslation()

    // to set main content in left side
    const active = useLogicStore((state) => state.active)
    const setActive = useLogicStore((state) => state.setIsActive)
    // to set color to text
    const theme = useLogicStore((state) => state.theme)
    const setTheme = useLogicStore((state) => state.setTheme)
    // to set tick
    const tick = useLogicStore((state) => state.tick)
    const setTick = useLogicStore((state) => state.setTick)

    // FLS from local storage
    const themeLS = getThemeLS()
    const tickLS = getTickLS()

    const onClickNext = () => {
        // check slide end or not
        if (activeIndex === content.length - 1) {
            setTick([...tick, data[active[0]][active[1]].title])

            // when first open page works if
            if (!tickLS) {
                setTickLs(data[active[0]][active[1]].title + '::')
            } else {
                setTickLs((themeLS + data[active[0]][active[1]].title) + '::')
            }

            setTheme([...theme, data[active[0]][active[1] + 1].title])
            setActive([active[0], active[1] + 1])
            // LS
            themeLS ? setThemeLS(themeLS + data[active[0]][active[1] + 1].title + '::') : setThemeLS(theme[0] + data[active[0]][active[1] + 1].title)
            setActiveDayThemeLS((active[1] + 1).toString())

        } else {
            swiperRef.current?.swiper.slideNext()
        }
    }

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