import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useUserStore } from '../stores/useUserStore'
import toast, { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import Input from '../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getCertificateId } from '../lib/localStorage'

interface FormProps {
    fullname: string;
    email: string;
}

const CertificatePage = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const loading = useUserStore((state) => state.getCertifiacteLoading)
    const isFinish = localStorage.getItem('finish')
    const id = 'Certificate serial: mhpss-' + getCertificateId()
    const getCertificateApi = useUserStore((state) => state.getCertifiacteApi)
    const { register, handleSubmit } = useForm<FormProps>()

    React.useEffect(() => {
        if (!isFinish) {
            navigate('/course')
        }
    }, [])

    const onSubmit: SubmitHandler<FormProps> = ({ fullname, email }) => {
        getCertificateApi(fullname!, id!, email!)
        toast.success(t('success'))
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }

    return (
        <section className='w-screen h-screen flex flex-col items-center justify-center'>
            <Toaster />
            <form className='w-[85%] rounded-md sm:w-[500px] overflow-y-auto bg-white shadow-md'>
                <div className='w-full p-3 bg-primary'>
                    <h3 className='text-white'>{t("sendCertificate")}</h3>
                </div>
                <div className='p-4 flex flex-col gap-y-2'>
                    <Input register={register('fullname', { required: true })} placeholder={t('fullname')} />
                    <Input register={register('email', { required: true })} placeholder={t('email')} type='email' />
                    <Button isLoading={loading} onClick={handleSubmit(onSubmit)} title={'Download certificate'} />
                </div>
            </form>
        </section>
    )
}

export default CertificatePage