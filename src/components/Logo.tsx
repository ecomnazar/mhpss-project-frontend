import { useNavigate } from 'react-router-dom'

interface Props {
    fn?: () => void;
}

const Logo = ({ fn }: Props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        fn && fn()
        navigate('/')
    }

    return (
        <button onClick={handleClick}>
            <img className='w-[30px] sm:w-[40px]' src="/images/undplogo.png" alt="" />
        </button>
    )
}

export default Logo