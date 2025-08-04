"use client"

import { useState } from "react"
import { Search, Filter, Plus, Eye, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Vendor", status: "Active" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Mike Davis", email: "mike@example.com", role: "User", status: "Active" },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">User Management</h2>
        <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
          <Plus size={18} />
          <span>Add User</span>
        </Button>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search users..."
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
                <th className="text-left text-white/80 py-3">Name</th>
                <th className="text-left text-white/80 py-3">Email</th>
                <th className="text-left text-white/80 py-3">Role</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4">{user.name}</td>
                  <td className="text-white/80 py-4">{user.email}</td>
                  <td className="text-white/80 py-4">{user.role}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors p-1">
                        <Eye size={16} />
                      </button>
                      <button className="text-yellow-400 hover:text-yellow-300 transition-colors p-1">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-400 hover:text-red-300 transition-colors p-1">
                        <Trash2 size={16} />
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
