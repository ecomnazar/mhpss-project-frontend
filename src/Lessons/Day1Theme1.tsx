import React from "react";
import clsx from "clsx";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import LessonNavigatorButtons from "../components/LessonNavigatorButtons";
import i18n from '../i18n';
import 'swiper/css';

const content = [
    "/lesson-images/day-1/1",
    "/lesson-images/day-1/2",
]

const Day1Theme1 = () => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const currentLanguage = i18n.language

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
                        <SwiperSlide key={idx}><img className="w-full h-full object-cover border border-primary" src={`${item}-${currentLanguage}.png`} /></SwiperSlide>
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
            <LessonNavigatorButtons activeIndex={activeIndex} swiperRef={swiperRef} onClickPrev={onClickPrev} content={content} />
        </>
    )
}

export default Day1Theme1