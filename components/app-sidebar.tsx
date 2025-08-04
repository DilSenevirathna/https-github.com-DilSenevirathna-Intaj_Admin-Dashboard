"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  FileText,
  FolderOpen,
  Building2,
  Settings,
  Calendar,
  ChevronDown,
  TrendingUp,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function AppSidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname()
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => (prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId]))
  }

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
      href: "/dashboard",
    },
    {
      id: "users",
      label: "User Management",
      icon: Users,
      submenu: [
        { id: "user-registration", label: "User Registration", href: "/dashboard/users/register" },
        { id: "otp-confirmation", label: "OTP Confirmation", href: "/dashboard/users/otp" },
        { id: "view-users", label: "View Users", href: "/dashboard/users" },
      ],
    },
    {
      id: "service-requests",
      label: "Service Requests",
      icon: FileText,
      submenu: [
        { id: "view-requests", label: "View Requests", href: "/dashboard/requests" },
        { id: "review-request", label: "Review Request", href: "/dashboard/requests/review" },
        { id: "track-followup", label: "Track & Follow-up", href: "/dashboard/requests/track" },
      ],
    },
    {
      id: "categories",
      label: "Category Management",
      icon: FolderOpen,
      submenu: [
        { id: "add-category", label: "Add Category", href: "/dashboard/categories/add" },
        { id: "view-categories", label: "View Categories", href: "/dashboard/categories" },
      ],
    },
    {
      id: "solution-providers",
      label: "Solution Providers",
      icon: Building2,
      submenu: [
        { id: "view-sp-requests", label: "Registration Requests", href: "/dashboard/providers/requests" },
        { id: "add-sp", label: "Add Provider", href: "/dashboard/providers/add" },
        { id: "manage-sp", label: "Manage Providers", href: "/dashboard/providers" },
      ],
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: TrendingUp,
      href: "/dashboard/analytics",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      submenu: [
        { id: "image-slider", label: "Image Slider", href: "/dashboard/settings/sliders" },
        { id: "ad-placements", label: "Ad Placements", href: "/dashboard/settings/ads" },
        { id: "technical-config", label: "Technical Config", href: "/dashboard/settings/technical" },
      ],
    },
  ]

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-gray-900/50 backdrop-blur-lg border-r border-white/10 h-screen transition-all duration-300 overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-10 h-10 rounded-lg flex items-center justify-center">
            <Calendar className="text-white text-xl" />
          </div>
          {sidebarOpen && <h2 className="text-white font-bold text-lg">Intaj Admin</h2>}
        </div>
      </div>

      <nav className="mt-8 pb-20">
        {menuItems.map((item) => (
          <div key={item.id} className={`mb-3 ${item.id === "solution-providers" ? "mb-20" : "mb-3"}`}>
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className="w-full flex items-center px-4 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg mx-2"
                >
                  <item.icon size={20} />
                  {sidebarOpen && (
                    <>
                      <span className="ml-3 flex-1 text-left">{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          expandedMenus.includes(item.id) ? "rotate-180" : ""
                        }`}
                      />
                    </>
                  )}
                </button>
                {expandedMenus.includes(item.id) && sidebarOpen && (
                  <div className={`ml-8 space-y-3 ${item.id === "solution-providers" ? "pb-24" : "pb-6"}`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.href}
                        className={`block px-4 py-4 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 ${
                          pathname === subItem.href ? "text-white bg-white/5 border-l-2 border-orange-400" : ""
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href!}
                className={`w-full flex items-center px-4 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 mx-2 rounded-lg ${
                  pathname === item.href ? "bg-white/10 text-white border-r-2 border-orange-400" : ""
                }`}
              >
                <item.icon size={20} />
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
