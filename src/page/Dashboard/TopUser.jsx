import Avatar from "../../components/ui/Avatar";

function TopUser({ users }) {

  const statusColors = {
    active: "text-green-600",
    pending: "text-yellow-600"
  };
  return (
    <div className="bg-white rounded-lg w-full">
      {/* Header */}
      <div className="flex py-4 px-6 rounded-t-lg border-b border-[#d1d5db80] justify-between items-center">
        <h2 className="text-lg font-semibold">Top Users</h2>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>

      {/* Users List */}
      <div className="p-4 space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-9 h-9 rounded-full">
                <Avatar 
                name={user.name} 
                type="user" 
                size="md"
              />
              </div>
              <div>
                <h4 className="text-textColor">{user.name}</h4>
                <p className="text-sm text-secondary">{user.role}</p>
              </div>
            </div>
            <h4 className={`${statusColors[user.status]}`}>
              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopUser