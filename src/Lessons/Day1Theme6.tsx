import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import TestForm from '../components/TestForm'
import React from 'react'

const questionText = "What is the capital of France?"
const questionAndAnswer = ["Paris", "Berlin", "Madrid", "Rome", "London"]
const correctAnswer = 0

const Day1Theme6 = () => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                ref={swiperRef}
                simulateTouch={false}
                onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-full w-full"
            >
                <SwiperSlide><TestForm correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Day1Theme6