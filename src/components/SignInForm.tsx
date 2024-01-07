import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { useModalStore } from '../stores/useModalStore';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './Input';

interface FormProps {
    email: string;
    password: string;
}

interface Props {
    onChangeForm: () => void;
}

const SignInForm = ({ onChangeForm }: Props) => {
    const setIsModalActive = useModalStore((state) => state.setIsModalActive)
    const { register, handleSubmit } = useForm<FormProps>()

    const onSubmit: SubmitHandler<FormProps> = ({ email, password }) => {
        const data = {
            email,
            password
        }
        console.log(data);
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-black font-[600] text-[18px]'>Sign in</h2>
                <button onClick={setIsModalActive}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 mt-6'>
                <Input register={register('email')} placeholder='Email' type='email' />
                <Input register={register('password')} placeholder='Password' type='password' />
                <Button className="!bg-primary w-full !bg-opacity-50" title={"Sign up"} />
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>Don't have an account? <span className='text-primary'>Sign up</span> </button>
        </>
    )
}

export default SignInForm