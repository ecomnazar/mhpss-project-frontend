import FormModal from './components/Modals/FormModal'
import './i18n'
import Guarantee from "./sections/Guarantee"
import Header from "./sections/Header"
import Info from "./sections/Info"
import Main from "./sections/Main"

function App() {
  return (
    <main>
      <Header />
      <Main />
      <Guarantee />
      <Info />
      {/* <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-white/50 backdrop-blur z-[9999]"></div> */}
      <FormModal />
    </main>
  )
}

export default App
