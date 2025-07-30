import React from 'react'
import AddUser from './AddUser'
import ExamResults from './ExamResults'
import Expenses from './Expenses'

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary gap-4">
            <AddUser />
            <ExamResults />
            <Expenses />
        </div>
    )
}

export default Dashboard