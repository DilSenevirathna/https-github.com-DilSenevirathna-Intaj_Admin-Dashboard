"use client"

import type * as React from "react"
import { Calendar, Users, Settings, BarChart3, FileText, Building2, ChevronDown, Home, ImageIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: false,
    },
    {
      title: "User Management",
      url: "/dashboard/users",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "All Users",
          url: "/dashboard/users",
        },
        {
          title: "User Registration",
          url: "/dashboard/users/register",
        },
        {
          title: "OTP Confirmation",
          url: "/dashboard/users/otp",
        },
      ],
    },
    {
      title: "Category Management",
      url: "/dashboard/categories",
      icon: FileText,
      isActive: false,
      items: [
        {
          title: "All Categories",
          url: "/dashboard/categories",
        },
        {
          title: "Add Category",
          url: "/dashboard/categories/add",
        },
      ],
    },
    {
      title: "Solution Providers",
      url: "/dashboard/providers",
      icon: Building2,
      isActive: false,
      items: [
        {
          title: "Registration Requests",
          url: "/dashboard/providers/requests",
        },
        {
          title: "Add Provider",
          url: "/dashboard/providers/add",
        },
        {
          title: "Manage Providers",
          url: "/dashboard/providers",
        },
      ],
    },
    {
      title: "Request Management",
      url: "/dashboard/requests",
      icon: Calendar,
      isActive: false,
      items: [
        {
          title: "All Requests",
          url: "/dashboard/requests",
        },
        {
          title: "Review Requests",
          url: "/dashboard/requests/review",
        },
        {
          title: "Track & Follow-up",
          url: "/dashboard/requests/track",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      isActive: false,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      isActive: false,
      items: [
        {
          title: "General Settings",
          url: "/dashboard/settings",
        },
        {
          title: "Image Sliders",
          url: "/dashboard/settings/sliders",
        },
        {
          title: "Advertisement Management",
          url: "/dashboard/settings/ads",
        },
        {
          title: "Technical Configuration",
          url: "/dashboard/settings/technical",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-8 h-8 rounded-lg flex items-center justify-center">
            <Calendar className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Intaj</h2>
            <p className="text-xs text-white/70">Admin Portal</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto pb-20">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {data.navMain.map((item, index) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn("mb-3", item.title === "Solution Providers" && "mb-20")}
                >
                  {item.items ? (
                    <Collapsible defaultOpen className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            "w-full justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl py-4 px-4 transition-all duration-300",
                            pathname.startsWith(item.url) &&
                              "bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-400/30",
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5" />
                            <span className="font-medium">{item.title}</span>
                          </div>
                          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub
                          className={cn(
                            "mt-2 space-y-3 ml-4 border-l border-white/10 pl-4",
                            item.title === "Solution Providers" && "pb-24",
                          )}
                        >
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className={cn(
                                  "bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/10 rounded-lg py-4 px-4 transition-all duration-300",
                                  pathname === subItem.url &&
                                    "bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-400/30 text-white",
                                )}
                              >
                                <Link href={subItem.url}>
                                  <span className="font-medium">{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl py-4 px-4 transition-all duration-300",
                        pathname === item.url &&
                          "bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-400/30",
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
              <ImageIcon className="text-sm font-medium" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-white/60">admin@intaj.com</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
