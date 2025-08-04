"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Megaphone, Wrench, Upload, Trash2, Globe } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-white text-2xl font-bold">Settings</h2>

      <Tabs defaultValue="sliders" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sliders" className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            Image Sliders
          </TabsTrigger>
          <TabsTrigger value="ads" className="flex items-center gap-2">
            <Megaphone className="w-4 h-4" />
            Ad Placements
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex items-center gap-2">
            <Wrench className="w-4 h-4" />
            Technical
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sliders" className="space-y-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <ImageIcon className="mr-2" size={20} />
              Image Slider Management
            </h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors">
                <Upload className="mx-auto text-white/60 mb-2" size={32} />
                <p className="text-white/60 mb-2">Drag & drop images or click to browse</p>
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  Upload Images
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advertisement Management</CardTitle>
              <CardDescription>Manage ads and their placements across the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium">Active Advertisements</h4>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Ad
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "Summer Wedding Package",
                    placement: "Home Page",
                    expiry: "2024-06-30",
                    status: "Active",
                  },
                  {
                    id: 2,
                    title: "Photography Discount",
                    placement: "Category Page",
                    expiry: "2024-05-15",
                    status: "Active",
                  },
                  {
                    id: 3,
                    title: "Catering Special Offer",
                    placement: "Home Page",
                    expiry: "2024-04-20",
                    status: "Expired",
                  },
                ].map((ad) => (
                  <div key={ad.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <img
                        src={`/placeholder.svg?height=60&width=100&query=ad+banner+${ad.id}`}
                        alt={ad.title}
                        className="w-20 h-12 object-cover rounded"
                      />
                      <div>
                        <h5 className="font-medium">{ad.title}</h5>
                        <p className="text-sm text-muted-foreground">Placement: {ad.placement}</p>
                        <p className="text-sm text-muted-foreground">Expires: {ad.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ad.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {ad.status}
                      </span>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Create New Advertisement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ad-title">Advertisement Title</Label>
                      <Input id="ad-title" placeholder="Enter ad title" />
                    </div>
                    <div>
                      <Label htmlFor="ad-placement">Placement</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select placement" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Page</SelectItem>
                          <SelectItem value="category">Category Page</SelectItem>
                          <SelectItem value="sidebar">Sidebar</SelectItem>
                          <SelectItem value="footer">Footer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="ad-expiry">Expiry Date</Label>
                    <Input id="ad-expiry" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="ad-image">Upload Ad Image</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700">Create Advertisement</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <div className="grid gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <Globe className="mr-2" size={20} />
                Technical Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">SMS Gateway Provider</label>
                  <Select>
                    <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <SelectValue placeholder="Select SMS provider" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="twilio" className="text-white hover:bg-gray-700">
                        Twilio
                      </SelectItem>
                      <SelectItem value="aws-sns" className="text-white hover:bg-gray-700">
                        AWS SNS
                      </SelectItem>
                      <SelectItem value="firebase" className="text-white hover:bg-gray-700">
                        Firebase
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">API Key</label>
                  <Input
                    type="password"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Enter API key"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 rounded-lg transition-all duration-300">
                  Test SMS
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Platform Limits</CardTitle>
                <CardDescription>Configure various platform limits and restrictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="max-invitations">Max Invitations per Event</Label>
                    <Input id="max-invitations" type="number" defaultValue="100" />
                  </div>
                  <div>
                    <Label htmlFor="featured-vendors">Max Featured Vendors per Category</Label>
                    <Select defaultValue="5">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 Vendors</SelectItem>
                        <SelectItem value="5">5 Vendors</SelectItem>
                        <SelectItem value="10">10 Vendors</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="max-file-size">Max File Upload Size (MB)</Label>
                    <Input id="max-file-size" type="number" defaultValue="10" />
                  </div>
                  <div>
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" type="number" defaultValue="30" />
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">Save Limits</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Configuration</CardTitle>
                <CardDescription>Configure email settings for notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smtp-host">SMTP Host</Label>
                    <Input id="smtp-host" placeholder="smtp.gmail.com" />
                  </div>
                  <div>
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input id="smtp-port" type="number" placeholder="587" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smtp-username">Username</Label>
                    <Input id="smtp-username" placeholder="your-email@gmail.com" />
                  </div>
                  <div>
                    <Label htmlFor="smtp-password">Password</Label>
                    <Input id="smtp-password" type="password" placeholder="App password" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="email-notifications" />
                  <Label htmlFor="email-notifications">Enable email notifications</Label>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Test Email</Button>
                  <Button className="bg-orange-600 hover:bg-orange-700">Save Email Settings</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
