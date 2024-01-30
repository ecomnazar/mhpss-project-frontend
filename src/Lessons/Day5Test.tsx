import React from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import TestForm from '../components/TestForm'

const tests = [
    {
        question: "tests.day5.test1.question",
        answers: ["tests.day5.test1.a", "tests.day5.test1.b", "tests.day5.test1.c", "tests.day5.test1.d"],
        correct: 2
    }
]

const Day5Test = () => {
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
                {tests.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}><TestForm isFinish={true} swiperRef={swiperRef} correctAnswer={item.correct} questionText={item.question} answers={item.answers} isLast={tests.length - 1 === idx} /></SwiperSlide>
                    )
                })}
                {/* <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} isLast={true} /></SwiperSlide> */}
            </Swiper>
            <h4 className='mt-2'>{activeIndex + 1}/{tests.length}</h4>
        </>
    )
}

export default Day5Test