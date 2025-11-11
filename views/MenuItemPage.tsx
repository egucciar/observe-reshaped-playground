'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { MenuItem } from '../components/MenuItem'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Avatar } from '../components/Avatar'
import { Divider } from '../components/Divider'
import {
  User,
  Settings,
  Bell,
  LogOut,
  Edit,
  Trash2,
  Download,
  Share2,
  Copy,
  Eye,
  Heart,
  Star,
  MessageSquare,
  Plus,
  Check,
  Home,
  FileText,
  Folder,
  Image,
  Music,
  Video,
  Archive,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Flag,
  Upload,
} from 'lucide-react'

export function MenuItemPage() {
  const [selectedItem, setSelectedItem] = useState<string>('home')
  const [lastAction, setLastAction] = useState<string>('')

  const handleAction = (action: string) => {
    setLastAction(action)
  }

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">MenuItem Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The MenuItem component includes the following customizations:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">Default Size Strategy</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  MenuItem defaults to size="small" for consistent compact UI
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Uses simple wrapper approach - no subcomponents to wrap
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {lastAction && (
        <Card padding={3}>
          <span className="text-sm">
            Last action: <strong>{lastAction}</strong>
          </span>
        </Card>
      )}

      <View gap={3}>
        <h2>Basic Menu Items</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem onClick={() => handleAction('Edit profile')}>Edit profile</MenuItem>
            <MenuItem onClick={() => handleAction('Settings')}>Settings</MenuItem>
            <MenuItem onClick={() => handleAction('Help')}>Help</MenuItem>
            <MenuItem onClick={() => handleAction('Logout')}>Logout</MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu Items with Icons</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={User} onClick={() => handleAction('Profile')}>
              Profile
            </MenuItem>
            <MenuItem icon={Settings} onClick={() => handleAction('Settings')}>
              Settings
            </MenuItem>
            <MenuItem icon={Bell} onClick={() => handleAction('Notifications')}>
              Notifications
            </MenuItem>
            <MenuItem icon={LogOut} onClick={() => handleAction('Logout')}>
              Logout
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu Item Colors</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem color="neutral" icon={Edit} onClick={() => handleAction('Edit')}>
              Edit item
            </MenuItem>
            <MenuItem
              color="primary"
              icon={Download}
              onClick={() => handleAction('Download')}
            >
              Download
            </MenuItem>
            <MenuItem
              color="critical"
              icon={Trash2}
              onClick={() => handleAction('Delete')}
            >
              Delete item
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu Item Sizes</h2>
        <View direction="row" gap={3}>
          <Card padding={4}>
            <View gap={1}>
              <span className="text-sm font-semibold">Small</span>
              <MenuItem
                size="small"
                icon={User}
                onClick={() => handleAction('Small item')}
              >
                Small menu item
              </MenuItem>
              <MenuItem
                size="small"
                icon={Settings}
                onClick={() => handleAction('Small settings')}
              >
                Settings
              </MenuItem>
            </View>
          </Card>
          <Card padding={4}>
            <View gap={1}>
              <span className="text-sm font-semibold">Medium (default)</span>
              <MenuItem
                size="medium"
                icon={User}
                onClick={() => handleAction('Medium item')}
              >
                Medium menu item
              </MenuItem>
              <MenuItem
                size="medium"
                icon={Settings}
                onClick={() => handleAction('Medium settings')}
              >
                Settings
              </MenuItem>
            </View>
          </Card>
          <Card padding={4}>
            <View gap={1}>
              <span className="text-sm font-semibold">Large</span>
              <MenuItem
                size="large"
                icon={User}
                onClick={() => handleAction('Large item')}
              >
                Large menu item
              </MenuItem>
              <MenuItem
                size="large"
                icon={Settings}
                onClick={() => handleAction('Large settings')}
              >
                Settings
              </MenuItem>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2>Selected State</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              icon={Home}
              selected={selectedItem === 'home'}
              onClick={() => setSelectedItem('home')}
            >
              Home
            </MenuItem>
            <MenuItem
              icon={FileText}
              selected={selectedItem === 'documents'}
              onClick={() => setSelectedItem('documents')}
            >
              Documents
            </MenuItem>
            <MenuItem
              icon={Image}
              selected={selectedItem === 'photos'}
              onClick={() => setSelectedItem('photos')}
            >
              Photos
            </MenuItem>
            <MenuItem
              icon={Settings}
              selected={selectedItem === 'settings'}
              onClick={() => setSelectedItem('settings')}
            >
              Settings
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Disabled Menu Items</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={Edit} onClick={() => handleAction('Edit')}>
              Edit (enabled)
            </MenuItem>
            <MenuItem icon={Copy} disabled onClick={() => handleAction('Copy')}>
              Copy (disabled)
            </MenuItem>
            <MenuItem icon={Download} onClick={() => handleAction('Download')}>
              Download (enabled)
            </MenuItem>
            <MenuItem icon={Trash2} disabled onClick={() => handleAction('Delete')}>
              Delete (disabled)
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu Items with Badges</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              icon={Bell}
              endSlot={
                <Badge size="small" color="critical">
                  5
                </Badge>
              }
              onClick={() => handleAction('Notifications')}
            >
              Notifications
            </MenuItem>
            <MenuItem
              icon={MessageSquare}
              endSlot={
                <Badge size="small" color="primary">
                  12
                </Badge>
              }
              onClick={() => handleAction('Messages')}
            >
              Messages
            </MenuItem>
            <MenuItem
              icon={Mail}
              endSlot={<Badge size="small">3</Badge>}
              onClick={() => handleAction('Inbox')}
            >
              Inbox
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu Items with Avatars</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              startSlot={<Avatar size={8} initials="JD" />}
              onClick={() => handleAction('John Doe')}
            >
              John Doe
            </MenuItem>
            <MenuItem
              startSlot={<Avatar size={8} initials="SA" />}
              onClick={() => handleAction('Sarah Anderson')}
            >
              Sarah Anderson
            </MenuItem>
            <MenuItem
              startSlot={<Avatar size={8} initials="ML" />}
              onClick={() => handleAction('Mike Lee')}
            >
              Mike Lee
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Action Menu</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={Eye} onClick={() => handleAction('View')}>
              View
            </MenuItem>
            <MenuItem icon={Edit} onClick={() => handleAction('Edit')}>
              Edit
            </MenuItem>
            <MenuItem icon={Copy} onClick={() => handleAction('Duplicate')}>
              Duplicate
            </MenuItem>
            <MenuItem icon={Share2} onClick={() => handleAction('Share')}>
              Share
            </MenuItem>
            <Divider />
            <MenuItem icon={Download} onClick={() => handleAction('Download')}>
              Download
            </MenuItem>
            <MenuItem icon={Archive} onClick={() => handleAction('Archive')}>
              Archive
            </MenuItem>
            <Divider />
            <MenuItem
              icon={Trash2}
              color="critical"
              onClick={() => handleAction('Delete')}
            >
              Delete
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>File Browser Menu</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={Folder} onClick={() => handleAction('Documents')}>
              Documents
            </MenuItem>
            <MenuItem icon={Image} onClick={() => handleAction('Images')}>
              Images
            </MenuItem>
            <MenuItem icon={Video} onClick={() => handleAction('Videos')}>
              Videos
            </MenuItem>
            <MenuItem icon={Music} onClick={() => handleAction('Music')}>
              Music
            </MenuItem>
            <MenuItem icon={Archive} onClick={() => handleAction('Archives')}>
              Archives
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu Items with Links</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={Home} href="/">
              Home
            </MenuItem>
            <MenuItem icon={FileText} href="/docs">
              Documentation
            </MenuItem>
            <MenuItem icon={User} href="/profile">
              Profile
            </MenuItem>
            <MenuItem icon={Settings} href="/settings">
              Settings
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>External Links</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              icon={FileText}
              href="https://docs.example.com"
              attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
            >
              Documentation
            </MenuItem>
            <MenuItem
              icon={MessageSquare}
              href="https://support.example.com"
              attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
            >
              Support
            </MenuItem>
            <MenuItem
              icon={Share2}
              href="https://community.example.com"
              attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
            >
              Community
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Contact Menu</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={Mail} href="mailto:hello@example.com">
              Email us
            </MenuItem>
            <MenuItem icon={Phone} href="tel:+1234567890">
              Call us
            </MenuItem>
            <MenuItem icon={MapPin} onClick={() => handleAction('View location')}>
              View location
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Quick Actions</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              icon={Plus}
              color="primary"
              onClick={() => handleAction('New document')}
            >
              New document
            </MenuItem>
            <MenuItem icon={Upload} onClick={() => handleAction('Upload file')}>
              Upload file
            </MenuItem>
            <MenuItem icon={Folder} onClick={() => handleAction('New folder')}>
              New folder
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Post Actions Menu</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              icon={Heart}
              endSlot={<span className="text-sm opacity-70">245</span>}
              onClick={() => handleAction('Like')}
            >
              Like
            </MenuItem>
            <MenuItem
              icon={MessageSquare}
              endSlot={<span className="text-sm opacity-70">32</span>}
              onClick={() => handleAction('Comment')}
            >
              Comment
            </MenuItem>
            <MenuItem
              icon={Share2}
              endSlot={<span className="text-sm opacity-70">18</span>}
              onClick={() => handleAction('Share')}
            >
              Share
            </MenuItem>
            <MenuItem icon={Star} onClick={() => handleAction('Save')}>
              Save
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Calendar Menu</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={Calendar} onClick={() => handleAction('View calendar')}>
              View calendar
            </MenuItem>
            <MenuItem
              icon={Plus}
              color="primary"
              onClick={() => handleAction('New event')}
            >
              New event
            </MenuItem>
            <MenuItem
              icon={Clock}
              onClick={() => handleAction('Upcoming events')}
              endSlot={<Badge size="small">5</Badge>}
            >
              Upcoming events
            </MenuItem>
            <Divider />
            <MenuItem icon={Settings} onClick={() => handleAction('Calendar settings')}>
              Calendar settings
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Complex Menu with Status</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem
              icon={Check}
              endSlot={
                <Badge size="small" color="positive">
                  Done
                </Badge>
              }
              onClick={() => handleAction('Completed')}
            >
              Completed tasks
            </MenuItem>
            <MenuItem
              icon={Clock}
              endSlot={
                <Badge size="small" color="warning">
                  Pending
                </Badge>
              }
              onClick={() => handleAction('Pending')}
            >
              Pending tasks
            </MenuItem>
            <MenuItem
              icon={Flag}
              endSlot={
                <Badge size="small" color="critical">
                  Urgent
                </Badge>
              }
              onClick={() => handleAction('Urgent')}
            >
              Urgent tasks
            </MenuItem>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Mixed Menu (Actions + Navigation)</h2>
        <Card padding={4}>
          <View gap={1}>
            <MenuItem icon={User} href="/profile">
              View profile
            </MenuItem>
            <MenuItem icon={Edit} onClick={() => handleAction('Edit profile')}>
              Edit profile
            </MenuItem>
            <Divider />
            <MenuItem
              icon={Bell}
              href="/notifications"
              endSlot={
                <Badge size="small" color="critical">
                  3
                </Badge>
              }
            >
              Notifications
            </MenuItem>
            <MenuItem icon={Settings} href="/settings">
              Settings
            </MenuItem>
            <Divider />
            <MenuItem
              icon={LogOut}
              color="critical"
              onClick={() => handleAction('Logout')}
            >
              Logout
            </MenuItem>
          </View>
        </Card>
      </View>
    </View>
  )
}
