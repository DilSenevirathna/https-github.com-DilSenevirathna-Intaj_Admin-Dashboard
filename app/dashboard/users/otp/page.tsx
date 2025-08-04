"use client"

import { useState } from "react"
import { Search, Filter, Eye, RotateCcw, Send, Shield, Clock, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const otpRequests = [
  {
    id: 1,
    user: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    otpCode: "123456",
    status: "Pending",
    requestTime: "2024-01-20 10:30 AM",
    expiryTime: "2024-01-20 10:35 AM",
    attempts: 1,
    maxAttempts: 3,
  },
  {
    id: 2,
    user: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 234-5678",
    otpCode: "789012",
    status: "Verified",
    requestTime: "2024-01-20 09:15 AM",
    expiryTime: "2024-01-20 09:20 AM",
    attempts: 1,
    maxAttempts: 3,
  },
  {
    id: 3,
    user: "Bob Wilson",
    email: "bob@example.com",
    phone: "+1 (555) 345-6789",
    otpCode: "345678",
    status: "Expired",
    requestTime: "2024-01-20 08:45 AM",
    expiryTime: "2024-01-20 08:50 AM",
    attempts: 3,
    maxAttempts: 3,
  },
  {
    id: 4,
    user: "Alice Brown",
    email: "alice@example.com",
    phone: "+1 (555) 456-7890",
    otpCode: "901234",
    status: "Failed",
    requestTime: "2024-01-20 08:00 AM",
    expiryTime: "2024-01-20 08:05 AM",
    attempts: 3,
    maxAttempts: 3,
  },
]

export default function OTPConfirmationPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRequests = otpRequests.filter(
    (request) =>
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.phone.includes(searchTerm),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-green-500/20 text-green-400"
      case "Failed":
        return "bg-red-500/20 text-red-400"
      case "Expired":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-yellow-500/20 text-yellow-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Verified":
        return <CheckCircle className="w-4 h-4" />
      case "Failed":
        return <XCircle className="w-4 h-4" />
      case "Expired":
        return <Clock className="w-4 h-4" />
      default:
        return <Shield className="w-4 h-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">OTP Confirmation</h2>
          <p className="text-white/60">Monitor and manage OTP verification requests</p>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
          <Send size={18} />
          <span>Send Bulk OTP</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Requests</p>
              <p className="text-white text-2xl font-bold">{otpRequests.length}</p>
            </div>
            <Shield className="text-white/60" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Verified</p>
              <p className="text-white text-2xl font-bold">
                {otpRequests.filter((r) => r.status === "Verified").length}
              </p>
            </div>
            <CheckCircle className="text-green-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Pending</p>
              <p className="text-white text-2xl font-bold">
                {otpRequests.filter((r) => r.status === "Pending").length}
              </p>
            </div>
            <Clock className="text-yellow-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Failed</p>
              <p className="text-white text-2xl font-bold">{otpRequests.filter((r) => r.status === "Failed").length}</p>
            </div>
            <XCircle className="text-red-400" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search OTP requests..."
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
                <th className="text-left text-white/80 py-3">User</th>
                <th className="text-left text-white/80 py-3">Contact</th>
                <th className="text-left text-white/80 py-3">OTP Code</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Attempts</th>
                <th className="text-left text-white/80 py-3">Request Time</th>
                <th className="text-left text-white/80 py-3">Expiry</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4 font-medium">{request.user}</td>
                  <td className="text-white py-4">
                    <div className="text-sm">
                      <div>{request.email}</div>
                      <div className="text-white/60">{request.phone}</div>
                    </div>
                  </td>
                  <td className="text-white py-4">
                    <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono">{request.otpCode}</code>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(request.status)}
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                  </td>
                  <td className="text-white/80 py-4">
                    <span className={`${request.attempts >= request.maxAttempts ? "text-red-400" : "text-white"}`}>
                      {request.attempts}/{request.maxAttempts}
                    </span>
                  </td>
                  <td className="text-white/80 py-4 text-sm">{request.requestTime}</td>
                  <td className="text-white/80 py-4 text-sm">{request.expiryTime}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors p-1">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-400 hover:text-green-300 transition-colors p-1">
                        <RotateCcw size={16} />
                      </button>
                      <button className="text-orange-400 hover:text-orange-300 transition-colors p-1">
                        <Send size={16} />
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
