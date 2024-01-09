import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/')}>
            <img className='w-[30px] sm:w-[40px]' src="/images/undplogo.png" alt="" />
        </button>
    )
}

export default Logo