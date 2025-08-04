"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, Shield, UserPlus, Upload, Eye, EyeOff } from "lucide-react"

export default function UserRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    department: "",
    location: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating user:", formData)
    // Add user creation logic here
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">User Registration</h2>
          <p className="text-white/60">Create new user accounts for the platform</p>
        </div>
      </div>

      <Tabs defaultValue="single" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-lg border border-white/20">
          <TabsTrigger value="single" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Single User
          </TabsTrigger>
          <TabsTrigger value="bulk" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Bulk Import
          </TabsTrigger>
        </TabsList>

        <TabsContent value="single">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/90">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                    <Input
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                    <Input
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

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

                <div className="space-y-2">
                  <Label className="text-white/90">Password</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-4 pr-12 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="Create password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90">Confirm Password</Label>
                  <Input
                    type="password"
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-4 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90">Role</Label>
                  <div className="relative">
                    <Shield
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 z-10"
                      size={18}
                    />
                    <Select onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="admin" className="text-white hover:bg-gray-700">
                          Admin
                        </SelectItem>
                        <SelectItem value="manager" className="text-white hover:bg-gray-700">
                          Manager
                        </SelectItem>
                        <SelectItem value="user" className="text-white hover:bg-gray-700">
                          User
                        </SelectItem>
                        <SelectItem value="vendor" className="text-white hover:bg-gray-700">
                          Vendor
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                    <Input
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="Enter location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Create User
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="bulk">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-center space-y-6">
              <div className="border-2 border-dashed border-white/20 rounded-lg p-12 hover:border-white/40 transition-colors">
                <Upload className="mx-auto text-white/60 mb-4" size={48} />
                <h3 className="text-white text-lg font-semibold mb-2">Upload CSV File</h3>
                <p className="text-white/60 mb-4">
                  Upload a CSV file with user information to create multiple accounts
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                  Choose File
                </Button>
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold mb-2">CSV Format Requirements:</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>• First Name, Last Name, Email, Phone, Role, Location</li>
                  <li>• Maximum 100 users per upload</li>
                  <li>• Email addresses must be unique</li>
                  <li>• Supported roles: admin, manager, user, vendor</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
