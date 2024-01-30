import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
import { getUserEmail } from '../lib/userData'



const FeedbackPage = () => {
    const [feedback, setFeedback] = React.useState([1, 1, 1, 1, 'yes'])
    const { t } = useTranslation()
    const mail = getUserEmail()
    const { handleSubmit } = useForm()
    const navigate = useNavigate()
    const updateFeedback = useUserStore((state) => state.updateFeedback)
    const [showFeedback, setShowFeedback] = React.useState(false)

    const onSend = () => {
        updateFeedback(feedback, mail!)
        toast.success(t('feedback.thx'))
        setTimeout(() => {
            navigate('/certificate')
        }, 1500);
    }

    return (
        <section className='w-screen h-screen flex items-center justify-center bg-[#F5F9FE]'>
            <Toaster />
            {showFeedback ? <form className='w-[85%] rounded-md sm:w-[500px] h-[500px] overflow-y-auto bg-white shadow-md'>
                <div className='w-full p-3 bg-primary'>
                    <h3 className='text-white'>{t("feedback.review")}</h3>
                </div>
                <div className='p-3'>
                    <ul className='flex flex-col gap-y-4'>
                        {Array.from({ length: 4 }).map((_, idx) => {
                            return (
                                <li key={idx}>
                                    <h4 className='mb-2'>{t(`feedback.${idx + 1}`)}</h4>
                                    <ul className='flex flex-col gap-y-1'>
                                        {Array.from({ length: 5 }).map((_, innerIdx) => {
                                            return (
                                                <div key={innerIdx} className='flex items-center gap-x-4'>
                                                    <p className='w-[15px] text-left'>{innerIdx + 1}</p>
                                                    <div onClick={() => setFeedback([...feedback.slice(0, idx), innerIdx + 1, ...feedback.slice(idx + 1)])} className="p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                                        <div className={clsx(" rounded-full w-full h-full", {
                                                            ['bg-primary/50']: feedback[idx] === innerIdx + 1
                                                        })}></div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                        <li>
                            <h4 className='mb-2'>{t(`feedback.${5}`)}</h4>
                            <ul className='flex flex-col gap-y-1'>
                                {['yes', 'no'].map((item, innerIdx) => {
                                    return (
                                        <div key={innerIdx} className='flex items-center gap-x-4'>
                                            <p className='w-[40px] text-left'>{t(`${item}`)}</p>
                                            <div onClick={() => setFeedback([...feedback.slice(0, 4), item])} className="p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                                <div className={clsx(" rounded-full w-full h-full", {
                                                    ['bg-primary/50']: feedback[4] === item
                                                })}></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                    <Button isLoading={false} onClick={handleSubmit(onSend)} title={t('send')} className='mt-4 !text-[14px] !h-[38px]' />
                </div>
            </form> : <form className='w-[85%] rounded-md sm:w-[500px]  overflow-y-auto'>
                <div className='w-full p-3 bg-primary'>
                    <h3 className='text-white'>{t("feedback.request")}</h3>
                </div>
                <div className='flex items-center mt-4 gap-x-4'>
                    <Button onClick={() => setShowFeedback(true)} title={t('yes')} className='w-full bg-primary/50' />
                    <Button onClick={() => navigate('/certificate')} title={t('no')} className='w-full bg-red-600/50' />
                </div>
            </form>}
        </section>
    )
}

export default FeedbackPage