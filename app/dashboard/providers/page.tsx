"use client"

import { useState } from "react"
import { Search, Filter, Plus, Eye, Edit, Trash2, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const providers = [
  {
    id: 1,
    name: "ABC Photography Studio",
    email: "contact@abcphoto.com",
    phone: "+1 (555) 123-4567",
    category: "Photography",
    location: "New York, NY",
    rating: 4.8,
    reviewCount: 124,
    status: "Active",
    joinDate: "2024-01-01",
    completedJobs: 89,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Elite Catering Services",
    email: "info@elitecatering.com",
    phone: "+1 (555) 234-5678",
    category: "Catering",
    location: "Los Angeles, CA",
    rating: 4.6,
    reviewCount: 98,
    status: "Active",
    joinDate: "2024-01-05",
    completedJobs: 67,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Party Decorators Inc",
    email: "hello@partydecorators.com",
    phone: "+1 (555) 345-6789",
    category: "Decoration",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 76,
    status: "Pending",
    joinDate: "2024-01-10",
    completedJobs: 45,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Sound Masters DJ",
    email: "bookings@soundmasters.com",
    phone: "+1 (555) 456-7890",
    category: "Music & DJ",
    location: "Miami, FL",
    rating: 4.9,
    reviewCount: 156,
    status: "Active",
    joinDate: "2024-01-15",
    completedJobs: 112,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Luxury Venues Co",
    email: "reservations@luxuryvenues.com",
    phone: "+1 (555) 567-8901",
    category: "Venue",
    location: "Las Vegas, NV",
    rating: 4.5,
    reviewCount: 89,
    status: "Inactive",
    joinDate: "2024-01-20",
    completedJobs: 34,
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400"
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400"
      default:
        return "bg-red-500/20 text-red-400"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">Solution Providers</h2>
        <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
          <Plus size={18} />
          <span>Add Provider</span>
        </Button>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search providers..."
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
                <th className="text-left text-white/80 py-3">Provider</th>
                <th className="text-left text-white/80 py-3">Category</th>
                <th className="text-left text-white/80 py-3">Location</th>
                <th className="text-left text-white/80 py-3">Rating</th>
                <th className="text-left text-white/80 py-3">Jobs</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Join Date</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProviders.map((provider) => (
                <tr key={provider.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={provider.logo || "/placeholder.svg"}
                        alt={provider.name}
                        className="w-10 h-10 rounded-lg object-cover bg-white/10"
                      />
                      <div>
                        <div className="font-medium">{provider.name}</div>
                        <div className="text-white/60 text-sm">{provider.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
                      {provider.category}
                    </span>
                  </td>
                  <td className="text-white/80 py-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-white/60" />
                      <span className="text-sm">{provider.location}</span>
                    </div>
                  </td>
                  <td className="text-white/80 py-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{provider.rating}</span>
                      <span className="text-white/60 text-sm">({provider.reviewCount})</span>
                    </div>
                  </td>
                  <td className="text-white py-4 font-medium">{provider.completedJobs}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(provider.status)}`}>
                      {provider.status}
                    </span>
                  </td>
                  <td className="text-white/80 py-4">{provider.joinDate}</td>
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
