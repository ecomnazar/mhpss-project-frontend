import React from 'react'
import { useUserStore } from '../stores/useUserStore'
import clsx from 'clsx'

const AdminPanelPage = () => {
    const getUsers = useUserStore((state) => state.getUsers)
    const users = useUserStore((state) => state.users)

    React.useEffect(() => {
        getUsers()
    }, [])

    return (
        <section className='px-4  py-4'>
            <ul>
                <li className='flex justify-between items-center flex-wrap mb-2'>
                    <div className='basis-[5%]'>Id</div>
                    <div className='basis-[20%]'>Full name</div>
                    <div className='basis-[10%]'>Gender</div>
                    <div className='basis-[10%]'>Region</div>
                    <div className='basis-[25%]'>Email</div>
                    <div className='basis-[10%]'>RD</div>
                    <div className='basis-[10%]'>FD</div>
                </li>
                {users?.map((user, i) => {
                    return (
                        <li key={user.id} className={clsx('flex justify-between items-center flex-wrap bg-primary mb-2 p-2 rounded-md', {
                            ['bg-opacity-20']: i % 2 === 0,
                            ['bg-opacity-0']: i % 2 !== 0
                        })}>
                            <div className='basis-[5%]'>{user.id}</div>
                            <div className='basis-[20%]'>{user.fullname}</div>
                            <div className='basis-[10%]'><div className={clsx('w-[30px] h-[30px] rounded-full', {
                                ['bg-blue-400']: user.gender === 'Male',
                                ['bg-red-400']: user.gender === 'Female',
                            })}></div></div>
                            <div className='basis-[10%]'>{user.region}</div>
                            <div className='basis-[25%]'>{user.email}</div>
                            <div className='basis-[10%]'>{user.date}</div>
                            <div className='basis-[10%]'>{user.finish_date}</div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default AdminPanelPage