"use client"

import { useState } from "react"
import { Search, Filter, Plus, Eye, MessageSquare, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const requests = [
  {
    id: "REQ-001",
    user: "John Doe",
    email: "john@example.com",
    service: "Wedding Photography",
    category: "Photography",
    status: "Pending",
    priority: "High",
    date: "2024-01-15",
    budget: "$2,000",
  },
  {
    id: "REQ-002",
    user: "Sarah Smith",
    email: "sarah@example.com",
    service: "Birthday Catering",
    category: "Catering",
    status: "In Progress",
    priority: "Medium",
    date: "2024-01-14",
    budget: "$1,500",
  },
  {
    id: "REQ-003",
    user: "Mike Johnson",
    email: "mike@example.com",
    service: "Corporate Event DJ",
    category: "Music & DJ",
    status: "Completed",
    priority: "Low",
    date: "2024-01-13",
    budget: "$800",
  },
  {
    id: "REQ-004",
    user: "Emily Brown",
    email: "emily@example.com",
    service: "Anniversary Decoration",
    category: "Decoration",
    status: "Assigned",
    priority: "Medium",
    date: "2024-01-12",
    budget: "$1,200",
  },
]

export default function RequestsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRequests = requests.filter(
    (request) =>
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400"
      case "In Progress":
        return "bg-blue-500/20 text-blue-400"
      case "Assigned":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-yellow-500/20 text-yellow-400"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-400"
      case "Medium":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">Service Requests</h2>
        <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
          <Plus size={18} />
          <span>Add Request</span>
        </Button>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search requests..."
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white flex items-center space-x-2 hover:bg-white/20 transition-all duration-300">
            <Filter size={18} />
            <span>Filter</span>
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white/80 py-3">Request ID</th>
                <th className="text-left text-white/80 py-3">User</th>
                <th className="text-left text-white/80 py-3">Service</th>
                <th className="text-left text-white/80 py-3">Category</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Priority</th>
                <th className="text-left text-white/80 py-3">Date</th>
                <th className="text-left text-white/80 py-3">Budget</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4 font-medium">{request.id}</td>
                  <td className="text-white py-4">
                    <div>
                      <div className="font-medium">{request.user}</div>
                      <div className="text-white/60 text-sm">{request.email}</div>
                    </div>
                  </td>
                  <td className="text-white/80 py-4">{request.service}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
                      {request.category}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="text-white/80 py-4">{request.date}</td>
                  <td className="text-white/80 py-4">{request.budget}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors p-1">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-400 hover:text-green-300 transition-colors p-1">
                        <MessageSquare size={16} />
                      </button>
                      <button className="text-purple-400 hover:text-purple-300 transition-colors p-1">
                        <UserCheck size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
