import React from "react"
import clsx from "clsx";
import { Disclosure } from "@headlessui/react"
import { MdKeyboardArrowUp } from "react-icons/md";
import CourseProgressLine from "../components/CourseProgressLine";
import { useNavigate } from "react-router-dom";
import Day1Theme1 from "../Lessons/Day1Theme1";
import Day1Theme2 from "../Lessons/Day1Theme2";
import Day1Theme3 from "../Lessons/Day1Theme3";
import { getUserEmail } from "../lib/userData";
import { useTranslation } from "react-i18next";
import { useLogicStore } from "../stores/useLogicStore";
import { getActiveDayLS, getActiveDayThemeLS, getThemeLS, getTickLS } from "../lib/localStorage";
import Day1Theme5 from "../Lessons/Day1Theme5";
import Day1Theme6 from "../Lessons/Day1Theme6";


export const data = [
    [
        {
            title: 'introduction',
            content: <Day1Theme1 />
        },
        {
            title: 'determinantsOfMentalHealth',
            content: <Day1Theme2 />
        },
        {
            title: 'mentalHealthAndPsychosocialSupport',
            content: <Day1Theme1 />
        },
        {
            title: 'trainingDeliveryPractice1',
            content: <Day1Theme2 />
        },
        {
            title: 'downloadResources1',
            content: <Day1Theme5 />

        },
        {
            title: 'test1',
            content: <Day1Theme6 />

        },
    ],
    [
        {
            title: 'mentalHealthConditions',
            content: <Day1Theme1 />
        },
        {
            title: 'depressionAndAnxietyDisordersInYouthAndWomen',
            content: <Day1Theme1 />

        },
        {
            title: 'stressAndTraumaRelatedMentalHealthDisorders',
            content: <Day1Theme3 />
        },
        {
            title: 'trainingDeliveryPractice2',
            content: <Day1Theme2 />
        },
        {
            title: 'downloadResources2',
            content: <Day1Theme2 />
        },
        {
            title: 'test2',
            content: <Day1Theme2 />
        },
    ],
    [
        {
            title: 'basicPsychosocialCommunicationSkillsForMHPSS',
            content: <Day1Theme2 />
        },
        {
            title: 'fiveStepsOfPsychosocialSupport',
            content: <Day1Theme3 />
        },
        {
            title: 'step1PracticeRecognitionAndEstablishingCommunication',
            content: <Day1Theme2 />
        },
        {
            title: 'basicPsychosocialCommunicationSkillsInMHPSS',
            content: <Day1Theme3 />
        },
        {
            title: 'downloadResources3',
            content: <Day1Theme2 />
        },
        {
            title: 'test3',
            content: <Day1Theme2 />
        },
    ],
    [
        {
            title: 'step2PracticeValidationOfMentalHealthCondition',
            content: <Day1Theme2 />
        },
        {
            title: 'step3PracticeDeliveryOfPsychosocialSupport',
            content: <Day1Theme3 />
        },
        {
            title: 'step4PracticeReferralToSpecializedServices',
            content: <Day1Theme2 />
        },
        {
            title: 'trainingDeliveryPractice4',
            content: <Day1Theme3 />
        },
        {
            title: 'downloadResources4',
            content: <Day1Theme2 />
        },
        {
            title: 'test4',
            content: <Day1Theme2 />
        },
    ],
    [
        {
            title: 'step5PracticeFollowUpTrainingDeliveryPractice5',
            content: <Day1Theme2 />
        },
        {
            title: 'mHPSSPracticeSupervisedPracticeOfPsychosocialSupportFullCycle',
            content: <Day1Theme3 />
        },
        {
            title: 'selfHelpForHelpersHowToTakeCareOfYourselvesWhileHelpingOthers',
            content: <Day1Theme2 />
        },
        {
            title: 'takingStocksOfTheTrainingSummaryPlansFeedback',
            content: <Day1Theme3 />
        },
        {
            title: 'downloadResources5',
            content: <Day1Theme2 />
        },
        {
            title: 'test5',
            content: <Day1Theme2 />
        }
    ],
]

const CoursePage = () => {
    const navigate = useNavigate()
    const email = getUserEmail()
    const { t } = useTranslation()

    // to set main content in left side
    const active = useLogicStore((state) => state.active)
    const setActive = useLogicStore((state) => state.setIsActive)
    // to set color to text
    const theme = useLogicStore((state) => state.theme)
    const setTheme = useLogicStore((state) => state.setTheme)
    // to set tick
    const tick = useLogicStore((state) => state.tick)
    const setTick = useLogicStore((state) => state.setTick)

    // NOTE: LS means Local Storage
    const themeLS = getThemeLS()
    const tickLS = getTickLS()
    const activeDayLS = getActiveDayLS()
    const activeDayThemeLS = getActiveDayThemeLS()

    React.useEffect(() => {
        setActive([parseInt(activeDayLS), parseInt(activeDayThemeLS)])
        if (!themeLS) {
            localStorage.setItem('theme', theme[0] + '::')
        } else {
            setTheme(themeLS.split('::'))
            if (tickLS) {
                setTick(tickLS.split('::'))
            }
        }

    }, [])

    React.useEffect(() => {
        if (!email) {
            navigate('/')
        }
    }, [])



    // React.useEffect(() => {
    // }, [theme])
    // const finishFLS = localStorage.getItem('finish')
    // // 
    // const onGetCertificate = () => {
    //     navigate('/certificate')
    // }


    return (
        <section className='p-4'>
            <div className="flex items-center justify-between pb-4">
                <button onClick={() => navigate('/')}>
                    <img src="/images/arrow-back-icon.svg" />
                </button>
                {/* <CourseProgressLine /> */}
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-start justify-between'>
                <div className='relative w-full lg:w-[calc(100vw-450px)]   overflow-y-scroll mb-4 p-2 md:p-4 md:mb-0 border-2 border-primary rounded-md flex flex-col items-center justify-start'>
                    {data[active[0]][active[1]].content}

                    {/*  */}
                    {/* {data[active[0]].length !== active[1] + 1 &&
                        <Button
                            className="ml-auto w-full sm:w-fit min-w-[150px] mt-2 md:mt-4" title={
                                finishFLS ? 'get my certificate' : <div className="rotate-[90deg]">
                                    <MdKeyboardArrowUp size={27} />
                                </div>
                            }
                            onClick={finishFLS ? onGetCertificate : onClickNextButton}
                        />
                    } */}

                    {/*  */}

                </div>
                <div className="w-full lg:w-[400px] relative lg:fixed overflow-scroll right-0 mb-4 lg:mt-0 mr-4">
                    <div className=''>
                        <div className="flex items-center justify-between">
                            <h3 className="font-[600]">MHPSS</h3>
                            <CourseProgressLine />
                        </div>
                        <div className="">
                            {data.map((_, index) => {
                                return (
                                    <Disclosure key={'d' + index}>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full py-2 justify-between text-left text-sm font-medium border-b-[1.5px] border-primary">
                                                    <div>
                                                        <span className="block text-primary text-md">{t('day')} {index + 1}</span>
                                                        {/* <span className="block text-[11px]">1/5</span> */}
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

                                                                {/*  */}

                                                                <button onClick={() => setActive([index, idx])}
                                                                    className={clsx("flex items-center justify-center border border-lightDark bg-white rounded-full w-5 h-5", {
                                                                        ['!bg-primary']: tick.includes(elem.title),
                                                                        ['pointer-events-none']: !theme.includes(elem.title)
                                                                    })}>
                                                                    <img className="w-2 h-2" src="/images/tick-icon.svg" alt="" />
                                                                </button>

                                                                {/*  */}

                                                                <p className={clsx("", {
                                                                    ['text-lightDark']: !theme.includes(elem.title),
                                                                    ['text-primary']: theme.includes(elem.title)
                                                                })}>{t(`lessonPage.${elem.title}`)}</p>

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

            </div>
        </section>
    )
}

export default CoursePage