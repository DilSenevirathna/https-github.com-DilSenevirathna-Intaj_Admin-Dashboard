"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Trash2, Plus, FolderOpen } from "lucide-react"

const categories = [
  { id: 1, name: "Wedding Planning", description: "Complete wedding event services", status: "Active" },
  { id: 2, name: "Corporate Events", description: "Business and corporate gatherings", status: "Active" },
  { id: 3, name: "Birthday Parties", description: "Personal celebration events", status: "Active" },
  { id: 4, name: "Photography", description: "Professional photography services", status: "Active" },
  { id: 5, name: "Catering", description: "Food and beverage services", status: "Active" },
  { id: 6, name: "Music & DJ", description: "Entertainment and music services", status: "Active" },
]

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
  })

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (category: any) => {
    setSelectedCategory(category)
    setEditForm({
      name: category.name,
      description: category.description,
    })
    setShowEditDialog(true)
  }

  const handleSaveEdit = () => {
    console.log("Updating category:", selectedCategory?.id, editForm)
    setShowEditDialog(false)
    setSelectedCategory(null)
  }

  const handleDelete = () => {
    console.log("Deleting category:", selectedCategory?.id)
    setShowDeleteDialog(false)
    setSelectedCategory(null)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">Category Management</h2>
        <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300">
          <Plus size={18} />
          <span>Add Category</span>
        </Button>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-12 h-12 rounded-lg flex items-center justify-center">
                  <FolderOpen className="text-white" size={20} />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                    onClick={() => handleEdit(category)}
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="text-red-400 hover:text-red-300 transition-colors p-1"
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowDeleteDialog(true)
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{category.name}</h3>
              <p className="text-white/60 text-sm mb-3">{category.description}</p>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">{category.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Category Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>Update the category information below.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Category Name</Label>
              <Input
                id="name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} className="bg-orange-600 hover:bg-orange-700">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Category Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Category</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{selectedCategory?.name}"? This action cannot be undone and will affect
              all associated services.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
