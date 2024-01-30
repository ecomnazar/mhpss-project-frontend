import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { getUserEmail, getUserFullname } from '../lib/userData'
import { useUserStore } from '../stores/useUserStore'
import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const CertificatePage = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const loading = useUserStore((state) => state.getCertifiacteLoading)
    const isFinish = localStorage.getItem('finish')
    const getCertificateApi = useUserStore((state) => state.getCertifiacteApi)
    const email = getUserEmail()
    const fullname = getUserFullname()

    React.useEffect(() => {
        if (!isFinish) {
            navigate('/course')
        }
    }, [])

    const handleSubmit = () => {
        getCertificateApi(fullname!, email!)
    }

    return (
        <section className='w-screen h-screen flex flex-col items-center justify-center'>

            <h3>{t('feedback.request')}</h3>

            <Toaster />
            <Button isLoading={loading} onClick={handleSubmit} title={'Download certificate'} />
            <p>We will send your certificate to your email ({email})</p>
        </section>
    )
}

export default CertificatePage