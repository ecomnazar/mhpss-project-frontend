import { Toaster } from 'react-hot-toast'
import Main from '../sections/Main'
import Guarantee from '../sections/Guarantee'
import Info from '../sections/Info'
import FormModal from '../components/Modals/FormModal'
import EditProfileModal from '../components/Modals/EditProfileModal'

const MainPage = () => {
    return (
        <main>
            <Toaster />
            <Main />
            <Guarantee />
            <Info />
            <FormModal />
            <EditProfileModal />
        </main>
    )
}

export default MainPage