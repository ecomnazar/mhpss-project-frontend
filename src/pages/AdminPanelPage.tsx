import React from 'react'
import { useUserStore } from '../stores/useUserStore'
import clsx from 'clsx'

const AdminPanelPage = () => {
    const getUsers = useUserStore((state) => state.getUsers)
    const users = useUserStore((state) => state.users)

    React.useEffect(() => {
        getUsers()
    }, [])

    // const lastUser = users[users.length - 1]?.feedback

    return (
        <section className='p-4 relative'>
            <div className='overflow-x-scroll'>
                <ul className='table w-full'>
                    <div className='table-row whitespace-nowrap text-[15px]'>
                        <div className='table-cell p-4'>Id</div>
                        <div className='table-cell p-4'>Full name</div>
                        <div className='table-cell p-4'>Gender</div>
                        <div className='table-cell p-4'>Region</div>
                        <div className='table-cell p-4'>Email</div>
                        <div className='table-cell p-4'>Register Date</div>
                        <div className='table-cell p-4'>Finish Date</div>
                        <div className='table-cell p-4'>Feedback</div>
                        <div className='table-cell p-4'>Certificate №</div>
                    </div>
                    {users?.map((user, i) => {
                        return (
                            <div key={i} className={clsx('table-row whitespace-nowrap bg-primary text-[13px]', {
                                ['bg-opacity-20']: i % 2 === 0,
                                ['bg-opacity-0']: i % 2 !== 0
                            })}>
                                <div className='table-cell px-4 py-2 align-middle'>{user.id}</div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.fullname}</div>
                                <div className='table-cell px-4 py-2 align-middle'><div className={clsx('w-[30px] h-[30px] rounded-full', {
                                    ['bg-blue-400']: user.gender === 'Male',
                                    ['bg-red-400']: user.gender === 'Female',
                                })}></div></div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.region}</div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.email}</div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.date}</div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.finish_date}</div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.feedback}</div>
                                <div className='table-cell px-4 py-2 align-middle'>{user.certificate_key}</div>
                            </div>
                        )
                    })}
                </ul>
            </div>
            {/* <ul>
                <li className='flex justify-between items-center mb-2'>
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
            </ul> */}
        </section>
    )
}

export default AdminPanelPage