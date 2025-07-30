import React from 'react'
import AddStudent from '../student/AddStudent'
import StudentExpenses from '../student/StudentExpenses'
import SutdentResults from '../student/SutdentResults'

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary gap-4">
            <AddStudent />
            <SutdentResults />
            <StudentExpenses />
        </div>
    )
}

export default Dashboard