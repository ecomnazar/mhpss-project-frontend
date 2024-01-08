import { Toaster } from 'react-hot-toast'
import Header from '../sections/Header'
import Main from '../sections/Main'
import Guarantee from '../sections/Guarantee'
import Info from '../sections/Info'
import FormModal from '../components/Modals/FormModal'

const MainPage = () => {
    return (
        <main>
            <Toaster />
            <Header />
            <Main />
            <Guarantee />
            <Info />
            <FormModal />
        </main>
    )
}

export default MainPage