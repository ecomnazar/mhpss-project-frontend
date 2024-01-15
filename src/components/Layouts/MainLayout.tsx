import Header from '../../sections/Header'
import Footer from '../../sections/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout