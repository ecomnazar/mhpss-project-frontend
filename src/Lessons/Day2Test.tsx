import React from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import TestForm from '../components/TestForm'
import 'swiper/css';

const tests = [
    {
        question: "tests.day2.test1.question",
        answers: ["tests.day2.test1.a", "tests.day2.test1.b", "tests.day2.test1.c", "tests.day2.test1.d"],
        correct: 0
    },
    {
        question: "tests.day2.test2.question",
        answers: ["tests.day2.test2.a", "tests.day2.test2.b", "tests.day2.test2.c", "tests.day2.test2.d"],
        correct: 1
    },
    {
        question: "tests.day2.test3.question",
        answers: ["tests.day2.test3.a", "tests.day2.test3.b", "tests.day2.test3.c", "tests.day2.test3.d"],
        correct: 3
    },
    {
        question: "tests.day2.test4.question",
        answers: ["tests.day2.test4.a", "tests.day2.test4.b", "tests.day2.test4.c", "tests.day2.test4.d"],
        correct: 3
    },
    {
        question: "tests.day2.test5.question",
        answers: ["tests.day2.test5.a", "tests.day2.test5.b", "tests.day2.test5.c", "tests.day2.test5.d"],
        correct: 3
    },
    {
        question: "tests.day2.test6.question",
        answers: ["tests.day2.test6.a", "tests.day2.test6.b", "tests.day2.test6.c", "tests.day2.test6.d"],
        correct: 0
    },
    {
        question: "tests.day2.test7.question",
        answers: ["tests.day2.test7.a", "tests.day2.test7.b", "tests.day2.test7.c", "tests.day2.test7.d"],
        correct: 3
    },
    {
        question: "tests.day2.test8.question",
        answers: ["tests.day2.test8.a", "tests.day2.test8.b", "tests.day2.test8.c", "tests.day2.test8.d"],
        correct: 1
    }
]

const Day2Test = () => {
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                ref={swiperRef}
                simulateTouch={false}
                allowTouchMove={false}
                onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-full w-full"
            >
                {tests.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <TestForm swiperRef={swiperRef} correctAnswer={item.correct} questionText={item.question} answers={item.answers} isLast={tests.length - 1 === idx} />
                        </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} isLast={true} /></SwiperSlide> */}
            </Swiper>
            <h4 className='mt-2'>{activeIndex + 1}/{tests.length}</h4>
        </>
    )
}

export default Day2Test