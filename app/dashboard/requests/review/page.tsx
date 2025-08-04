"use client"

import { useState } from "react"
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const reviewRequests = [
  {
    id: "REQ-001",
    user: "John Doe",
    email: "john@example.com",
    service: "Wedding Photography",
    category: "Photography",
    description: "Need professional wedding photographer for outdoor ceremony on June 15th",
    budget: "$2,000",
    location: "Central Park, NYC",
    urgency: "High",
    submittedDate: "2024-01-20",
    status: "Pending Review",
    attachments: ["venue-photos.jpg", "requirements.pdf"],
  },
  {
    id: "REQ-002",
    user: "Sarah Smith",
    email: "sarah@example.com",
    service: "Corporate Catering",
    category: "Catering",
    description: "Catering for 100 people corporate event with dietary restrictions",
    budget: "$3,500",
    location: "Manhattan Office Building",
    urgency: "Medium",
    submittedDate: "2024-01-19",
    status: "Under Review",
    attachments: ["menu-preferences.pdf", "dietary-requirements.docx"],
  },
  {
    id: "REQ-003",
    user: "Mike Johnson",
    email: "mike@example.com",
    service: "Birthday DJ Service",
    category: "Music & DJ",
    description: "DJ service for 21st birthday party with specific music requests",
    budget: "$800",
    location: "Private Residence, Brooklyn",
    urgency: "Low",
    submittedDate: "2024-01-18",
    status: "Needs Clarification",
    attachments: ["playlist.txt"],
  },
]

export default function ReviewRequestPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRequest, setSelectedRequest] = useState<any>(null)
  const [showReviewDialog, setShowReviewDialog] = useState(false)
  const [reviewForm, setReviewForm] = useState({
    decision: "",
    notes: "",
    assignedVendor: "",
    estimatedCompletion: "",
  })

  const filteredRequests = reviewRequests.filter(
    (request) =>
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-blue-500/20 text-blue-400"
      case "Needs Clarification":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-yellow-500/20 text-yellow-400"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High":
        return "bg-red-500/20 text-red-400"
      case "Medium":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-green-500/20 text-green-400"
    }
  }

  const handleReview = (request: any) => {
    setSelectedRequest(request)
    setReviewForm({
      decision: "",
      notes: "",
      assignedVendor: "",
      estimatedCompletion: "",
    })
    setShowReviewDialog(true)
  }

  const handleSubmitReview = () => {
    console.log("Submitting review:", selectedRequest?.id, reviewForm)
    setShowReviewDialog(false)
    setSelectedRequest(null)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Review Service Requests</h2>
          <p className="text-white/60">Review and approve pending service requests</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
            <CheckCircle size={18} />
            <span>Bulk Approve</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Pending Review</p>
              <p className="text-white text-2xl font-bold">
                {reviewRequests.filter((r) => r.status === "Pending Review").length}
              </p>
            </div>
            <Clock className="text-yellow-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Under Review</p>
              <p className="text-white text-2xl font-bold">
                {reviewRequests.filter((r) => r.status === "Under Review").length}
              </p>
            </div>
            <Eye className="text-blue-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Need Clarification</p>
              <p className="text-white text-2xl font-bold">
                {reviewRequests.filter((r) => r.status === "Needs Clarification").length}
              </p>
            </div>
            <MessageSquare className="text-orange-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">High Priority</p>
              <p className="text-white text-2xl font-bold">
                {reviewRequests.filter((r) => r.urgency === "High").length}
              </p>
            </div>
            <XCircle className="text-red-400" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            <Input
              type="text"
              placeholder="Search requests to review..."
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
                <th className="text-left text-white/80 py-3">Request ID</th>
                <th className="text-left text-white/80 py-3">User</th>
                <th className="text-left text-white/80 py-3">Service</th>
                <th className="text-left text-white/80 py-3">Budget</th>
                <th className="text-left text-white/80 py-3">Urgency</th>
                <th className="text-left text-white/80 py-3">Status</th>
                <th className="text-left text-white/80 py-3">Submitted</th>
                <th className="text-left text-white/80 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-white py-4 font-medium">{request.id}</td>
                  <td className="text-white py-4">
                    <div>
                      <div className="font-medium">{request.user}</div>
                      <div className="text-white/60 text-sm">{request.email}</div>
                    </div>
                  </td>
                  <td className="text-white py-4">
                    <div>
                      <div className="font-medium">{request.service}</div>
                      <div className="text-white/60 text-sm">{request.category}</div>
                    </div>
                  </td>
                  <td className="text-white/80 py-4 font-medium">{request.budget}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getUrgencyColor(request.urgency)}`}>
                      {request.urgency}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="text-white/80 py-4">{request.submittedDate}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors p-1">
                        <Eye size={16} />
                      </button>
                      <button
                        className="text-green-400 hover:text-green-300 transition-colors p-1"
                        onClick={() => handleReview(request)}
                      >
                        <CheckCircle size={16} />
                      </button>
                      <button className="text-orange-400 hover:text-orange-300 transition-colors p-1">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Dialog */}
      <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Review Request - {selectedRequest?.id}</DialogTitle>
            <DialogDescription>Review and make a decision on this service request</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Request Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Service:</strong> {selectedRequest.service}
                  </div>
                  <div>
                    <strong>Budget:</strong> {selectedRequest.budget}
                  </div>
                  <div>
                    <strong>Location:</strong> {selectedRequest.location}
                  </div>
                  <div>
                    <strong>Urgency:</strong> {selectedRequest.urgency}
                  </div>
                </div>
                <div className="mt-2">
                  <strong>Description:</strong>
                  <p className="text-sm mt-1">{selectedRequest.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="decision">Review Decision</Label>
                  <Select
                    value={reviewForm.decision}
                    onValueChange={(value) => setReviewForm({ ...reviewForm, decision: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select decision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approve">Approve Request</SelectItem>
                      <SelectItem value="reject">Reject Request</SelectItem>
                      <SelectItem value="clarification">Request Clarification</SelectItem>
                      <SelectItem value="modify">Request Modification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="vendor">Assign to Vendor (if approved)</Label>
                  <Select
                    value={reviewForm.assignedVendor}
                    onValueChange={(value) => setReviewForm({ ...reviewForm, assignedVendor: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vendor1">ABC Photography</SelectItem>
                      <SelectItem value="vendor2">Elite Catering</SelectItem>
                      <SelectItem value="vendor3">Party Decorators</SelectItem>
                      <SelectItem value="vendor4">Sound Masters DJ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="completion">Estimated Completion Date</Label>
                  <Input
                    type="date"
                    value={reviewForm.estimatedCompletion}
                    onChange={(e) => setReviewForm({ ...reviewForm, estimatedCompletion: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Review Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Add notes about your review decision..."
                    value={reviewForm.notes}
                    onChange={(e) => setReviewForm({ ...reviewForm, notes: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReviewDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmitReview} className="bg-orange-600 hover:bg-orange-700">
                  Submit Review
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
