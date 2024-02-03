import Header from '../../sections/Header'
import Footer from '../../sections/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import { Toaster } from 'react-hot-toast'
import FormModal from '../Modals/FormModal'
import EditProfileModal from '../Modals/EditProfileModal'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { getLngLS } from '../../lib/localStorage'

const MainLayout = () => {
    const { i18n } = useTranslation()
    const getLng = getLngLS()

    React.useEffect(() => {
        i18n.changeLanguage(getLng)
    }, [])

    return (
        <>
            <Toaster />
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />

            {/* MODALS */}

            <FormModal />
            <EditProfileModal />
        </>
    )
}

export default MainLayout