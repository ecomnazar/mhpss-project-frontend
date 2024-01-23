import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai'
import { useUserStore } from '../stores/useUserStore';
import Button from './Button'
import Input from './Input';
import { useTranslation } from 'react-i18next';

interface FormProps {
    email: string;
    password: string;
}

interface Props {
    onChangeForm: () => void;
}

const SignInForm = ({ onChangeForm }: Props) => {
    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()
    const setIsModalDisable = useUserStore((state) => state.setIsModalDisable)

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
                <h2 className='text-black font-[600] text-[18px]'>{t('signin')}</h2>
                <button onClick={setIsModalDisable}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 mt-6'>
                <Input register={register('email', { required: true })} placeholder={t('signin')} type='email' errorType={errors.email?.type} />
                <Input register={register('password', { required: true })} placeholder={t('password')} type='password' errorType={errors.password?.type} />
                <Button isLoading={isLoading} className="!bg-primary w-full mt-2" title={t('signin')} />
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>{t('donthaveanaccount')} <span className='text-primary'>{t('signup')}</span> </button>
        </>
    )
}

export default SignInForm