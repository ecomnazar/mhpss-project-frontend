import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai'
import { useUserStore } from '../stores/useUserStore';
import Button from './Button'
import Input from './Input';

interface FormProps {
    email: string;
    password: string;
}

interface Props {
    onChangeForm: () => void;
}

const SignInForm = ({ onChangeForm }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()
    const setIsModalActive = useUserStore((state) => state.setIsModalActive)
    const loginUserApi = useUserStore((state) => state.loginUserApi)
    const isLoading = useUserStore((state) => state.loginLoading)

    const onSubmit: SubmitHandler<FormProps> = ({ email, password }) => {
        const data = {
            email,
            password
        }
        loginUserApi(data)
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
                <Input register={register('email', { required: true })} placeholder='Email' type='email' errorType={errors.email?.type} />
                <Input register={register('password', { required: true })} placeholder='Password' type='password' errorType={errors.password?.type} />
                <Button isLoading={isLoading} className="!bg-primary w-full mt-2" title={"Sign in"} />
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>Don't have an account? <span className='text-primary'>Sign up</span> </button>
        </>
    )
}

export default SignInForm