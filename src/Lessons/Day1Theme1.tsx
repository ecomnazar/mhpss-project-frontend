import React from "react";
import { SwiperRef } from "swiper/react"
import 'swiper/css';
import LessonNavigatorButtons from "../components/LessonNavigatorButtons";
import LessonSwiper from "../components/LessonSwiper";

const pathToImage = "/lesson-images/day-1/session-1"
const lengthOfImages = Array.from({ length: 32 })

const Day1Theme1 = () => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <>
            <LessonSwiper swiperRef={swiperRef} setActiveIndex={setActiveIndex} pathToImage={pathToImage} lengthOfImages={lengthOfImages} />
            <LessonNavigatorButtons activeIndex={activeIndex} swiperRef={swiperRef} content={lengthOfImages} />
        </>
    )
}

export default Day1Theme1