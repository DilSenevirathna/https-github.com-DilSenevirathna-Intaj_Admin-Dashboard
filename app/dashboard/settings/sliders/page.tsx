"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, ImageIcon, Edit, Trash2, Eye, Plus, Move } from "lucide-react"

const sliderImages = [
  {
    id: 1,
    title: "Summer Wedding Special",
    description: "Book your dream summer wedding with exclusive packages",
    image: "/placeholder.svg?height=200&width=400",
    link: "/weddings",
    position: 1,
    status: "Active",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
  },
  {
    id: 2,
    title: "Corporate Event Solutions",
    description: "Professional event planning for your business needs",
    image: "/placeholder.svg?height=200&width=400",
    link: "/corporate",
    position: 2,
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
  {
    id: 3,
    title: "Birthday Party Packages",
    description: "Make every birthday celebration memorable",
    image: "/placeholder.svg?height=200&width=400",
    link: "/birthdays",
    position: 3,
    status: "Inactive",
    startDate: "2024-02-01",
    endDate: "2024-05-31",
  },
  {
    id: 4,
    title: "Photography Services",
    description: "Capture your special moments with professional photographers",
    image: "/placeholder.svg?height=200&width=400",
    link: "/photography",
    position: 4,
    status: "Scheduled",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
  },
]

export default function SlidersPage() {
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [selectedSlider, setSelectedSlider] = useState<any>(null)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    startDate: "",
    endDate: "",
    status: "active",
  })

  const handleAddSlider = () => {
    setFormData({
      title: "",
      description: "",
      link: "",
      startDate: "",
      endDate: "",
      status: "active",
    })
    setShowAddDialog(true)
  }

  const handleEditSlider = (slider: any) => {
    setSelectedSlider(slider)
    setFormData({
      title: slider.title,
      description: slider.description,
      link: slider.link,
      startDate: slider.startDate,
      endDate: slider.endDate,
      status: slider.status.toLowerCase(),
    })
    setShowEditDialog(true)
  }

  const handleSaveSlider = () => {
    console.log("Saving slider:", formData)
    setShowAddDialog(false)
    setShowEditDialog(false)
    setSelectedSlider(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400"
      case "Inactive":
        return "bg-red-500/20 text-red-400"
      case "Scheduled":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Image Slider Management</h2>
          <p className="text-white/60">Manage homepage slider images and content</p>
        </div>
        <Button
          onClick={handleAddSlider}
          className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300"
        >
          <Plus size={18} />
          <span>Add Slider</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Sliders</p>
              <p className="text-white text-2xl font-bold">{sliderImages.length}</p>
            </div>
            <ImageIcon className="text-orange-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Active</p>
              <p className="text-white text-2xl font-bold">
                {sliderImages.filter((s) => s.status === "Active").length}
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Scheduled</p>
              <p className="text-white text-2xl font-bold">
                {sliderImages.filter((s) => s.status === "Scheduled").length}
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Inactive</p>
              <p className="text-white text-2xl font-bold">
                {sliderImages.filter((s) => s.status === "Inactive").length}
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-white text-lg font-semibold mb-4">Current Slider Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sliderImages.map((slider) => (
            <div
              key={slider.id}
              className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative">
                <img src={slider.image || "/placeholder.svg"} alt={slider.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(slider.status)}`}>
                    {slider.status}
                  </span>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">#{slider.position}</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-2">{slider.title}</h4>
                <p className="text-white/60 text-sm mb-3 line-clamp-2">{slider.description}</p>
                <div className="text-white/60 text-xs mb-3">
                  <div>Start: {slider.startDate}</div>
                  <div>End: {slider.endDate}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors p-1">
                      <Eye size={16} />
                    </button>
                    <button
                      className="text-yellow-400 hover:text-yellow-300 transition-colors p-1"
                      onClick={() => handleEditSlider(slider)}
                    >
                      <Edit size={16} />
                    </button>
                    <button className="text-green-400 hover:text-green-300 transition-colors p-1">
                      <Move size={16} />
                    </button>
                    <button className="text-red-400 hover:text-red-300 transition-colors p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Slider Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Slider</DialogTitle>
            <DialogDescription>Create a new slider image for the homepage</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors">
              <Upload className="mx-auto text-white/60 mb-4" size={48} />
              <h4 className="text-white text-lg font-semibold mb-2">Upload Slider Image</h4>
              <p className="text-white/60 mb-4">Recommended size: 1920x600px</p>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                Choose Image
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-white/90">Slider Title</Label>
                <Input
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Enter slider title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div>
                <Label className="text-white/90">Description</Label>
                <Input
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Enter slider description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div>
                <Label className="text-white/90">Link URL</Label>
                <Input
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Enter link URL"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white/90">Start Date</Label>
                  <Input
                    type="date"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-white/90">End Date</Label>
                  <Input
                    type="date"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label className="text-white/90">Status</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="active" className="text-white hover:bg-gray-700">
                      Active
                    </SelectItem>
                    <SelectItem value="inactive" className="text-white hover:bg-gray-700">
                      Inactive
                    </SelectItem>
                    <SelectItem value="scheduled" className="text-white hover:bg-gray-700">
                      Scheduled
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveSlider} className="bg-orange-600 hover:bg-orange-700">
                Create Slider
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Slider Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Slider</DialogTitle>
            <DialogDescription>Update slider information</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-white/90">Slider Title</Label>
              <Input
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-white/90">Description</Label>
              <Input
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-white/90">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="active" className="text-white hover:bg-gray-700">
                    Active
                  </SelectItem>
                  <SelectItem value="inactive" className="text-white hover:bg-gray-700">
                    Inactive
                  </SelectItem>
                  <SelectItem value="scheduled" className="text-white hover:bg-gray-700">
                    Scheduled
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveSlider} className="bg-orange-600 hover:bg-orange-700">
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
