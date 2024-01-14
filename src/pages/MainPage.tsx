import { Toaster } from 'react-hot-toast'
import Header from '../sections/Header'
import Main from '../sections/Main'
import Guarantee from '../sections/Guarantee'
import Info from '../sections/Info'
import FormModal from '../components/Modals/FormModal'
import EditProfileModal from '../components/Modals/EditProfileModal'
import Footer from '../sections/Footer'

const MainPage = () => {
    return (
        <main>
            <Toaster />
            <Header />
            <Main />
            <Guarantee />
            <Info />
            <Footer />
            <FormModal />
            <EditProfileModal />
        </main>
    )
}

export default MainPage