"use client"

import { useState } from "react"
import { Search, Filter, Plus, Eye, Edit, Trash2, Megaphone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const advertisements = [
  {
    id: 1,
    title: "Summer Wedding Package",
    description: "Special discount for summer weddings",
    placement: "Home Page Banner",
    advertiser: "Elite Wedding Planners",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    status: "Active",
    impressions: 15420,
    clicks: 892,
    budget: "$2,500",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 2,
    title: "Photography Discount",
    description: "20% off professional photography services",
    placement: "Category Page Sidebar",
    advertiser: "ABC Photography Studio",
    startDate: "2024-01-10",
    endDate: "2024-05-15",
    status: "Active",
    impressions: 8750,
    clicks: 445,
    budget: "$1,800",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 3,
    title: "Catering Special Offer",
    description: "Free appetizers with catering bookings",
    placement: "Home Page Banner",
    advertiser: "Gourmet Catering Co",
    startDate: "2024-01-01",
    endDate: "2024-04-20",
    status: "Expired",
    impressions: 22100,
    clicks: 1205,
    budget: "$3,200",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 4,
    title: "DJ Services Promotion",
    description: "Book now and save on DJ services",
    placement: "Search Results",
    advertiser: "Sound Masters DJ",
    startDate: "2024-02-01",
    endDate: "2024-07-31",
    status: "Scheduled",
    impressions: 0,
    clicks: 0,
    budget: "$1,500",
    image: "/placeholder.svg?height=80&width=120",
  },
]

export default function AdsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAds = advertisements.filter(
    (ad) =>
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.advertiser.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.placement.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400"
      case "Expired":
        return "bg-red-500/20 text-red-400"
      case "Scheduled":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getPlacementColor = (placement: string) => {
    switch (placement) {
      case "Home Page Banner":
        return "bg-purple-500/20 text-purple-400"
      case "Category Page Sidebar":
        return "bg-blue-500/20 text-blue-400"
      case "Search Results":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Advertisement Management</h2>
          <p className="text-white/60">Manage ads and their placements across the platform</p>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
          <Plus size={18} />
          <span>Create Ad</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Ads</p>
              <p className="text-white text-2xl font-bold">{advertisements.length}</p>
            </div>
            <Megaphone className="text-orange-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Active Ads</p>
              <p className="text-white text-2xl font-bold">
                {advertisements.filter((ad) => ad.status === "Active").length}
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Impressions</p>
              <p className="text-white text-2xl font-bold">
                {advertisements.reduce((acc, ad) => acc + ad.impressions, 0).toLocaleString()}
              </p>
            </div>
            <Eye className="text-blue-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Clicks</p>
              <p className="text-white text-2xl font-bold">
                {advertisements.reduce((acc, ad) => acc + ad.clicks, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search advertisements..."
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
                <th className="text-left text-white/80 py-3">Advertisement</th>
                <th className="text-left text-white/80 py-3">Advertiser</th>
                <th className="text-left text-white/80 py-3">Placement</th>
                <th className="text-left text-white/80 py-3">Duration</th>
                <th className="text-left text-white/80 py-3">Performance</th>
                <th className="text-left text-white/80 py-3">Budget</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAds.map((ad) => (
                <tr key={ad.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={ad.image || "/placeholder.svg"}
                        alt={ad.title}
                        className="w-16 h-10 object-cover rounded bg-white/10"
                      />
                      <div>
                        <div className="font-medium">{ad.title}</div>
                        <div className="text-white/60 text-sm">{ad.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-white/80 py-4">{ad.advertiser}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPlacementColor(ad.placement)}`}>
                      {ad.placement}
                    </span>
                  </td>
                  <td className="text-white/80 py-4">
                    <div className="text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {ad.startDate}
                      </div>
                      <div className="text-white/60">to {ad.endDate}</div>
                    </div>
                  </td>
                  <td className="text-white/80 py-4">
                    <div className="text-sm">
                      <div>{ad.impressions.toLocaleString()} views</div>
                      <div className="text-white/60">{ad.clicks} clicks</div>
                    </div>
                  </td>
                  <td className="text-white py-4 font-medium">{ad.budget}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ad.status)}`}>{ad.status}</span>
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
