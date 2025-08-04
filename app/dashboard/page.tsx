"use client"
import { Users, Building2, FileText, TrendingUp, FolderOpen } from "lucide-react"

const statsData = [
  {
    title: "Total Users",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/20",
  },
  {
    title: "Active Vendors",
    value: "89",
    change: "+8%",
    icon: Building2,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Service Requests",
    value: "456",
    change: "+23%",
    icon: FileText,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/20",
  },
  {
    title: "Revenue",
    value: "$12.5K",
    change: "+15%",
    icon: TrendingUp,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/20",
  },
]

const serviceRequests = [
  { id: 1, user: "John Doe", service: "Wedding Planning", date: "2024-01-15", status: "Pending" },
  { id: 2, user: "Jane Smith", service: "Corporate Event", date: "2024-01-20", status: "In Progress" },
  { id: 3, user: "Bob Wilson", service: "Birthday Party", date: "2024-01-25", status: "Completed" },
  { id: 4, user: "Alice Brown", service: "Anniversary", date: "2024-01-30", status: "Pending" },
  { id: 5, user: "Mike Davis", service: "Conference", date: "2024-02-05", status: "In Progress" },
]

const categories = [
  { id: 1, name: "Wedding Planning", description: "Complete wedding event services", bookings: 89 },
  { id: 2, name: "Corporate Events", description: "Business and corporate gatherings", bookings: 67 },
  { id: 3, name: "Birthday Parties", description: "Personal celebration events", bookings: 45 },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">{stat.title}</p>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
                <p className="text-green-400 text-sm">{stat.change} from last month</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-white text-lg font-semibold mb-4">Recent Service Requests</h3>
          <div className="space-y-3">
            {serviceRequests.slice(0, 5).map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">{request.user}</p>
                  <p className="text-white/60 text-sm">{request.service}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    request.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : request.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-white text-lg font-semibold mb-4">Top Categories</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-10 h-10 rounded-lg flex items-center justify-center">
                    <FolderOpen className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{category.name}</p>
                    <p className="text-white/60 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{category.bookings}</p>
                  <p className="text-white/60 text-xs">bookings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
