import React from 'react'
import { useUserStore } from '../stores/useUserStore'
import ExportToExcel from '../lib/excelExport'

const AdminPanelPage = () => {
    const getUsers = useUserStore((state) => state.getUsers)
    const users = useUserStore((state) => state.users)

    React.useEffect(() => {
        getUsers()
    }, [])

    // const lastUser = users[users.length - 1]?.feedback

    return (
        <section className='w-screen h-screen flex items-center justify-center'>
            <div>
                {users.length !== 0 ? <ExportToExcel dat={users} /> : <div className='text-2xl'>Loading...</div>}
            </div>
        </section>
    )
}

export default AdminPanelPage