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
    content: any[];
    swiperRef: React.RefObject<SwiperRef>;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const LessonNavigatorButtons: React.FC<Props> = ({ activeIndex, content, swiperRef, setActiveIndex }) => {
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

    const onClickPrev = () => {
        swiperRef.current?.swiper.slidePrev()
    }

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
            swiperRef.current?.swiper.slideTo(0)
            setActiveIndex(0)
        } else {
            swiperRef.current?.swiper.slideNext()
        }
    }

    return (
        <div className="flex items-center justify-between w-full gap-x-4 mt-2 md:mt-0">
            <Button
                className={clsx("rotate-[180deg] w-fit md:min-w-[150px] md:mt-4", {
                    ['invisible']: activeIndex === 0
                })} title={<div className="rotate-[90deg]"><MdKeyboardArrowUp size={27} /></div>
                }
                onClick={onClickPrev}
            />
            <div className="mt-2">{`${activeIndex + 1}/${content.length}`}</div>
            <Button
                className={clsx(" w-fit md:min-w-[150px] md:mt-4")}
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