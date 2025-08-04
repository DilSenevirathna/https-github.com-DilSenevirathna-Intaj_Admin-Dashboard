"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const trackingRequests = [
  {
    id: "REQ-001",
    user: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    service: "Wedding Photography",
    vendor: "ABC Photography Studio",
    status: "In Progress",
    progress: 65,
    lastUpdate: "2024-01-20 2:30 PM",
    nextFollowUp: "2024-01-22",
    priority: "High",
    daysActive: 5,
    milestones: [
      { name: "Initial Consultation", completed: true, date: "2024-01-15" },
      { name: "Contract Signed", completed: true, date: "2024-01-17" },
      { name: "Venue Visit", completed: false, date: "2024-01-22" },
      { name: "Final Preparation", completed: false, date: "2024-01-25" },
    ],
  },
  {
    id: "REQ-002",
    user: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 (555) 234-5678",
    service: "Corporate Catering",
    vendor: "Elite Catering Services",
    status: "Pending Response",
    progress: 25,
    lastUpdate: "2024-01-18 10:15 AM",
    nextFollowUp: "2024-01-21",
    priority: "Medium",
    daysActive: 8,
    milestones: [
      { name: "Menu Planning", completed: true, date: "2024-01-12" },
      { name: "Quote Approval", completed: false, date: "2024-01-20" },
      { name: "Final Headcount", completed: false, date: "2024-01-23" },
      { name: "Event Execution", completed: false, date: "2024-01-25" },
    ],
  },
  {
    id: "REQ-003",
    user: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    service: "Birthday DJ Service",
    vendor: "Sound Masters DJ",
    status: "Completed",
    progress: 100,
    lastUpdate: "2024-01-19 6:00 PM",
    nextFollowUp: "Follow-up Complete",
    priority: "Low",
    daysActive: 12,
    milestones: [
      { name: "Music Selection", completed: true, date: "2024-01-08" },
      { name: "Equipment Setup", completed: true, date: "2024-01-18" },
      { name: "Event Performance", completed: true, date: "2024-01-19" },
      { name: "Cleanup & Feedback", completed: true, date: "2024-01-19" },
    ],
  },
]

export default function TrackFollowupPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRequests = trackingRequests.filter(
    (request) =>
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.vendor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400"
      case "In Progress":
        return "bg-blue-500/20 text-blue-400"
      case "Pending Response":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-400"
      case "Medium":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-green-500/20 text-green-400"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 50) return "bg-blue-500"
    if (progress >= 25) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Track & Follow-up</h2>
          <p className="text-white/60">Monitor service request progress and manage follow-ups</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
            <Calendar size={18} />
            <span>Schedule Follow-up</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Active Requests</p>
              <p className="text-white text-2xl font-bold">
                {trackingRequests.filter((r) => r.status !== "Completed").length}
              </p>
            </div>
            <Clock className="text-blue-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Completed</p>
              <p className="text-white text-2xl font-bold">
                {trackingRequests.filter((r) => r.status === "Completed").length}
              </p>
            </div>
            <CheckCircle className="text-green-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Need Follow-up</p>
              <p className="text-white text-2xl font-bold">
                {trackingRequests.filter((r) => r.status === "Pending Response").length}
              </p>
            </div>
            <AlertCircle className="text-orange-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Avg Progress</p>
              <p className="text-white text-2xl font-bold">
                {Math.round(trackingRequests.reduce((acc, req) => acc + req.progress, 0) / trackingRequests.length)}%
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search requests to track..."
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
                <th className="text-left text-white/80 py-3">Request</th>
                <th className="text-left text-white/80 py-3">Vendor</th>
                <th className="text-left text-white/80 py-3">Progress</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Priority</th>
                <th className="text-left text-white/80 py-3">Last Update</th>
                <th className="text-left text-white/80 py-3">Next Follow-up</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4">
                    <div>
                      <div className="font-medium">{request.id}</div>
                      <div className="text-sm text-white/60">{request.user}</div>
                      <div className="text-sm text-white/60">{request.service}</div>
                    </div>
                  </td>
                  <td className="text-white/80 py-4">{request.vendor}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-white/20 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressColor(request.progress)}`}
                          style={{ width: `${request.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm font-medium">{request.progress}%</span>
                    </div>
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
                  <td className="text-white/80 py-4 text-sm">{request.lastUpdate}</td>
                  <td className="text-white/80 py-4 text-sm">
                    {request.nextFollowUp === "Follow-up Complete" ? (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        Complete
                      </Badge>
                    ) : (
                      request.nextFollowUp
                    )}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors p-1">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-400 hover:text-green-300 transition-colors p-1">
                        <MessageSquare size={16} />
                      </button>
                      <button className="text-orange-400 hover:text-orange-300 transition-colors p-1">
                        <Phone size={16} />
                      </button>
                      <button className="text-purple-400 hover:text-purple-300 transition-colors p-1">
                        <Mail size={16} />
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
