import clsx from "clsx"
import React from "react"
import Button from "../components/Button"
import { SubmitHandler, useForm } from "react-hook-form"
import { data } from "./Course"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../stores/useUserStore"
import { getUserEmail } from "../lib/userData"


const questionAndAnswer = [
    { answerText: 'Paris', answer: 1 },
    { answerText: 'Berlin', answer: 2 },
    { answerText: 'Madrid', answer: 3 },
    { answerText: 'Rome', answer: 4 },
    { answerText: 'London', answer: 5 },
]
const correctAnswer = 0

const TestPage = () => {
    const [value, setValue] = React.useState(questionAndAnswer.length + 1)
    const [showResult, setShowResult] = React.useState(false)
    const [showNextButton, setShowNextButton] = React.useState(false)
    const [resultText, setResultText] = React.useState('')
    const setUpdateFinishDate = useUserStore((state) => state.updateFinishDate)
    const { handleSubmit } = useForm()
    const navigate = useNavigate()
    const email = getUserEmail()

    // ------

    // to set color to text
    const [theme, setTheme] = React.useState(['Introduction'])
    // to set tick
    const [tick, setTick] = React.useState([''])
    // to set main content in left side
    const [active, setActive] = React.useState([0, 0])
    // FLS from local storage
    const themeFLS = localStorage.getItem('theme')
    const tickFLS = localStorage.getItem('tick')
    const activeDayFLS = localStorage.getItem('activeDay') || '0'
    const activeDayThemeFLS = localStorage.getItem('activeDayTheme') || '0'
    const finishFLS = localStorage.getItem('finish')

    const nextButtonText = Number(activeDayFLS) + 1 === data.length ? 'Finish' : 'Next'

    const onSubmit = () => {
        setShowResult(true)
        if (value === correctAnswer) {
            setResultText('Correct')
            setShowNextButton(true)
        } else {
            setResultText('Wrong')
        }
    }

    const goBackToLesson = () => {
        if (data.length === active[0] + 1 && data[active[0]].length === active[1] + 1) {
            localStorage.setItem('tick', themeFLS + data[active[0]][active[1]].title) + '::'
            // localStorage.setItem('activeDay', (active[0] + 1).toString())
            // @ts-ignore
            setTick(tickFLS.split('::'))
            localStorage.setItem('finish', 'true')

            setUpdateFinishDate()
        } else {
            setTheme([...theme, data[active[0] + 1][0].title])
            localStorage.setItem('theme', themeFLS + data[active[0] + 1][0].title + '::')
            // 
            setActive([active[0] + 1, 0])
            localStorage.setItem('activeDay', (active[0] + 1).toString())
            localStorage.setItem('activeDayTheme', '0')
            navigate('/course')
        }
    }

    React.useEffect(() => {
        setActive([parseInt(activeDayFLS), parseInt(activeDayThemeFLS)])
        if (!themeFLS) {
            localStorage.setItem('theme', theme[0] + '::')
        } else {
            setTheme(themeFLS.split('::'))
            if (tickFLS) {
                setTick(tickFLS.split('::'))
            }
        }
    }, [])

    return (
        <section className="container mx-auto px-4 py-8 flex items-center justify-center flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] p-4 rounded-md">
                <h2 className="mb-4">What is the capital of France?</h2>
                <div className="flex flex-col gap-y-4">
                    {questionAndAnswer.map((question, index) => {
                        return (
                            <div onClick={() => {
                                setValue(index)
                                setShowNextButton(false)
                                setShowResult(false)
                            }} key={index} className="relative border-primary border rounded-md p-3">
                                {question.answerText}
                                <div className="absolute top-1/2 -translate-y-1/2 right-[10px] p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                    <div className={clsx(" rounded-full w-full h-full", {
                                        ['bg-red-300']: index === value
                                    })}></div>
                                </div>
                            </div>
                        )
                    })}
                    <Button disabled={value > questionAndAnswer.length} title={'Submit'} />
                </div>
                <div>
                </div>

            </form>
            {
                showResult &&
                <div>
                    <h2>{resultText}</h2>
                </div>
            }
            {
                showNextButton && <Button title={nextButtonText} onClick={goBackToLesson} />
            }
        </section>
    )
}

export default TestPage