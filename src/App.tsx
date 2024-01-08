import { Toaster } from 'react-hot-toast'
import FormModal from './components/Modals/FormModal'
import './i18n'
import Guarantee from "./sections/Guarantee"
import Header from "./sections/Header"
import Info from "./sections/Info"
import Main from "./sections/Main"

function App() {
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

export default App
