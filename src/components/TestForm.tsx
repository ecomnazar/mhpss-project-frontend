import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next';
import { useLogicStore } from '../stores/useLogicStore';
import { getThemeLS, setActiveDayLS, setActiveDayThemeLS, setThemeLS, setTickLs } from '../lib/localStorage';
import { data } from '../pages/Course';

interface Props {
    correctAnswer: number;
    questionText: string;
    answers: string[];
}

const TestForm: React.FC<Props> = ({ correctAnswer, questionText, answers }) => {

    const { t } = useTranslation()

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

    const onSubmit = () => {
        if (resultText === 'correct') {
            setTick([...tick, data[active[0]][active[1]].title])
            setTheme([...theme, data[active[0] + 1][0].title])
            setActive([active[0] + 1, 0])
            // LS
            setThemeLS(themeLS + data[active[0] + 1][0].title + '::')
            setActiveDayLS((active[0] + 1).toString())
            setTickLs((themeLS + data[active[0]][active[1]].title) + '::')
            setActiveDayThemeLS('0')
        } else {
            setShowResult(true)
            if (value === correctAnswer) {
                setResultText('correct')
            } else {
                setResultText('Wrong')
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] rounded-md">
                <h2 className="mb-4">{questionText}</h2>
                <div className="flex flex-col gap-y-4">
                    {answers.map((question, index) => {
                        return (
                            <div onClick={() => {
                                setValue(index)
                                setShowResult(false)
                            }} key={index} className="relative border-primary border rounded-md p-3">
                                {question}
                                <div className="absolute top-1/2 -translate-y-1/2 right-[10px] p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                    <div className={clsx(" rounded-full w-full h-full", {
                                        ['bg-red-300']: index === value
                                    })}></div>
                                </div>
                            </div>
                        )
                    })}
                    <Button disabled={value > answers.length} title={resultText === 'correct' ? t('next') : 'Submit'} />
                </div>
                <div>
                </div>
            </form>
            {showResult && <h2 className='text-center mt-4'>{resultText}</h2>}
        </div>
    )
}

export default TestForm