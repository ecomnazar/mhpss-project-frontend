import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import 'swiper/css';
import Button from "../components/Button";
import { MdKeyboardArrowUp } from "react-icons/md";
import React from "react";
import clsx from "clsx";
import { data } from "../pages/Course";
import { useNavigate } from "react-router-dom";
import { useLogicStore } from "../stores/useLogicStore";

const content = [
    "/lesson-images/day-1/1.png",
    "/lesson-images/day-1/2.png",
    "/lesson-images/day-1/1.png"
]

const Day1Theme1 = () => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const finishFLS = localStorage.getItem('finish')


    const navigate = useNavigate()
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
    const themeFLS = localStorage.getItem('theme')
    const tickFLS = localStorage.getItem('tick')

    const onClickNext = () => {
        if (activeIndex === content.length - 1) {
            // if works when all days finished
            if (data.length === active[0] + 1 && data[active[0]].length === active[1] + 1) {
                navigate('/test-page')
            } else {
                setTick([...tick, data[active[0]][active[1]].title])

                // when first open page works if
                if (!tickFLS) {
                    localStorage.setItem('tick', data[active[0]][active[1]].title + '::')
                } else {
                    localStorage.setItem('tick', themeFLS + data[active[0]][active[1]].title) + '::'
                }

                // if works when all lessons of day finished
                if (data[active[0]].length === active[1] + 1) {
                    setTheme([...theme, data[active[0] + 1][0].title])
                    setActive([active[0] + 1, 0])
                    localStorage.setItem('theme', themeFLS + data[active[0] + 1][0].title + '::')
                    localStorage.setItem('activeDay', (active[0] + 1).toString())
                    localStorage.setItem('activeDayTheme', '0')
                } else {
                    themeFLS ?
                        localStorage.setItem('theme', themeFLS + data[active[0]][active[1] + 1].title + '::') :
                        localStorage.setItem('theme', theme[0] + data[active[0]][active[1] + 1].title)
                    setTheme([...theme, data[active[0]][active[1] + 1].title])
                    setActive([active[0], active[1] + 1])
                    localStorage.setItem('activeDayTheme', (active[1] + 1).toString())
                }
            }
        } else {
            swiperRef.current?.swiper.slideNext()
        }
    }

    const onClickPrev = () => {
        swiperRef.current?.swiper.slidePrev()
    }

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                ref={swiperRef}
                onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-full w-full"
            >
                {content.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}><img className="w-full h-full object-cover border border-primary" src={item} /></SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="flex items-center gap-x-2 mt-2">
                {content.map((_, idx) => {
                    return (
                        <div key={idx} className={clsx("w-3 h-3 rounded-full border-[2px] border-primary", {
                            ['bg-primary']: activeIndex === idx
                        })}></div>
                    )
                })}
            </div>
            <div className="flex items-center justify-between w-full">
                <Button
                    className={clsx("rotate-[180deg] w-full sm:w-fit min-w-[150px] md:mt-4", {
                        ['hidden']: activeIndex === 0
                    })} title={
                        finishFLS ? 'get my certificate' : <div className="rotate-[90deg]">
                            <MdKeyboardArrowUp size={27} />
                        </div>
                    }
                    onClick={onClickPrev}
                // onClick={finishFLS ? onGetCertificate : onClickNextButton}
                />
                <Button
                    className={clsx("w-full sm:w-fit min-w-[150px] md:mt-4", {
                        ['ml-auto']: activeIndex === 0
                    })} title={
                        finishFLS ? 'get my certificate' : <div className="rotate-[90deg]">
                            <MdKeyboardArrowUp size={27} />
                        </div>
                    }
                    onClick={onClickNext}
                // onClick={finishFLS ? onGetCertificate : onClickNextButton}
                />
            </div>
        </>
    )
}

export default Day1Theme1