"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Shield, Server, Key } from "lucide-react"

export default function TechnicalConfigPage() {
  const [smsConfig, setSmsConfig] = useState({
    provider: "twilio",
    apiKey: "",
    apiSecret: "",
    fromNumber: "",
    enabled: true,
  })

  const [emailConfig, setEmailConfig] = useState({
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    username: "",
    password: "",
    fromEmail: "",
    enabled: true,
  })

  const [systemConfig, setSystemConfig] = useState({
    maxFileSize: "10",
    sessionTimeout: "30",
    maxInvitations: "100",
    featuredVendors: "5",
    maintenanceMode: false,
    debugMode: false,
  })

  const handleSmsConfigChange = (field: string, value: string | boolean) => {
    setSmsConfig((prev) => ({ ...prev, [field]: value }))
  }

  const handleEmailConfigChange = (field: string, value: string | boolean) => {
    setEmailConfig((prev) => ({ ...prev, [field]: value }))
  }

  const handleSystemConfigChange = (field: string, value: string | boolean) => {
    setSystemConfig((prev) => ({ ...prev, [field]: value }))
  }

  const testSmsConnection = () => {
    console.log("Testing SMS connection...")
    // Add SMS test logic here
  }

  const testEmailConnection = () => {
    console.log("Testing email connection...")
    // Add email test logic here
  }

  const saveConfiguration = () => {
    console.log("Saving configuration...")
    // Add save logic here
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Technical Configuration</h2>
          <p className="text-white/60">Configure system settings and integrations</p>
        </div>
        <Button
          onClick={saveConfiguration}
          className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Save All Settings
        </Button>
      </div>

      <Tabs defaultValue="sms" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg border border-white/20">
          <TabsTrigger value="sms" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            SMS Gateway
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Config
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            System Limits
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sms">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <MessageSquare className="mr-2" size={20} />
              SMS Gateway Configuration
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-white/90">Enable SMS Service</Label>
                <Switch
                  checked={smsConfig.enabled}
                  onCheckedChange={(checked) => handleSmsConfigChange("enabled", checked)}
                />
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-white/90">SMS Provider</Label>
                  <Select
                    value={smsConfig.provider}
                    onValueChange={(value) => handleSmsConfigChange("provider", value)}
                  >
                    <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                      <SelectValue />
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
                      <SelectItem value="nexmo" className="text-white hover:bg-gray-700">
                        Nexmo
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/90">API Key</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                      <Input
                        type="password"
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="Enter API key"
                        value={smsConfig.apiKey}
                        onChange={(e) => handleSmsConfigChange("apiKey", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white/90">API Secret</Label>
                    <Input
                      type="password"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="Enter API secret"
                      value={smsConfig.apiSecret}
                      onChange={(e) => handleSmsConfigChange("apiSecret", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white/90">From Number</Label>
                  <Input
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    placeholder="Enter from number (e.g., +1234567890)"
                    value={smsConfig.fromNumber}
                    onChange={(e) => handleSmsConfigChange("fromNumber", e.target.value)}
                  />
                </div>

                <Button
                  onClick={testSmsConnection}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg transition-all duration-300"
                >
                  Test SMS Connection
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="email">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Mail className="mr-2" size={20} />
              Email Configuration
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-white/90">Enable Email Service</Label>
                <Switch
                  checked={emailConfig.enabled}
                  onCheckedChange={(checked) => handleEmailConfigChange("enabled", checked)}
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/90">SMTP Host</Label>
                    <div className="relative">
                      <Server className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                      <Input
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="smtp.gmail.com"
                        value={emailConfig.smtpHost}
                        onChange={(e) => handleEmailConfigChange("smtpHost", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white/90">SMTP Port</Label>
                    <Input
                      type="number"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="587"
                      value={emailConfig.smtpPort}
                      onChange={(e) => handleEmailConfigChange("smtpPort", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/90">Username</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                      <Input
                        type="email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        placeholder="your-email@gmail.com"
                        value={emailConfig.username}
                        onChange={(e) => handleEmailConfigChange("username", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white/90">Password</Label>
                    <Input
                      type="password"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      placeholder="App password"
                      value={emailConfig.password}
                      onChange={(e) => handleEmailConfigChange("password", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white/90">From Email Address</Label>
                  <Input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    placeholder="noreply@intaj.com"
                    value={emailConfig.fromEmail}
                    onChange={(e) => handleEmailConfigChange("fromEmail", e.target.value)}
                  />
                </div>

                <Button
                  onClick={testEmailConnection}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 rounded-lg transition-all duration-300"
                >
                  Test Email Connection
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="system">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Server className="mr-2" size={20} />
              System Limits & Configuration
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-white/90">Max File Upload Size (MB)</Label>
                  <Input
                    type="number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    value={systemConfig.maxFileSize}
                    onChange={(e) => handleSystemConfigChange("maxFileSize", e.target.value)}
                  />
                </div>

                <div>
                  <Label className="text-white/90">Session Timeout (minutes)</Label>
                  <Input
                    type="number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    value={systemConfig.sessionTimeout}
                    onChange={(e) => handleSystemConfigChange("sessionTimeout", e.target.value)}
                  />
                </div>

                <div>
                  <Label className="text-white/90">Max Invitations per Event</Label>
                  <Input
                    type="number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                    value={systemConfig.maxInvitations}
                    onChange={(e) => handleSystemConfigChange("maxInvitations", e.target.value)}
                  />
                </div>

                <div>
                  <Label className="text-white/90">Max Featured Vendors per Category</Label>
                  <Select
                    value={systemConfig.featuredVendors}
                    onValueChange={(value) => handleSystemConfigChange("featuredVendors", value)}
                  >
                    <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="3" className="text-white hover:bg-gray-700">
                        3 Vendors
                      </SelectItem>
                      <SelectItem value="5" className="text-white hover:bg-gray-700">
                        5 Vendors
                      </SelectItem>
                      <SelectItem value="10" className="text-white hover:bg-gray-700">
                        10 Vendors
                      </SelectItem>
                      <SelectItem value="unlimited" className="text-white hover:bg-gray-700">
                        Unlimited
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white/90">Maintenance Mode</Label>
                    <p className="text-white/60 text-sm">Enable to show maintenance page to users</p>
                  </div>
                  <Switch
                    checked={systemConfig.maintenanceMode}
                    onCheckedChange={(checked) => handleSystemConfigChange("maintenanceMode", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white/90">Debug Mode</Label>
                    <p className="text-white/60 text-sm">Enable detailed error logging (development only)</p>
                  </div>
                  <Switch
                    checked={systemConfig.debugMode}
                    onCheckedChange={(checked) => handleSystemConfigChange("debugMode", checked)}
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Shield className="mr-2" size={20} />
              Security Configuration
            </h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    API Keys & Tokens
                  </CardTitle>
                  <CardDescription>Manage API keys for external integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Google Maps API Key</Label>
                    <Input type="password" placeholder="Enter Google Maps API key" />
                  </div>
                  <div>
                    <Label>Payment Gateway API Key</Label>
                    <Input type="password" placeholder="Enter payment gateway API key" />
                  </div>
                  <div>
                    <Label>Social Login Keys</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input type="password" placeholder="Facebook App ID" />
                      <Input type="password" placeholder="Google Client ID" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>Configure security policies and restrictions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>IP Whitelist</Label>
                      <p className="text-sm text-muted-foreground">Restrict admin access to specific IPs</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Rate Limiting</Label>
                      <p className="text-sm text-muted-foreground">Enable API rate limiting</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
