import { Disclosure } from "@headlessui/react"
import clsx from "clsx";
import React from "react"
import { MdKeyboardArrowUp } from "react-icons/md";
import Button from "../components/Button";
import CourseProgressLine from "../components/CourseProgressLine";
import { useNavigate } from "react-router-dom";
import Day1Theme1 from "../Lessons/Day1Theme1";
import Day1Theme2 from "../Lessons/Day1Theme2";
import Day1Theme3 from "../Lessons/Day1Theme3";
import { getUserEmail } from "../lib/userData";


export const data = [
    [
        {
            title: 'Introduction',
            content: <Day1Theme1 />
        },
        {
            title: 'Determinants of Mental Health',
            content: <Day1Theme2 />
        },
        {
            title: 'Mental Health and Psychosocial Support',
            content: <Day1Theme3 />
        },
        {
            title: 'Training Delivery Practice 1',
            content: 'It is a content 4'
        },
        {
            title: 'Test',
            content: 'It is a content 5'
        },
    ],
    [
        {
            title: 'It is perfect',
            content: 'It is perfect 1'
        },
        {
            title: 'It is no perfect',
            content: 'It is no perfect 2'
        }
    ],
    [
        {
            title: 'It is perfect 44',
            content: 'It is perfect 55'
        },
        {
            title: 'It is no perfect 66',
            content: 'It is no perfect 77'
        }
    ],
]

const CoursePage = () => {
    const navigate = useNavigate()
    const email = getUserEmail()

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

    const onClickNextButton = () => {
        if (data.length === active[0] + 1 && data[active[0]].length === active[1] + 1) {
            localStorage.setItem('tick', themeFLS + data[active[0]][active[1]].title) + '::'
            // localStorage.setItem('activeDay', (active[0] + 1).toString())
            //@ts-ignore
            setTick(tickFLS.split('::'))
            localStorage.setItem('finish', 'true')
        } else {

            setTick([...tick, data[active[0]][active[1]].title])


            if (!tickFLS) {
                localStorage.setItem('tick', data[active[0]][active[1]].title + '::')
            } else {
                localStorage.setItem('tick', themeFLS + data[active[0]][active[1]].title) + '::'
            }

            // 

            if (data[active[0]].length === active[1] + 1) {
                setTheme([...theme, data[active[0] + 1][0].title])
                localStorage.setItem('theme', themeFLS + data[active[0] + 1][0].title + '::')

            } else {
                themeFLS ?
                    localStorage.setItem('theme', themeFLS + data[active[0]][active[1] + 1].title + '::') :
                    localStorage.setItem('theme', theme[0] + data[active[0]][active[1] + 1].title)
                setTheme([...theme, data[active[0]][active[1] + 1].title])
            }

            // 

            if (data[active[0]].length === active[1] + 1) {
                setActive([active[0] + 1, 0])
                localStorage.setItem('activeDay', (active[0] + 1).toString())
                localStorage.setItem('activeDayTheme', '0')
            } else {
                setActive([active[0], active[1] + 1])
                localStorage.setItem('activeDayTheme', (active[1] + 1).toString())
            }
        }
    }

    const onGetCertificate = () => {
        navigate('/certificate')
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


    React.useEffect(() => {
    }, [theme])

    React.useEffect(() => {
        if (!email) {
            navigate('/')
        }
    }, [])

    return (
        <section className='p-4'>
            <div className="flex items-center justify-between pb-4">
                <button onClick={() => navigate('/')}>
                    <img src="/images/arrow-back-icon.svg" />
                </button>
                <CourseProgressLine />
            </div>
            <div className='flex items-start justify-between flex-wrap'>
                <div className='min-h-[50vh] md:min-h-[90vh] mb-4 md:mb-0 basis-[100%] md:basis-[73%] relative border-2 border-primary rounded-md flex flex-col items-center justify-start p-4 pb-20'>
                    {data[active[0]][active[1]].content}
                    <div className="w-full absolute bottom-5 left-0 px-4 flex items-center justify-end">
                        <Button className="ml-auto min-w-[150px]" title={
                            finishFLS ? 'get my certificate' :
                                <div className="rotate-[90deg]"><MdKeyboardArrowUp size={27} /></div>
                        } onClick={finishFLS ? onGetCertificate : onClickNextButton} />
                    </div>
                </div>
                <div className='basis-[100%] md:basis-[25%]'>
                    <h3 className="font-[600]">MHPSS</h3>
                    <div className="">
                        {data.map((_, index) => {
                            return (
                                <Disclosure key={'d' + index}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between py-1 text-left text-sm font-medium border-b-[1.5px] border-primary">
                                                <div>
                                                    <span className="block text-primary text-md">Day {index + 1}</span>
                                                    <span className="block text-[11px]">1/5</span>
                                                </div>
                                                <MdKeyboardArrowUp
                                                    className={`${!open ? 'rotate-180 transform' : ''
                                                        } h-7 w-7 text-primary`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="py-4 flex flex-col gap-y-4">
                                                {data[index].map((elem, idx) => {
                                                    return (
                                                        <div key={'dp' + idx} className="flex items-center gap-x-4">
                                                            <button onClick={() => {
                                                                setActive([index, idx])
                                                            }} className={clsx("flex items-center justify-center border border-lightDark bg-white rounded-full w-5 h-5", {
                                                                ['!bg-primary']: tick.includes(elem.title),
                                                                ['pointer-events-none']: !theme.includes(elem.title)
                                                            })}>
                                                                <img className="w-2 h-2" src="/images/tick-icon.svg" alt="" />
                                                            </button>
                                                            <p className={clsx("", {
                                                                ['text-lightDark']: !theme.includes(elem.title),
                                                                ['text-primary']: theme.includes(elem.title)
                                                            })}>{elem.title}</p>
                                                        </div>
                                                    )
                                                })}

                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursePage