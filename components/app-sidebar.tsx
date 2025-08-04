"use client"

import type * as React from "react"
import {
  BookOpen,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
  Users,
  FileText,
  BarChart3,
  Building2,
  ChevronRight,
} from "lucide-react"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

// This is sample data.
const data = {
  user: {
    name: "Admin User",
    email: "admin@intaj.com",
    avatar: "/placeholder-user.jpg",
  },
  teams: [
    {
      name: "Intaj Admin",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User Management",
      url: "/dashboard/users",
      icon: Users,
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
      icon: BookOpen,
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
      icon: FileText,
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
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto pb-20">
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {data.navMain.map((item) => (
                <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                  <SidebarMenuItem className={item.title === "Solution Providers" ? "mb-20" : "mb-3"}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.items && (
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub
                          className={item.title === "Solution Providers" ? "pb-24 space-y-3" : "space-y-2"}
                        >
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild className="py-4">
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : (
                      <Link href={item.url} />
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
