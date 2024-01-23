import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { SubmitHandler, useForm } from 'react-hook-form';
import { regions } from '../lib/constants/regions';
import { genders } from '../lib/constants/genders';
import { useUserStore } from '../stores/useUserStore';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { useTranslation } from 'react-i18next';

interface FormProps {
    fullname: string;
    email: string;
    password: string;
}

interface Props {
    onChangeForm: () => void;
}

const SignUpForm = ({ onChangeForm }: Props) => {
    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        defaultValues: {
            email: '',
            fullname: '',
            password: ''
        }
    })
    const setIsModalActive = useUserStore((state) => state.setIsModalActive)
    const registerUserApi = useUserStore((state) => state.registerUserApi)
    const isLoading = useUserStore((state) => state.registerLoading)
    const [region, setRegion] = React.useState('')
    const [gender, setGender] = React.useState('')
    const date = new Date().getFullYear() + '-' + new Date().getDate() + '-' + new Date().getDay()
    const onSubmit: SubmitHandler<FormProps> = async ({ fullname, email, password }) => {
        const data = {
            fullname,
            email,
            password,
            region,
            gender,
            date
        }
        registerUserApi(data)
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-black font-[600] text-[18px]'>Sign up</h2>
                <button onClick={setIsModalActive}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 mt-6'>
                <Input register={register('fullname', { required: true })} placeholder={t('fullname') + ' / Nazar Jumayew'} errorType={errors.fullname?.type} />
                <Input register={register('email', { required: true })} placeholder={t('email')} type='email' errorType={errors.email?.type} />
                <Input register={register('password', { required: true })} placeholder={t('password')} type='password' errorType={errors.password?.type} />
                <Select active={region} setActive={setRegion} content={regions} defaultValue={t('region')} />
                <Select active={gender} setActive={setGender} content={genders} defaultValue={t('gender')} />
                <Button disabled={!region || !gender} isLoading={isLoading} className="!bg-primary w-full mt-2" title={t('signup')} />
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>{t('alreadyhaveanaccount')} <span className='text-primary'>{t('signin')}</span> </button>
        </>
    )
}

export default SignUpForm