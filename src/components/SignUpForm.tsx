import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { useModalStore } from '../stores/useModalStore'
import { useForm } from 'react-hook-form';

interface Props {
    onChangeForm: () => void;
}

const SignUpForm = ({ onChangeForm }: Props) => {
    const { register, handleSubmit } = useForm()
    const setIsModalActive = useModalStore((state) => state.setIsModalActive)

    const onSubmit = () => { }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-black font-[600] text-[18px]'>Sign up</h2>
                <button onClick={setIsModalActive}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 mt-6'>
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Full name' />
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Email' />
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Password' />
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Region' />
                <input className='border border-[#EDEDED] w-full p-2.5 text-sm rounded-md' placeholder='Gender' />
                <div className=''>
                    <Button className="!bg-primary w-full !bg-opacity-50" title={"Sign up"} />
                </div>
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>Already have an account? <span className='text-primary'>Log in</span> </button>
        </>
    )
}

export default SignUpForm