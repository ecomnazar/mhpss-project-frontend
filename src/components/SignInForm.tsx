import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { useModalStore } from '../stores/useModalStore';

interface Props {
    onChangeForm: () => void;
}

const SignInForm = ({ onChangeForm }: Props) => {
    const setIsModalActive = useModalStore((state) => state.setIsModalActive)
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-black font-[600] text-[18px]'>Sign in</h2>
                <button onClick={setIsModalActive}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form className='flex flex-col gap-y-2 mt-6'>
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Email' />
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Password' />
                <div className=''>
                    <Button className="!bg-primary w-full !bg-opacity-50" title={"Sign up"} />
                </div>
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>Don't have an account? <span className='text-primary'>Sign up</span> </button>
        </>
    )
}

export default SignInForm