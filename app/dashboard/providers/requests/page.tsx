"use client"

import { useState } from "react"
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, MessageSquare, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const providerRequests = [
  {
    id: "PR-001",
    businessName: "Elite Wedding Photography",
    contactPerson: "Sarah Johnson",
    email: "sarah@elitewedding.com",
    phone: "+1 (555) 123-4567",
    category: "Photography",
    experience: "8 years",
    location: "New York, NY",
    submittedDate: "2024-01-20",
    status: "Pending Review",
    documents: ["business-license.pdf", "portfolio.zip", "insurance.pdf"],
    description:
      "Professional wedding photography service with 8+ years experience. Specializing in outdoor and destination weddings.",
    website: "www.elitewedding.com",
    businessType: "LLC",
  },
  {
    id: "PR-002",
    businessName: "Gourmet Catering Solutions",
    contactPerson: "Michael Chen",
    email: "michael@gourmetcatering.com",
    phone: "+1 (555) 234-5678",
    category: "Catering",
    experience: "12 years",
    location: "Los Angeles, CA",
    submittedDate: "2024-01-19",
    status: "Under Review",
    documents: ["health-permit.pdf", "menu-samples.pdf", "references.pdf"],
    description:
      "Full-service catering company specializing in corporate events and weddings. Farm-to-table approach with dietary accommodations.",
    website: "www.gourmetcatering.com",
    businessType: "Corporation",
  },
  {
    id: "PR-003",
    businessName: "Sound Wave DJ Services",
    contactPerson: "David Rodriguez",
    email: "david@soundwavedjservices.com",
    phone: "+1 (555) 345-6789",
    category: "Music & DJ",
    experience: "5 years",
    location: "Miami, FL",
    submittedDate: "2024-01-18",
    status: "Approved",
    documents: ["equipment-list.pdf", "performance-videos.zip", "testimonials.pdf"],
    description:
      "Professional DJ service for all types of events. State-of-the-art sound equipment and extensive music library.",
    website: "www.soundwavedjservices.com",
    businessType: "Sole Proprietorship",
  },
  {
    id: "PR-004",
    businessName: "Elegant Event Decorations",
    contactPerson: "Lisa Thompson",
    email: "lisa@elegantdecorations.com",
    phone: "+1 (555) 456-7890",
    category: "Decoration",
    experience: "10 years",
    location: "Chicago, IL",
    submittedDate: "2024-01-17",
    status: "Rejected",
    documents: ["portfolio.pdf", "client-reviews.pdf"],
    description: "Creative event decoration service specializing in luxury weddings and corporate events.",
    website: "www.elegantdecorations.com",
    businessType: "Partnership",
    rejectionReason: "Incomplete documentation - missing business license",
  },
]

export default function ProviderRequestsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRequest, setSelectedRequest] = useState<any>(null)
  const [showReviewDialog, setShowReviewDialog] = useState(false)
  const [reviewForm, setReviewForm] = useState({
    decision: "",
    notes: "",
    requirements: "",
  })

  const filteredRequests = providerRequests.filter(
    (request) =>
      request.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500/20 text-green-400"
      case "Under Review":
        return "bg-blue-500/20 text-blue-400"
      case "Rejected":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-yellow-500/20 text-yellow-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-4 h-4" />
      case "Under Review":
        return <Eye className="w-4 h-4" />
      case "Rejected":
        return <XCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const handleReview = (request: any) => {
    setSelectedRequest(request)
    setReviewForm({
      decision: "",
      notes: "",
      requirements: "",
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
          <h2 className="text-white text-2xl font-bold">Provider Registration Requests</h2>
          <p className="text-white/60">Review and approve new solution provider applications</p>
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
              <p className="text-white/80 text-sm">Total Requests</p>
              <p className="text-white text-2xl font-bold">{providerRequests.length}</p>
            </div>
            <Building2 className="text-orange-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Pending Review</p>
              <p className="text-white text-2xl font-bold">
                {providerRequests.filter((r) => r.status === "Pending Review").length}
              </p>
            </div>
            <Clock className="text-yellow-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Approved</p>
              <p className="text-white text-2xl font-bold">
                {providerRequests.filter((r) => r.status === "Approved").length}
              </p>
            </div>
            <CheckCircle className="text-green-400" size={24} />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Rejected</p>
              <p className="text-white text-2xl font-bold">
                {providerRequests.filter((r) => r.status === "Rejected").length}
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
              placeholder="Search provider requests..."
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
                <th className="text-left text-white/80 py-3">Business</th>
                <th className="text-left text-white/80 py-3">Contact</th>
                <th className="text-left text-white/80 py-3">Category</th>
                <th className="text-left text-white/80 py-3">Experience</th>
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
                      <div className="font-medium">{request.businessName}</div>
                      <div className="text-white/60 text-sm">{request.location}</div>
                    </div>
                  </td>
                  <td className="text-white py-4">
                    <div>
                      <div className="font-medium">{request.contactPerson}</div>
                      <div className="text-white/60 text-sm">{request.email}</div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
                      {request.category}
                    </span>
                  </td>
                  <td className="text-white/80 py-4">{request.experience}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(request.status)}
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
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
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Review Provider Request - {selectedRequest?.id}</DialogTitle>
            <DialogDescription>Review and make a decision on this provider registration request</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Business Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Business Name:</strong> {selectedRequest.businessName}
                  </div>
                  <div>
                    <strong>Contact Person:</strong> {selectedRequest.contactPerson}
                  </div>
                  <div>
                    <strong>Email:</strong> {selectedRequest.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {selectedRequest.phone}
                  </div>
                  <div>
                    <strong>Category:</strong> {selectedRequest.category}
                  </div>
                  <div>
                    <strong>Experience:</strong> {selectedRequest.experience}
                  </div>
                  <div>
                    <strong>Location:</strong> {selectedRequest.location}
                  </div>
                  <div>
                    <strong>Business Type:</strong> {selectedRequest.businessType}
                  </div>
                </div>
                <div className="mt-3">
                  <strong>Description:</strong>
                  <p className="text-sm mt-1">{selectedRequest.description}</p>
                </div>
                <div className="mt-3">
                  <strong>Documents:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedRequest.documents.map((doc: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {doc}
                      </span>
                    ))}
                  </div>
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
                      <SelectItem value="approve">Approve Application</SelectItem>
                      <SelectItem value="reject">Reject Application</SelectItem>
                      <SelectItem value="request-info">Request More Information</SelectItem>
                      <SelectItem value="schedule-interview">Schedule Interview</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requirements">Additional Requirements (if any)</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List any additional requirements or documents needed..."
                    value={reviewForm.requirements}
                    onChange={(e) => setReviewForm({ ...reviewForm, requirements: e.target.value })}
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
