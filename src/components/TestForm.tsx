import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next';
import { useLogicStore } from '../stores/useLogicStore';
import { getThemeLS, getTickLS, setActiveDayLS, setActiveDayThemeLS, setFinishLS, setThemeLS, setTickLs } from '../lib/localStorage';
import { data } from '../pages/Course';
import { useNavigate } from 'react-router-dom';
import { SwiperRef } from 'swiper/react';

interface Props {
    correctAnswer: number;
    questionText: string;
    answers: string[];
    swiperRef: React.RefObject<SwiperRef>;
    isLast?: boolean;
    isFinish?: boolean;
}

const TestForm: React.FC<Props> = ({ correctAnswer, questionText, answers, swiperRef, isLast = false, isFinish = false }) => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const [value, setValue] = React.useState(answers.length + 1)
    const [showResult, setShowResult] = React.useState(false)
    const [resultText, setResultText] = React.useState('')

    const { handleSubmit } = useForm()

    // to set color to text
    const theme = useLogicStore((state) => state.theme)
    const setTheme = useLogicStore((state) => state.setTheme)
    // to set main content in left side
    const active = useLogicStore((state) => state.active)
    const setActive = useLogicStore((state) => state.setIsActive)
    // to set tick
    const tick = useLogicStore((state) => state.tick)
    const setTick = useLogicStore((state) => state.setTick)

    const themeLS = getThemeLS()
    const tickLS = getTickLS()

    const onSubmit = () => {
        if (resultText === 'correct') {
            if (isLast) {
                if (!isFinish) {
                    if (data.length === active[0] + 1 && data[active[0]].length === active[1] + 1) {
                        setTickLs(themeLS + data[active[0]][active[1]].title + '::')
                        //@ts-ignore
                        setTick(tickLS.split('::'))
                        // setFinishLS()
                        // navigate('/feedback')
                    } else {
                        setTick([...tick, data[active[0]][active[1]].title])
                        setTheme([...theme, data[active[0] + 1][0].title])
                        setActive([active[0] + 1, 0])
                        // LS
                        setThemeLS(themeLS + data[active[0] + 1][0].title + '::')
                        setActiveDayLS((active[0] + 1).toString())
                        setTickLs((themeLS + data[active[0]][active[1]].title) + '::')
                        setActiveDayThemeLS('0')
                    }
                } else {
                    setFinishLS()
                    navigate('/feedback')
                }
            } else {
                swiperRef.current?.swiper.slideNext()
            }
        } else {
            setShowResult(true)
            if (value === correctAnswer) {
                setResultText('correct')
            } else {
                setResultText('wrong')
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-[500px] mx-auto rounded-md">
                <h2 className="mb-4">{t(questionText)}</h2>
                <div className="w-full flex flex-col gap-y-4">
                    {answers.map((answer, index) => {
                        return (
                            <div onClick={() => {
                                setValue(index)
                                setShowResult(false)
                            }} key={index} className="relative border-primary border rounded-md p-3 w-full pr-12">
                                {t(answer)}
                                <div className="absolute top-1/2 -translate-y-1/2 right-[10px] p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                    <div className={clsx(" rounded-full w-full h-full", {
                                        ['bg-primary/50']: index === value
                                    })}></div>
                                </div>
                            </div>
                        )
                    })}
                    <Button disabled={value > answers.length} title={resultText === 'correct' ? t('next') : 'Submit'} />
                </div>
            </form>
            {showResult && <h2 className={clsx('text-center mt-4', {
                ['text-green-500']: resultText == 'correct',
                ['text-red-500']: resultText != 'correct',
            })}>{t(resultText)}</h2>}
        </>
    )
}

export default TestForm