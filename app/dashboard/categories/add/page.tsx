"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { FolderOpen, Upload, ImageIcon, Tag, Palette, Eye } from "lucide-react"

export default function AddCategoryPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parentCategory: "",
    status: "active",
    featured: false,
    sortOrder: "",
    metaTitle: "",
    metaDescription: "",
    color: "#f97316",
  })

  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating category:", formData)
    // Add category creation logic here
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Add New Category</h2>
          <p className="text-white/60">Create a new service category for the platform</p>
        </div>
        <Button
          variant="outline"
          className="bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <FolderOpen className="mr-2" size={20} />
              Basic Information
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white/90">Category Name</Label>
                <Input
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Enter category name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white/90">Description</Label>
                <Textarea
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 min-h-[100px]"
                  placeholder="Enter category description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white/90">Parent Category</Label>
                  <Select onValueChange={(value) => handleInputChange("parentCategory", value)}>
                    <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                      <SelectValue placeholder="Select parent category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="none" className="text-white hover:bg-gray-700">
                        None (Root Category)
                      </SelectItem>
                      <SelectItem value="events" className="text-white hover:bg-gray-700">
                        Events
                      </SelectItem>
                      <SelectItem value="services" className="text-white hover:bg-gray-700">
                        Services
                      </SelectItem>
                      <SelectItem value="venues" className="text-white hover:bg-gray-700">
                        Venues
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90">Sort Order</Label>
                  <Input
                    type="number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    placeholder="Enter sort order"
                    value={formData.sortOrder}
                    onChange={(e) => handleInputChange("sortOrder", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/90">Category Color</Label>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Palette className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                    <Input
                      type="color"
                      className="w-20 h-12 bg-white/10 border border-white/20 rounded-lg pl-10 cursor-pointer"
                      value={formData.color}
                      onChange={(e) => handleInputChange("color", e.target.value)}
                    />
                  </div>
                  <Input
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    placeholder="Color hex code"
                    value={formData.color}
                    onChange={(e) => handleInputChange("color", e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>

          {/* SEO Settings */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Tag className="mr-2" size={20} />
              SEO Settings
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white/90">Meta Title</Label>
                <Input
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Enter meta title"
                  value={formData.metaTitle}
                  onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white/90">Meta Description</Label>
                <Textarea
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Enter meta description"
                  value={formData.metaDescription}
                  onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Category Image */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <ImageIcon className="mr-2" size={20} />
              Category Image
            </h3>
            <div className="space-y-4">
              {previewImage ? (
                <div className="relative">
                  <img
                    src={previewImage || "/placeholder.svg"}
                    alt="Category preview"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                    onClick={() => setPreviewImage(null)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors">
                  <Upload className="mx-auto text-white/60 mb-2" size={32} />
                  <p className="text-white/60 text-sm mb-2">Upload category image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                      onClick={() => document.getElementById("image-upload")?.click()}
                    >
                      Choose Image
                    </Button>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white/90">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                  <SelectTrigger className="w-32 bg-white/10 border border-white/20 rounded-lg text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="active" className="text-white hover:bg-gray-700">
                      Active
                    </SelectItem>
                    <SelectItem value="inactive" className="text-white hover:bg-gray-700">
                      Inactive
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-white/90">Featured Category</Label>
                <Switch
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleInputChange("featured", checked)}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Create Category
            </Button>
            <Button
              variant="outline"
              className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
