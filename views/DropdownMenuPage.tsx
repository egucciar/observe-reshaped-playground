'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { DropdownMenu } from '../components/DropdownMenu'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Avatar } from '../components/Avatar'
import {
  MoreVertical,
  Settings,
  User,
  LogOut,
  Copy,
  Edit,
  Trash2,
  Download,
  Share2,
  Star,
  Archive,
  Mail,
  Phone,
  Calendar,
} from 'lucide-react'

export function DropdownMenuPage() {
  const [lastAction, setLastAction] = useState<string>('')

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">DropdownMenu Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The DropdownMenu component includes the following customizations:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">Default Size Strategy</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  DropdownMenu.Item defaults to size="small" for consistent compact UI
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Uses simple wrapper approach - no children mapping needed
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
        <h2>Basic Dropdown Menu</h2>
        <Card padding={4}>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              {attributes => (
                <Button attributes={attributes} variant="solid" color="primary">
                  Open Menu
                </Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={() => setLastAction('Action 1')}>
                Action 1
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => setLastAction('Action 2')}>
                Action 2
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => setLastAction('Action 3')}>
                Action 3
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu with Icons</h2>
        <Card padding={4}>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              {attributes => (
                <Button attributes={attributes} icon={MoreVertical} variant="ghost">
                  Actions
                </Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                startSlot={<Edit size={16} />}
                onClick={() => setLastAction('Edit')}
              >
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Copy size={16} />}
                onClick={() => setLastAction('Copy')}
              >
                Copy
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Download size={16} />}
                onClick={() => setLastAction('Download')}
              >
                Download
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Trash2 size={16} />}
                onClick={() => setLastAction('Delete')}
                color="critical"
              >
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Card>
      </View>

      <View gap={3}>
        <h2>Menu with Sections</h2>
        <Card padding={4}>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              {attributes => (
                <Button attributes={attributes} variant="outline">
                  File Menu
                </Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                startSlot={<Edit size={16} />}
                onClick={() => setLastAction('New File')}
              >
                New File
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Copy size={16} />}
                onClick={() => setLastAction('Open')}
              >
                Open
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Download size={16} />}
                onClick={() => setLastAction('Save')}
              >
                Save
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Share2 size={16} />}
                onClick={() => setLastAction('Export')}
              >
                Export
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Trash2 size={16} />}
                onClick={() => setLastAction('Close')}
                color="critical"
              >
                Close
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Card>
      </View>

      <View gap={3}>
        <h2>User Menu</h2>
        <Card padding={4}>
          <View direction="row" gap={3} align="center">
            <Avatar initials="JD" color="primary" />
            <View gap={1}>
              <span className="font-semibold">John Doe</span>
              <span className="text-sm opacity-70">john@example.com</span>
            </View>
            <View grow />
            <DropdownMenu>
              <DropdownMenu.Trigger>
                {attributes => (
                  <Button attributes={attributes} icon={MoreVertical} variant="ghost" />
                )}
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item
                  startSlot={<User size={16} />}
                  onClick={() => setLastAction('Profile')}
                >
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  startSlot={<Settings size={16} />}
                  onClick={() => setLastAction('Settings')}
                >
                  Settings
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  startSlot={<LogOut size={16} />}
                  onClick={() => setLastAction('Logout')}
                  color="critical"
                >
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Nested Submenu</h2>
        <Card padding={4}>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              {attributes => (
                <Button attributes={attributes} variant="solid" color="primary">
                  More Actions
                </Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                startSlot={<Copy size={16} />}
                onClick={() => setLastAction('Copy')}
              >
                Copy
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Edit size={16} />}
                onClick={() => setLastAction('Edit')}
              >
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Share2 size={16} />}
                onClick={() => setLastAction('Share')}
              >
                Share
              </DropdownMenu.Item>
              <DropdownMenu.Item
                startSlot={<Trash2 size={16} />}
                onClick={() => setLastAction('Delete')}
                color="critical"
              >
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Card>
      </View>

      <View gap={3}>
        <h2>Context Menu on Cards</h2>
        <View direction="row" gap={3} wrap>
          <Card padding={4} elevated>
            <View gap={3}>
              <View direction="row" justify="space-between" align="center">
                <h3>Project Alpha</h3>
                <DropdownMenu>
                  <DropdownMenu.Trigger>
                    {attributes => (
                      <Button
                        attributes={attributes}
                        icon={MoreVertical}
                        variant="ghost"
                        size="small"
                      />
                    )}
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item
                      startSlot={<Edit size={16} />}
                      onClick={() => setLastAction('Edit Project Alpha')}
                    >
                      Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      startSlot={<Star size={16} />}
                      onClick={() => setLastAction('Favorite Project Alpha')}
                    >
                      Add to Favorites
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      startSlot={<Archive size={16} />}
                      onClick={() => setLastAction('Archive Project Alpha')}
                    >
                      Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      startSlot={<Trash2 size={16} />}
                      onClick={() => setLastAction('Delete Project Alpha')}
                      color="critical"
                    >
                      Delete
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </View>
              <p className="text-sm opacity-70">Active project with 12 tasks</p>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={3}>
              <View direction="row" justify="space-between" align="center">
                <h3>Project Beta</h3>
                <DropdownMenu>
                  <DropdownMenu.Trigger>
                    {attributes => (
                      <Button
                        attributes={attributes}
                        icon={MoreVertical}
                        variant="ghost"
                        size="small"
                      />
                    )}
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item
                      startSlot={<Edit size={16} />}
                      onClick={() => setLastAction('Edit Project Beta')}
                    >
                      Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      startSlot={<Star size={16} />}
                      onClick={() => setLastAction('Favorite Project Beta')}
                    >
                      Add to Favorites
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      startSlot={<Archive size={16} />}
                      onClick={() => setLastAction('Archive Project Beta')}
                    >
                      Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      startSlot={<Trash2 size={16} />}
                      onClick={() => setLastAction('Delete Project Beta')}
                      color="critical"
                    >
                      Delete
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </View>
              <p className="text-sm opacity-70">In progress with 8 tasks</p>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2>Contact Actions</h2>
        <Card padding={4}>
          <View gap={0} divided>
            <View padding={3} direction="row" justify="space-between" align="center">
              <View direction="row" gap={3} align="center">
                <Avatar initials="AS" color="positive" />
                <View gap={1}>
                  <span className="font-semibold">Alice Smith</span>
                  <span className="text-sm opacity-70">Product Designer</span>
                </View>
              </View>
              <DropdownMenu>
                <DropdownMenu.Trigger>
                  {attributes => (
                    <Button
                      attributes={attributes}
                      icon={MoreVertical}
                      variant="ghost"
                      size="small"
                    />
                  )}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item
                    startSlot={<Mail size={16} />}
                    onClick={() => setLastAction('Email Alice')}
                  >
                    Send Email
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    startSlot={<Phone size={16} />}
                    onClick={() => setLastAction('Call Alice')}
                  >
                    Call
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    startSlot={<Calendar size={16} />}
                    onClick={() => setLastAction('Schedule with Alice')}
                  >
                    Schedule Meeting
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    startSlot={<User size={16} />}
                    onClick={() => setLastAction('View Alice Profile')}
                  >
                    View Profile
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </View>

            <View padding={3} direction="row" justify="space-between" align="center">
              <View direction="row" gap={3} align="center">
                <Avatar initials="BJ" color="warning" />
                <View gap={1}>
                  <span className="font-semibold">Bob Johnson</span>
                  <span className="text-sm opacity-70">Software Engineer</span>
                </View>
              </View>
              <DropdownMenu>
                <DropdownMenu.Trigger>
                  {attributes => (
                    <Button
                      attributes={attributes}
                      icon={MoreVertical}
                      variant="ghost"
                      size="small"
                    />
                  )}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item
                    startSlot={<Mail size={16} />}
                    onClick={() => setLastAction('Email Bob')}
                  >
                    Send Email
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    startSlot={<Phone size={16} />}
                    onClick={() => setLastAction('Call Bob')}
                  >
                    Call
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    startSlot={<Calendar size={16} />}
                    onClick={() => setLastAction('Schedule with Bob')}
                  >
                    Schedule Meeting
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    startSlot={<User size={16} />}
                    onClick={() => setLastAction('View Bob Profile')}
                  >
                    View Profile
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
