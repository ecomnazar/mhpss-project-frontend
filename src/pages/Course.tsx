import React from "react"
import clsx from "clsx";
import { Disclosure } from "@headlessui/react"
import { MdKeyboardArrowUp } from "react-icons/md";
import CourseProgressLine from "../components/CourseProgressLine";
import { useNavigate } from "react-router-dom";
import { getUserEmail } from "../lib/userData";
import { useTranslation } from "react-i18next";
import { useLogicStore } from "../stores/useLogicStore";
import { getActiveDayLS, getActiveDayThemeLS, getThemeLS, getTickLS } from "../lib/localStorage";
import Day1Theme5 from "../Lessons/Day1Theme5";
import MainDayWithSlider from "../Lessons/MainDayWithSlider";
import Day1Test from "../Lessons/Day1Test";
import Day2Test from "../Lessons/Day2Test";
import Day3Test from "../Lessons/Day3Test";
import Day4Test from "../Lessons/Day4Test";
import Day5Test from "../Lessons/Day5Test";


export const data = [
    [
        {
            title: 'introduction',
            content: <MainDayWithSlider day={1} session={1} imagesLength={32} />
        },
        {
            title: 'determinantsOfMentalHealth',
            content: <MainDayWithSlider day={1} session={2} imagesLength={12} />
        },
        {
            title: 'mentalHealthAndPsychosocialSupport',
            content: <MainDayWithSlider day={1} session={3} imagesLength={19} />
        },
        {
            title: 'trainingDeliveryPractice1',
            content: <MainDayWithSlider day={1} session={4} imagesLength={5} />
        },
        {
            title: 'downloadResources1',
            content: <Day1Theme5 />
        },
        {
            title: 'test1',
            content: <Day1Test />

        },
    ],
    [
        {
            title: 'mentalHealthConditions',
            content: <MainDayWithSlider day={2} session={1} imagesLength={21} />
        },
        {
            title: 'depressionAndAnxietyDisordersInYouthAndWomen',
            content: <MainDayWithSlider day={2} session={2} imagesLength={18} />
        },
        {
            title: 'stressAndTraumaRelatedMentalHealthDisorders',
            content: <MainDayWithSlider day={2} session={3} imagesLength={9} />
        },
        {
            title: 'trainingDeliveryPractice2',
            content: <MainDayWithSlider day={2} session={4} imagesLength={5} />
        },
        {
            title: 'downloadResources2',
            content: <Day1Theme5 />
        },
        {
            title: 'test2',
            content: <Day2Test />
        },
    ],
    [
        {
            title: 'basicPsychosocialCommunicationSkillsForMHPSS',
            content: <MainDayWithSlider day={3} session={1} imagesLength={11} />
        },
        {
            title: 'fiveStepsOfPsychosocialSupport',
            content: <MainDayWithSlider day={3} session={2} imagesLength={13} />
        },
        {
            title: 'step1PracticeRecognitionAndEstablishingCommunication',
            content: <MainDayWithSlider day={3} session={3} imagesLength={11} />
        },
        {
            title: 'basicPsychosocialCommunicationSkillsInMHPSS',
            content: <MainDayWithSlider day={3} session={4} imagesLength={5} />
        },
        {
            title: 'downloadResources3',
            content: <Day1Theme5 />
        },
        {
            title: 'test3',
            content: <Day3Test />
        },
    ],
    [
        {
            title: 'step2PracticeValidationOfMentalHealthCondition',
            content: <MainDayWithSlider day={4} session={1} imagesLength={16} />
        },
        {
            title: 'step3PracticeDeliveryOfPsychosocialSupport',
            content: <MainDayWithSlider day={4} session={2} imagesLength={9} />

        },
        {
            title: 'step4PracticeReferralToSpecializedServices',
            content: <MainDayWithSlider day={4} session={3} imagesLength={1} />
        },
        {
            title: 'trainingDeliveryPractice4',
            content: <MainDayWithSlider day={4} session={4} imagesLength={5} />
        },
        {
            title: 'downloadResources4',
            content: <Day1Theme5 />
        },
        {
            title: 'test4',
            content: <Day4Test />
        },
    ],
    [
        {
            title: 'step5PracticeFollowUpTrainingDeliveryPractice5',
            content: <MainDayWithSlider day={5} session={1} imagesLength={9} />
        },
        {
            title: 'mHPSSPracticeSupervisedPracticeOfPsychosocialSupportFullCycle',
            content: <MainDayWithSlider day={5} session={2} imagesLength={2} />
        },
        {
            title: 'selfHelpForHelpersHowToTakeCareOfYourselvesWhileHelpingOthers',
            content: <MainDayWithSlider day={5} session={3} imagesLength={18} />
        },
        {
            title: 'takingStocksOfTheTrainingSummaryPlansFeedback',
            content: <MainDayWithSlider day={5} session={4} imagesLength={8} />
        },
        {
            title: 'downloadResources5',
            content: <Day1Theme5 />
        },
        {
            title: 'test5',
            content: <Day5Test />
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
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-start justify-between'>
                <div className='relative w-full lg:w-[calc(100vw-450px)] overflow-y-scroll mb-4 p-2 md:p-4 md:mb-0 border-2 border-primary rounded-md flex flex-col items-center justify-start'>
                    {data[active[0]][active[1]].content}
                </div>
                <div className="w-full lg:w-[400px] relative lg:fixed overflow-scroll lg:h-[calc(100vh-100px)] right-0 mb-4 lg:mt-0 mr-4">
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
                                                                    className={clsx("flex items-center justify-center border border-lightDark bg-white rounded-full w-[20px] h-[20px]", {
                                                                        ['!bg-primary']: tick.includes(elem.title),
                                                                        ['pointer-events-none']: !theme.includes(elem.title)
                                                                    })}>
                                                                    <img className="w-2 h-2" src="/images/tick-icon.svg" alt="" />
                                                                </button>

                                                                {/*  */}

                                                                <p className={clsx("w-[90%]", {
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