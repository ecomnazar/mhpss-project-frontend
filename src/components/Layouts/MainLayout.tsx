import Header from '../../sections/Header'
import Footer from '../../sections/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import { Toaster } from 'react-hot-toast'
import FormModal from '../Modals/FormModal'
import EditProfileModal from '../Modals/EditProfileModal'

const MainLayout = () => {
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