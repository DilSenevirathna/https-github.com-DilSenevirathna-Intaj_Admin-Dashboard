"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Building2,
  FileText,
  TrendingUp,
  Calendar,
  DollarSign,
  Eye,
  MousePointer,
  Star,
  Download,
} from "lucide-react"

const analyticsData = {
  overview: {
    totalUsers: 1234,
    activeProviders: 89,
    totalRequests: 456,
    revenue: 12500,
    userGrowth: 12,
    providerGrowth: 8,
    requestGrowth: 23,
    revenueGrowth: 15,
  },
  userMetrics: [
    { month: "Jan", users: 850, newUsers: 120, activeUsers: 680 },
    { month: "Feb", users: 920, newUsers: 140, activeUsers: 750 },
    { month: "Mar", users: 1050, newUsers: 180, activeUsers: 820 },
    { month: "Apr", users: 1150, newUsers: 160, activeUsers: 890 },
    { month: "May", users: 1234, newUsers: 145, activeUsers: 950 },
  ],
  providerMetrics: [
    { category: "Photography", count: 25, revenue: 4500, rating: 4.8 },
    { category: "Catering", count: 18, revenue: 3200, rating: 4.6 },
    { category: "Decoration", count: 15, revenue: 2800, rating: 4.7 },
    { category: "Music & DJ", count: 12, revenue: 1800, rating: 4.9 },
    { category: "Venue", count: 19, revenue: 5200, rating: 4.5 },
  ],
  requestMetrics: [
    { status: "Completed", count: 245, percentage: 54 },
    { status: "In Progress", count: 128, percentage: 28 },
    { status: "Pending", count: 83, percentage: 18 },
  ],
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-white/60">Comprehensive insights into platform performance</p>
        </div>
        <div className="flex space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-white/10 border border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="7d" className="text-white hover:bg-gray-700">
                Last 7 days
              </SelectItem>
              <SelectItem value="30d" className="text-white hover:bg-gray-700">
                Last 30 days
              </SelectItem>
              <SelectItem value="90d" className="text-white hover:bg-gray-700">
                Last 90 days
              </SelectItem>
              <SelectItem value="1y" className="text-white hover:bg-gray-700">
                Last year
              </SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
            <Download size={18} />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Users</p>
              <p className="text-white text-2xl font-bold">{analyticsData.overview.totalUsers.toLocaleString()}</p>
              <p className="text-green-400 text-sm">+{analyticsData.overview.userGrowth}% from last month</p>
            </div>
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Users className="text-blue-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Active Providers</p>
              <p className="text-white text-2xl font-bold">{analyticsData.overview.activeProviders}</p>
              <p className="text-green-400 text-sm">+{analyticsData.overview.providerGrowth}% from last month</p>
            </div>
            <div className="bg-green-500/20 p-3 rounded-lg">
              <Building2 className="text-green-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Requests</p>
              <p className="text-white text-2xl font-bold">{analyticsData.overview.totalRequests}</p>
              <p className="text-green-400 text-sm">+{analyticsData.overview.requestGrowth}% from last month</p>
            </div>
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <FileText className="text-purple-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Revenue</p>
              <p className="text-white text-2xl font-bold">${analyticsData.overview.revenue.toLocaleString()}</p>
              <p className="text-green-400 text-sm">+{analyticsData.overview.revenueGrowth}% from last month</p>
            </div>
            <div className="bg-orange-500/20 p-3 rounded-lg">
              <DollarSign className="text-orange-400" size={24} />
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg border border-white/20">
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="providers">Provider Analytics</TabsTrigger>
          <TabsTrigger value="requests">Request Analytics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4">User Growth Trend</h3>
              <div className="space-y-4">
                {analyticsData.userMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">{metric.month}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{metric.users}</div>
                      <div className="text-white/60 text-sm">+{metric.newUsers} new</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4">User Engagement</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Eye className="text-blue-400" size={20} />
                    <span className="text-white/80">Page Views</span>
                  </div>
                  <span className="text-white font-semibold">45,230</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MousePointer className="text-green-400" size={20} />
                    <span className="text-white/80">Click Rate</span>
                  </div>
                  <span className="text-white font-semibold">3.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-purple-400" size={20} />
                    <span className="text-white/80">Avg. Session</span>
                  </div>
                  <span className="text-white font-semibold">4m 32s</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="text-orange-400" size={20} />
                    <span className="text-white/80">Bounce Rate</span>
                  </div>
                  <span className="text-white font-semibold">28.5%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="providers">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4">Provider Performance by Category</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-white/80 py-3">Category</th>
                    <th className="text-left text-white/80 py-3">Providers</th>
                    <th className="text-left text-white/80 py-3">Revenue</th>
                    <th className="text-left text-white/80 py-3">Avg. Rating</th>
                    <th className="text-left text-white/80 py-3">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.providerMetrics.map((metric, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="text-white py-4 font-medium">{metric.category}</td>
                      <td className="text-white/80 py-4">{metric.count}</td>
                      <td className="text-white/80 py-4">${metric.revenue.toLocaleString()}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-medium">{metric.rating}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="w-20 bg-white/20 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
                            style={{ width: `${(metric.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="requests">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4">Request Status Distribution</h3>
              <div className="space-y-4">
                {analyticsData.requestMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">{metric.status}</span>
                      <span className="text-white font-semibold">{metric.count}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          metric.status === "Completed"
                            ? "bg-green-500"
                            : metric.status === "In Progress"
                              ? "bg-blue-500"
                              : "bg-yellow-500"
                        }`}
                        style={{ width: `${metric.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4">Request Trends</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Average Response Time</p>
                    <p className="text-white/60 text-sm">Time to first response</p>
                  </div>
                  <span className="text-white font-semibold">2.4 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Completion Rate</p>
                    <p className="text-white/60 text-sm">Successfully completed requests</p>
                  </div>
                  <span className="text-white font-semibold">87.3%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Customer Satisfaction</p>
                    <p className="text-white/60 text-sm">Average rating from users</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">4.6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="revenue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4">Revenue Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Commission Revenue</p>
                    <p className="text-white/60 text-sm">From completed bookings</p>
                  </div>
                  <span className="text-white font-semibold">$8,750</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Subscription Revenue</p>
                    <p className="text-white/60 text-sm">Premium provider subscriptions</p>
                  </div>
                  <span className="text-white font-semibold">$2,400</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Advertisement Revenue</p>
                    <p className="text-white/60 text-sm">Featured listings and ads</p>
                  </div>
                  <span className="text-white font-semibold">$1,350</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-4">Financial Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Monthly Recurring Revenue</span>
                  <span className="text-white font-semibold">$2,400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Average Order Value</span>
                  <span className="text-white font-semibold">$1,250</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Customer Lifetime Value</span>
                  <span className="text-white font-semibold">$3,850</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Churn Rate</span>
                  <span className="text-white font-semibold">2.1%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
