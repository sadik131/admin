import React from 'react';
import user from "../../assets/user.png"

const UserDepartmentList = () => {
    const departments = [
        { name: "Psychiatry", status: "Pending", role: "Super Admin" },
        { name: "Orthopedic", status: "Active", role: "Admin" },
        { name: "Cardiology", status: "Active", role: "Manager" },
        { name: "Pediatrics", status: "Active", role: "Admin" },
        { name: "Neurology", status: "Active", role: "Manager" }
    ];

    return (
        <div className="bg-white h-fit rounded-lg">
            <div className="flex py-4 px-6 rounded-t-lg border-b border-[#d1d5db80] justify-between items-center">
                <h2 className="text-lg font-semibold">Users</h2>
                <button className="text-blue-600 text-sm font-medium">View All</button>
            </div>

            <div className="gap-6 flex flex-col p-5">
                {departments.map((dept, index) => (
                    <div key={index} className="flex justify-between">
                        <div className="flex justify-between items-center">
                            <img src={user} alt="User" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <span className="font-medium">{dept.name}</span>
                                <p className="text-sm text-gray-500 mt-1">{dept.role}</p>
                            </div>

                        </div>
                        <span className={`${dept.status === 'Active' ? 'text-green-800' : ' text-yellow-800'} rounded-full flex items-center`}>
                            {dept.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDepartmentList;