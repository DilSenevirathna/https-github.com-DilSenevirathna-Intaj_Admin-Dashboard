"use client"
import { Bell, User, Menu, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function AppHeader({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const pathname = usePathname()

  const getPageTitle = () => {
    const path = pathname.split("/").pop() || "dashboard"
    return path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")
  }

  const handleLogout = () => {
    window.location.href = "/"
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white/80 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-white text-xl font-semibold">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-white/80 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
            <User className="text-white" size={16} />
          </div>
          <span className="text-white font-medium">Admin</span>
          <button onClick={handleLogout} className="text-white/80 hover:text-white transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
