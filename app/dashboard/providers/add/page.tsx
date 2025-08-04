"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, User, Mail, Phone, MapPin, Globe, Upload, FileText, Eye } from "lucide-react"

export default function AddProviderPage() {
  const [formData, setFormData] = useState({
    // Basic Info
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    alternatePhone: "",
    website: "",

    // Business Details
    businessType: "",
    category: "",
    subCategory: "",
    experience: "",
    description: "",

    // Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Settings
    status: "pending",
    featured: false,
    verified: false,
  })

  const [documents, setDocuments] = useState<File[]>([])
  const [logo, setLogo] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating provider:", formData)
    // Add provider creation logic here
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Add Solution Provider</h2>
          <p className="text-white/60">Register a new service provider on the platform</p>
        </div>
        <Button
          variant="outline"
          className="bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="basic" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg border border-white/20">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                  <User className="mr-2" size={20} />
                  Basic Information
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white/90">Business Name</Label>
                    <div className="relative">
                      <Building2
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60"
                        size={18}
                      />
                      <Input
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter business name"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/90">Contact Person</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                      <Input
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter contact person name"
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                        <Input
                          type="email"
                          className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                        <Input
                          type="tel"
                          className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">Alternate Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                        <Input
                          type="tel"
                          className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                          placeholder="Enter alternate phone"
                          value={formData.alternatePhone}
                          onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">Website</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                        <Input
                          type="url"
                          className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                          placeholder="Enter website URL"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                  <Building2 className="mr-2" size={20} />
                  Business Details
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">Business Type</Label>
                      <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="llc" className="text-white hover:bg-gray-700">
                            LLC
                          </SelectItem>
                          <SelectItem value="corporation" className="text-white hover:bg-gray-700">
                            Corporation
                          </SelectItem>
                          <SelectItem value="partnership" className="text-white hover:bg-gray-700">
                            Partnership
                          </SelectItem>
                          <SelectItem value="sole-proprietorship" className="text-white hover:bg-gray-700">
                            Sole Proprietorship
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">Years of Experience</Label>
                      <Input
                        type="number"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter years of experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">Primary Category</Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="photography" className="text-white hover:bg-gray-700">
                            Photography
                          </SelectItem>
                          <SelectItem value="catering" className="text-white hover:bg-gray-700">
                            Catering
                          </SelectItem>
                          <SelectItem value="decoration" className="text-white hover:bg-gray-700">
                            Decoration
                          </SelectItem>
                          <SelectItem value="music-dj" className="text-white hover:bg-gray-700">
                            Music & DJ
                          </SelectItem>
                          <SelectItem value="venue" className="text-white hover:bg-gray-700">
                            Venue
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">Sub Category</Label>
                      <Select onValueChange={(value) => handleInputChange("subCategory", value)}>
                        <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                          <SelectValue placeholder="Select sub category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="wedding" className="text-white hover:bg-gray-700">
                            Wedding
                          </SelectItem>
                          <SelectItem value="corporate" className="text-white hover:bg-gray-700">
                            Corporate
                          </SelectItem>
                          <SelectItem value="birthday" className="text-white hover:bg-gray-700">
                            Birthday
                          </SelectItem>
                          <SelectItem value="anniversary" className="text-white hover:bg-gray-700">
                            Anniversary
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/90">Business Description</Label>
                    <Textarea
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 min-h-[120px]"
                      placeholder="Describe your business and services"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Business Location
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white/90">Street Address</Label>
                    <Input
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="Enter street address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">City</Label>
                      <Input
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">State/Province</Label>
                      <Input
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter state/province"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">ZIP/Postal Code</Label>
                      <Input
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter ZIP/postal code"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">Country</Label>
                      <Select onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="us" className="text-white hover:bg-gray-700">
                            United States
                          </SelectItem>
                          <SelectItem value="ca" className="text-white hover:bg-gray-700">
                            Canada
                          </SelectItem>
                          <SelectItem value="uk" className="text-white hover:bg-gray-700">
                            United Kingdom
                          </SelectItem>
                          <SelectItem value="au" className="text-white hover:bg-gray-700">
                            Australia
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                  <FileText className="mr-2" size={20} />
                  Required Documents
                </h3>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors">
                    <Upload className="mx-auto text-white/60 mb-4" size={48} />
                    <h4 className="text-white text-lg font-semibold mb-2">Upload Business Documents</h4>
                    <p className="text-white/60 mb-4">
                      Upload business license, certifications, and other required documents
                    </p>
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                      Choose Files
                    </Button>
                  </div>

                  <div className="text-left">
                    <h4 className="text-white font-semibold mb-2">Required Documents:</h4>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>• Business License or Registration Certificate</li>
                      <li>• Professional Certifications (if applicable)</li>
                      <li>• Insurance Certificate</li>
                      <li>• Portfolio or Work Samples</li>
                      <li>• References or Testimonials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Logo Upload */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4">Business Logo</h3>
            <div className="space-y-4">
              {logo ? (
                <div className="relative">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt="Business logo"
                    className="w-full h-32 object-contain rounded-lg bg-white/5"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                    onClick={() => setLogo(null)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors">
                  <Upload className="mx-auto text-white/60 mb-2" size={32} />
                  <p className="text-white/60 text-sm mb-2">Upload business logo</p>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" id="logo-upload" />
                  <label htmlFor="logo-upload">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                      onClick={() => document.getElementById("logo-upload")?.click()}
                    >
                      Choose Logo
                    </Button>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4">Provider Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white/90">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                  <SelectTrigger className="w-32 bg-white/10 border border-white/20 rounded-lg text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="pending" className="text-white hover:bg-gray-700">
                      Pending
                    </SelectItem>
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
                <Label className="text-white/90">Featured Provider</Label>
                <Switch
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleInputChange("featured", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-white/90">Verified Business</Label>
                <Switch
                  checked={formData.verified}
                  onCheckedChange={(checked) => handleInputChange("verified", checked)}
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
              Create Provider
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
