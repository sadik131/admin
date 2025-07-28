import React from 'react'
import AddUser from '../page/AddUser'
import ExamResults from '../page/ExamResults'
import Expenses from '../page/Expenses'

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#646464] gap-4">
            <AddUser />
            <ExamResults />
            <Expenses />
        </div>
    )
}

export default Dashboard