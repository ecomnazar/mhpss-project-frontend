import { useNavigate } from "react-router-dom"
import DesktopHeader from "../components/DesktopHeader"
import useWindowDimensions from "../hooks/useWindowDimensions"
import MobileHeader from "../components/MobileHeader"
import Logo from "../components/Logo"

const Header = () => {
  const navigate = useNavigate()
  const { innerWidth } = useWindowDimensions()

  return (
    <header className='container mx-auto px-4 py-2 flex items-center justify-between'>
      <Logo />
      {innerWidth <= 640 ? <MobileHeader /> : <DesktopHeader />}
    </header>
  )
}

export default Header