import React from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import LessonNavigatorButtons from "../components/LessonNavigatorButtons";
import i18n from '../i18n';
import 'swiper/css';

const pathToImage = "/lesson-images/day-1/session-1"
const lengthOfImages = Array.from({ length: 32 })

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
                {lengthOfImages.map((_, idx) => {
                    return (
                        <SwiperSlide key={idx}><img className="w-full h-full object-cover border border-primary" src={`${pathToImage}/${currentLanguage}/${idx + 1}.png`} /></SwiperSlide>
                    )
                })}
            </Swiper>
            <LessonNavigatorButtons activeIndex={activeIndex} swiperRef={swiperRef} onClickPrev={onClickPrev} content={lengthOfImages} />
        </>
    )
}

export default Day1Theme1