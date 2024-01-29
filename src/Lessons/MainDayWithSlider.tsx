import React from "react";
import { SwiperRef } from "swiper/react"
import 'swiper/css';
import LessonNavigatorButtons from "../components/LessonNavigatorButtons";
import LessonSwiper from "../components/LessonSwiper";

interface Props {
    day: number;
    session: number;
    imagesLength: number;
}

const MainDayWithSlider: React.FC<Props> = ({ session, day, imagesLength }) => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const lengthOfImages = Array.from({ length: imagesLength })

    return (
        <>
            <LessonSwiper swiperRef={swiperRef} setActiveIndex={setActiveIndex} pathToImage={`/lesson-images/day-${day}/session-${session}`} lengthOfImages={lengthOfImages} />
            <LessonNavigatorButtons activeIndex={activeIndex} setActiveIndex={setActiveIndex} swiperRef={swiperRef} content={lengthOfImages} />
        </>
    )
}

export default MainDayWithSlider