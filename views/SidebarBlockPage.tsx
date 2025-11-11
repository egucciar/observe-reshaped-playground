'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Card } from '../components/Card'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { MenuItem } from '../components/MenuItem'
import { Divider } from '../components/Divider'
import { Badge } from '../components/Badge'
import {
  Home,
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  HelpCircle,
} from 'lucide-react'

export function SidebarBlockPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: '5' },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: 'New' },
    { id: 'team', label: 'Team', icon: Users },
  ]

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ]

  return (
    <View padding={6} gap={6}>
      <View gap={2}>
        <Text variant="title-1">Sidebar Block</Text>
        <Text variant="body-2" color="neutral-faded">
          A collapsible sidebar navigation pattern with icons, labels, and badges
        </Text>
      </View>

      {/* Interactive Sidebar Demo */}
      <Card>
        <View direction="row" height="600px">
          {/* Sidebar */}
          <View
            className={`transition-all duration-300 ${
              isCollapsed ? 'w-16' : 'w-64'
            } border-r border-neutral-faded`}
            padding={3}
            gap={3}
          >
            {/* Header */}
            <View direction="row" align="center" justify="space-between">
              {!isCollapsed && (
                <Text variant="title-5" weight="bold">
                  My App
                </Text>
              )}
              <Button
                variant="ghost"
                size="small"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </Button>
            </View>

            <Divider />

            {/* Search */}
            {!isCollapsed && (
              <View direction="row" align="center" gap={2} padding={2} className="bg-neutral-faded rounded">
                <Search size={14} className="text-neutral-faded" />
                <Text variant="caption-1" color="neutral-faded">
                  Search...
                </Text>
              </View>
            )}

            {/* Navigation Items */}
            <View gap={1}>
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <MenuItem
                    key={item.id}
                    selected={activeItem === item.id}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <View
                      direction="row"
                      align="center"
                      gap={3}
                      justify={isCollapsed ? 'center' : 'start'}
                      width="100%"
                    >
                      <Icon size={18} />
                      {!isCollapsed && (
                        <>
                          <Text variant="body-2">{item.label}</Text>
                          {item.badge && (
                            <Badge
                              color={item.badge === 'New' ? 'primary' : 'neutral'}
                              size="small"
                              className="ml-auto"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </View>
                  </MenuItem>
                )
              })}
            </View>

            {/* Spacer */}
            <View className="flex-1" />

            {/* Bottom Items */}
            <View gap={1}>
              <Divider />
              {bottomItems.map((item) => {
                const Icon = item.icon
                return (
                  <MenuItem
                    key={item.id}
                    selected={activeItem === item.id}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <View
                      direction="row"
                      align="center"
                      gap={3}
                      justify={isCollapsed ? 'center' : 'start'}
                      width="100%"
                    >
                      <Icon size={18} />
                      {!isCollapsed && <Text variant="body-2">{item.label}</Text>}
                    </View>
                  </MenuItem>
                )
              })}
            </View>

            {/* User Profile */}
            {!isCollapsed && (
              <>
                <Divider />
                <View direction="row" align="center" gap={2} padding={2}>
                  <View
                    className="w-8 h-8 rounded-full bg-primary-faded flex items-center justify-center"
                  >
                    <Text variant="caption-1" weight="bold" color="primary">
                      JD
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text variant="body-2" weight="medium">
                      John Doe
                    </Text>
                    <Text variant="caption-1" color="neutral-faded">
                      john@example.com
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>

          {/* Main Content Area */}
          <View className="flex-1" padding={6} gap={4}>
            <View direction="row" align="center" justify="space-between">
              <Text variant="title-3">
                {navigationItems.find((item) => item.id === activeItem)?.label || 'Dashboard'}
              </Text>
              <View direction="row" gap={2}>
                <Button variant="ghost" size="small">
                  <Bell size={18} />
                </Button>
              </View>
            </View>
            <Card padding={4}>
              <Text variant="body-2" color="neutral-faded">
                This is the main content area. Click the sidebar items to navigate, or use the
                collapse button to toggle the sidebar width.
              </Text>
            </Card>
          </View>
        </View>
      </Card>

      {/* Sidebar Variations */}
      <Card padding={6}>
        <View gap={4}>
          <Text variant="title-4">Sidebar Variations</Text>

          <View
            direction="row"
            gap={4}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {/* Icon-only Sidebar */}
            <Card padding={3}>
              <View gap={2}>
                <Text variant="title-6">Icon Only</Text>
                <View gap={1}>
                  {navigationItems.slice(0, 3).map((item) => {
                    const Icon = item.icon
                    return (
                      <View
                        key={item.id}
                        padding={2}
                        align="center"
                        className="hover:bg-neutral-faded rounded cursor-pointer"
                      >
                        <Icon size={18} />
                      </View>
                    )
                  })}
                </View>
              </View>
            </Card>

            {/* Sidebar with Sections */}
            <Card padding={3}>
              <View gap={3}>
                <Text variant="title-6">With Sections</Text>
                <View gap={2}>
                  <Text variant="caption-1" color="neutral-faded" weight="medium">
                    MAIN
                  </Text>
                  <View gap={1}>
                    {navigationItems.slice(0, 2).map((item) => {
                      const Icon = item.icon
                      return (
                        <View
                          key={item.id}
                          direction="row"
                          align="center"
                          gap={2}
                          padding={2}
                          className="hover:bg-neutral-faded rounded cursor-pointer"
                        >
                          <Icon size={16} />
                          <Text variant="caption-1">{item.label}</Text>
                        </View>
                      )
                    })}
                  </View>
                </View>
              </View>
            </Card>

            {/* Sidebar with Nested Items */}
            <Card padding={3}>
              <View gap={2}>
                <Text variant="title-6">Nested Items</Text>
                <View gap={1}>
                  <View
                    direction="row"
                    align="center"
                    gap={2}
                    padding={2}
                    className="hover:bg-neutral-faded rounded cursor-pointer"
                  >
                    <Home size={16} />
                    <Text variant="caption-1">Home</Text>
                  </View>
                  <View paddingStart={4} gap={1}>
                    <Text variant="caption-1" color="neutral-faded">
                      • Overview
                    </Text>
                    <Text variant="caption-1" color="neutral-faded">
                      • Recent
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </Card>

      {/* Usage Tips */}
      <Card padding={4}>
        <View gap={3}>
          <Text variant="title-5">Usage Tips</Text>
          <View gap={2}>
            <Text variant="body-2">
              • This sidebar block demonstrates a collapsible navigation pattern common in modern apps
            </Text>
            <Text variant="body-2">
              • The collapse button toggles between full-width (with labels) and icon-only modes
            </Text>
            <Text variant="body-2">
              • Badges can highlight new features or show notification counts
            </Text>
            <Text variant="body-2">
              • Bottom-aligned items (Settings, Help) are separated from main navigation
            </Text>
            <Text variant="body-2">
              • User profile section at the bottom provides quick access to account settings
            </Text>
            <Text variant="body-2">
              • The sidebar uses smooth transitions (duration-300) for a polished feel
            </Text>
            <Text variant="body-2">
              • Variations show different sidebar patterns: icon-only, sectioned, and nested navigation
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

