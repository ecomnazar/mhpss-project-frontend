import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import TestForm from '../components/TestForm'
import React from 'react'

const questionText = "What is the capital of France?"
const questionAndAnswer = ["Paris", "Berlin", "Madrid", "Rome", "London"]
const correctAnswer = 0

const test = [
    {
        question: "What is the definition of mental health according to the WHO?",
        answers: ["State of mental well-being", "Ability to cope with stress", "Ability to contribute to the community", "All of the above"],
        correct: 3
    }
]

const Day1Theme6 = () => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const testLength = 7
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
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} /></SwiperSlide>
                <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} isLast={true} /></SwiperSlide>
            </Swiper>
            <h1>{activeIndex + 1}/{testLength}</h1>
        </>
    )
}

export default Day1Theme6