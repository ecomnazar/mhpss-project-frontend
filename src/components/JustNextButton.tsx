import clsx from 'clsx'
import Button from './Button'
import { useTranslation } from 'react-i18next'
import { useLogicStore } from '../stores/useLogicStore'
import { getThemeLS, getTickLS, setActiveDayThemeLS, setThemeLS } from '../lib/localStorage'
import { data } from '../pages/Course'
import React from 'react'

// NOTE: use in resources lesson to just next lesson

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const JustNextButton: React.FC<Props> = ({ className, ...props }: Props) => {
    const { t } = useTranslation()
    const active = useLogicStore((state) => state.active)
    const setActive = useLogicStore((state) => state.setIsActive)
    // to set color to text
    const theme = useLogicStore((state) => state.theme)
    const setTheme = useLogicStore((state) => state.setTheme)
    // to set tick
    const tick = useLogicStore((state) => state.tick)
    const setTick = useLogicStore((state) => state.setTick)

    const themeLS = getThemeLS()
    const tickLS = getTickLS()


    const handleClick = () => {
        setTick([...tick, data[active[0]][active[1]].title])

        // when first open page works if
        if (!tickLS) {
            localStorage.setItem('tick', data[active[0]][active[1]].title + '::')
        } else {
            localStorage.setItem('tick', themeLS + data[active[0]][active[1]].title) + '::'
        }
        setTheme([...theme, data[active[0]][active[1] + 1].title])
        setActive([active[0], active[1] + 1])
        // LS
        themeLS ? setThemeLS(themeLS + data[active[0]][active[1] + 1].title + '::') : setThemeLS(theme[0] + data[active[0]][active[1] + 1].title)
        setActiveDayThemeLS((active[1] + 1).toString())
    }
    return (
        <Button
            {...props}
            className={clsx("sm:w-fit min-w-[150px] md:mt-4 ml-auto", className)}
            title={t('next')}
            onClick={handleClick}
        />
    )
}

export default JustNextButton