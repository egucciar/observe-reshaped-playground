'use client'

import { View } from '../components/View'
import { Text } from '../components/Text'
import { Modal, useToggle } from '../components/Modal'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
import { TextArea } from '../components/TextArea'
import { Select } from '../components/Select'
import { Switch } from '../components/Switch'
import { Divider } from '../components/Divider'
import { Badge } from '../components/Badge'
import { Avatar } from '../components/Avatar'
import {
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Trash2,
  Save,
  Settings,
  User,
  Mail,
  Image as ImageIcon,
  FileText,
  Download,
} from 'lucide-react'

export function ModalPage() {
  const basicModal = useToggle(false)
  const centerModal = useToggle(false)
  const bottomModal = useToggle(false)
  const startModal = useToggle(false)
  const endModal = useToggle(false)
  const fullScreenModal = useToggle(false)
  const smallModal = useToggle(false)
  const mediumModal = useToggle(false)
  const largeModal = useToggle(false)
  const confirmModal = useToggle(false)
  const deleteModal = useToggle(false)
  const successModal = useToggle(false)
  const warningModal = useToggle(false)
  const infoModal = useToggle(false)
  const formModal = useToggle(false)
  const profileModal = useToggle(false)
  const settingsModal = useToggle(false)
  const imageModal = useToggle(false)
  const detailsModal = useToggle(false)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Modal Component</Text>

      <View gap={3}>
        <Text variant="title-2">Basic Modal</Text>
        <Card padding={4}>
          <Button variant="solid" color="primary" onClick={basicModal.activate}>
            Open Basic Modal
          </Button>
          <Modal active={basicModal.active} onClose={basicModal.deactivate}>
            <View padding={6} gap={4}>
              <Modal.Title>Basic Modal</Modal.Title>
              <Modal.Subtitle>
                This is a simple modal with title and content.
              </Modal.Subtitle>
              <View gap={3}>
                <Text variant="body-2">Modal content goes here. You can include any content you need.</Text>
              </View>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={basicModal.deactivate}>
                  Cancel
                </Button>
                <Button variant="solid" color="primary" onClick={basicModal.deactivate}>
                  Confirm
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Modal Positions</Text>
        <Card padding={4}>
          <View direction="row" gap={3} wrap>
            <Button variant="outline" onClick={centerModal.activate}>
              Center (Default)
            </Button>
            <Button variant="outline" onClick={bottomModal.activate}>
              Bottom
            </Button>
            <Button variant="outline" onClick={startModal.activate}>
              Start
            </Button>
            <Button variant="outline" onClick={endModal.activate}>
              End
            </Button>
            <Button variant="outline" onClick={fullScreenModal.activate}>
              Full Screen
            </Button>
          </View>

          <Modal
            active={centerModal.active}
            onClose={centerModal.deactivate}
            position="center"
          >
            <View padding={6} gap={4}>
              <Modal.Title>Center Modal</Modal.Title>
              <Text variant="body-2">This modal is positioned in the center of the screen (default).</Text>
              <Button variant="solid" onClick={centerModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal
            active={bottomModal.active}
            onClose={bottomModal.deactivate}
            position="bottom"
          >
            <View padding={6} gap={4}>
              <Modal.Title>Bottom Modal</Modal.Title>
              <Text variant="body-2">This modal slides up from the bottom of the screen.</Text>
              <Button variant="solid" onClick={bottomModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal
            active={startModal.active}
            onClose={startModal.deactivate}
            position="start"
          >
            <View padding={6} gap={4}>
              <Modal.Title>Start Modal</Modal.Title>
              <Text variant="body-2">This modal slides in from the start (left) side of the screen.</Text>
              <Button variant="solid" onClick={startModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={endModal.active} onClose={endModal.deactivate} position="end">
            <View padding={6} gap={4}>
              <Modal.Title>End Modal</Modal.Title>
              <Text variant="body-2">This modal slides in from the end (right) side of the screen.</Text>
              <Button variant="solid" onClick={endModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal
            active={fullScreenModal.active}
            onClose={fullScreenModal.deactivate}
            position="full-screen"
          >
            <View padding={6} gap={4}>
              <Modal.Title>Full Screen Modal</Modal.Title>
              <Text variant="body-2">This modal takes up the entire screen.</Text>
              <Card padding={4}>
                <View height="300px">
                  <Text variant="body-2">Full screen content area</Text>
                </View>
              </Card>
              <Button variant="solid" onClick={fullScreenModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Modal Sizes</Text>
        <Card padding={4}>
          <View direction="row" gap={3} wrap>
            <Button variant="outline" onClick={smallModal.activate}>
              Small (400px)
            </Button>
            <Button variant="outline" onClick={mediumModal.activate}>
              Medium (600px)
            </Button>
            <Button variant="outline" onClick={largeModal.activate}>
              Large (800px)
            </Button>
          </View>

          <Modal active={smallModal.active} onClose={smallModal.deactivate} size="400px">
            <View padding={6} gap={4}>
              <Modal.Title>Small Modal</Modal.Title>
              <Text variant="body-2">This is a small modal with 400px width.</Text>
              <Button variant="solid" onClick={smallModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal
            active={mediumModal.active}
            onClose={mediumModal.deactivate}
            size="600px"
          >
            <View padding={6} gap={4}>
              <Modal.Title>Medium Modal</Modal.Title>
              <Text variant="body-2">This is a medium modal with 600px width.</Text>
              <Button variant="solid" onClick={mediumModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={largeModal.active} onClose={largeModal.deactivate} size="800px">
            <View padding={6} gap={4}>
              <Modal.Title>Large Modal</Modal.Title>
              <Text variant="body-2">This is a large modal with 800px width.</Text>
              <Button variant="solid" onClick={largeModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Confirmation Modals</Text>
        <Card padding={4}>
          <View direction="row" gap={3} wrap>
            <Button variant="solid" color="primary" onClick={confirmModal.activate}>
              Confirm Action
            </Button>
            <Button variant="solid" color="critical" onClick={deleteModal.activate}>
              Delete Item
            </Button>
          </View>

          <Modal active={confirmModal.active} onClose={confirmModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" gap={3} align="center">
                <Text color="primary">
                  <CheckCircle size={24} />
                </Text>
                <Modal.Title>Confirm Action</Modal.Title>
              </View>
              <Modal.Subtitle>
                Are you sure you want to proceed with this action?
              </Modal.Subtitle>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={confirmModal.deactivate}>
                  Cancel
                </Button>
                <Button variant="solid" color="primary" onClick={confirmModal.deactivate}>
                  Confirm
                </Button>
              </View>
            </View>
          </Modal>

          <Modal active={deleteModal.active} onClose={deleteModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" gap={3} align="center">
                <Text color="critical">
                  <Trash2 size={24} />
                </Text>
                <Modal.Title>Delete Item</Modal.Title>
              </View>
              <Modal.Subtitle>
                This action cannot be undone. Are you sure you want to delete this item?
              </Modal.Subtitle>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={deleteModal.deactivate}>
                  Cancel
                </Button>
                <Button variant="solid" color="critical" onClick={deleteModal.deactivate}>
                  Delete
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Alert Modals</Text>
        <Card padding={4}>
          <View direction="row" gap={3} wrap>
            <Button variant="outline" onClick={successModal.activate}>
              Success
            </Button>
            <Button variant="outline" onClick={warningModal.activate}>
              Warning
            </Button>
            <Button variant="outline" onClick={infoModal.activate}>
              Info
            </Button>
          </View>

          <Modal active={successModal.active} onClose={successModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" gap={3} align="center">
                <Text color="positive">
                  <CheckCircle size={24} />
                </Text>
                <Modal.Title>Success</Modal.Title>
              </View>
              <Text variant="body-2">Your changes have been saved successfully!</Text>
              <Button variant="solid" color="primary" onClick={successModal.deactivate}>
                OK
              </Button>
            </View>
          </Modal>

          <Modal active={warningModal.active} onClose={warningModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" gap={3} align="center">
                <Text color="warning">
                  <AlertTriangle size={24} />
                </Text>
                <Modal.Title>Warning</Modal.Title>
              </View>
              <Text variant="body-2">
                Please review your changes before proceeding. Some fields may be
                incomplete.
              </Text>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={warningModal.deactivate}>
                  Review
                </Button>
                <Button variant="solid" color="primary" onClick={warningModal.deactivate}>
                  Proceed Anyway
                </Button>
              </View>
            </View>
          </Modal>

          <Modal active={infoModal.active} onClose={infoModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" gap={3} align="center">
                <Text color="primary">
                  <Info size={24} />
                </Text>
                <Modal.Title>Information</Modal.Title>
              </View>
              <Text variant="body-2">
                Here is some important information you should know about this feature.
              </Text>
              <Button variant="solid" onClick={infoModal.deactivate}>
                Got it
              </Button>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Form Modal</Text>
        <Card padding={4}>
          <Button variant="solid" color="primary" onClick={formModal.activate}>
            Create New Item
          </Button>

          <Modal active={formModal.active} onClose={formModal.deactivate}>
            <View padding={6} gap={4}>
              <Modal.Title>Create New Item</Modal.Title>
              <Modal.Subtitle>
                Fill in the details below to create a new item.
              </Modal.Subtitle>
              <View gap={3}>
                <View gap={2}>
                  <Text variant="body-2" weight="medium">Title</Text>
                  <TextField name="title" placeholder="Enter title" />
                </View>
                <View gap={2}>
                  <Text variant="body-2" weight="medium">Description</Text>
                  <TextArea
                    name="description"
                    placeholder="Enter description"
                    inputAttributes={{ rows: 4 }}
                  />
                </View>
                <View gap={2}>
                  <Text variant="body-2" weight="medium">Category</Text>
                  <Select name="category" placeholder="Select category">
                    <Select.Option value="cat1">Category 1</Select.Option>
                    <Select.Option value="cat2">Category 2</Select.Option>
                    <Select.Option value="cat3">Category 3</Select.Option>
                  </Select>
                </View>
              </View>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={formModal.deactivate}>
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  color="primary"
                  icon={Save}
                  onClick={formModal.deactivate}
                >
                  Create
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Profile Modal</Text>
        <Card padding={4}>
          <Button variant="outline" onClick={profileModal.activate}>
            View Profile
          </Button>

          <Modal active={profileModal.active} onClose={profileModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" justify="space-between" align="center">
                <Modal.Title>User Profile</Modal.Title>
                <Button
                  variant="ghost"
                  size="small"
                  icon={X}
                  onClick={profileModal.deactivate}
                />
              </View>
              <View gap={4} align="center">
                <Avatar size={20} initials="JD" />
                <View gap={1} align="center">
                  <Text variant="title-4" weight="medium">John Doe</Text>
                  <Text variant="body-2" color="neutral-faded">john.doe@example.com</Text>
                  <Badge color="positive">Active</Badge>
                </View>
              </View>
              <Divider />
              <View gap={3}>
                <View gap={1}>
                  <Text variant="body-2" weight="medium">Role</Text>
                  <Text variant="body-2">Administrator</Text>
                </View>
                <View gap={1}>
                  <Text variant="body-2" weight="medium">Member since</Text>
                  <Text variant="body-2">January 2024</Text>
                </View>
                <View gap={1}>
                  <Text variant="body-2" weight="medium">Last login</Text>
                  <Text variant="body-2">2 hours ago</Text>
                </View>
              </View>
              <View direction="row" gap={2}>
                <Button variant="outline" icon={Mail} fullWidth>
                  Send Message
                </Button>
                <Button variant="solid" color="primary" icon={User} fullWidth>
                  Edit Profile
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Settings Modal</Text>
        <Card padding={4}>
          <Button variant="outline" icon={Settings} onClick={settingsModal.activate}>
            Open Settings
          </Button>

          <Modal
            active={settingsModal.active}
            onClose={settingsModal.deactivate}
            size="700px"
          >
            <View padding={6} gap={4}>
              <Modal.Title>Settings</Modal.Title>
              <Modal.Subtitle>
                Manage your account preferences and settings.
              </Modal.Subtitle>
              <View gap={4}>
                <View gap={2}>
                  <Text variant="body-2" weight="medium">Account</Text>
                  <Card padding={3}>
                    <View gap={2}>
                      <View direction="row" justify="space-between" align="center">
                        <Text variant="body-2">Email notifications</Text>
                        <Switch name="email-notif" defaultChecked />
                      </View>
                      <View direction="row" justify="space-between" align="center">
                        <Text variant="body-2">Push notifications</Text>
                        <Switch name="push-notif" />
                      </View>
                      <View direction="row" justify="space-between" align="center">
                        <Text variant="body-2">Two-factor authentication</Text>
                        <Switch name="2fa" defaultChecked />
                      </View>
                    </View>
                  </Card>
                </View>
                <View gap={2}>
                  <Text variant="body-2" weight="medium">Privacy</Text>
                  <Card padding={3}>
                    <View gap={2}>
                      <View direction="row" justify="space-between" align="center">
                        <Text variant="body-2">Profile visibility</Text>
                        <Select name="visibility" defaultValue="public">
                          <Select.Option value="public">Public</Select.Option>
                          <Select.Option value="private">Private</Select.Option>
                          <Select.Option value="friends">Friends only</Select.Option>
                        </Select>
                      </View>
                    </View>
                  </Card>
                </View>
              </View>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={settingsModal.deactivate}>
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  color="primary"
                  onClick={settingsModal.deactivate}
                >
                  Save Changes
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Image Preview Modal</Text>
        <Card padding={4}>
          <Button variant="outline" icon={ImageIcon} onClick={imageModal.activate}>
            Preview Image
          </Button>

          <Modal active={imageModal.active} onClose={imageModal.deactivate} size="900px">
            <View padding={6} gap={4}>
              <View direction="row" justify="space-between" align="center">
                <Modal.Title>Image Preview</Modal.Title>
                <Button
                  variant="ghost"
                  size="small"
                  icon={X}
                  onClick={imageModal.deactivate}
                />
              </View>
              <Card padding={4}>
                <View
                  backgroundColor="neutral-faded"
                  height="400px"
                  align="center"
                  justify="center"
                >
                  <Text color="neutral-faded">
                    <ImageIcon size={80} />
                  </Text>
                </View>
              </Card>
              <View direction="row" gap={2}>
                <Button variant="outline" icon={Download} fullWidth>
                  Download
                </Button>
                <Button variant="solid" color="primary" fullWidth>
                  Use Image
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Details Modal</Text>
        <Card padding={4}>
          <Button variant="outline" icon={FileText} onClick={detailsModal.activate}>
            View Details
          </Button>

          <Modal active={detailsModal.active} onClose={detailsModal.deactivate}>
            <View padding={6} gap={4}>
              <Modal.Title>Item Details</Modal.Title>
              <View gap={3}>
                <View gap={1}>
                  <Text variant="caption-1" weight="medium" color="neutral-faded">
                    ITEM ID
                  </Text>
                  <Text variant="body-2">ITM-2024-00123</Text>
                </View>
                <Divider />
                <View gap={1}>
                  <Text variant="caption-1" weight="medium" color="neutral-faded">
                    STATUS
                  </Text>
                  <Badge color="positive">Active</Badge>
                </View>
                <Divider />
                <View gap={1}>
                  <Text variant="caption-1" weight="medium" color="neutral-faded">
                    CREATED
                  </Text>
                  <Text variant="body-2">January 15, 2024 at 10:30 AM</Text>
                </View>
                <Divider />
                <View gap={1}>
                  <Text variant="caption-1" weight="medium" color="neutral-faded">
                    LAST MODIFIED
                  </Text>
                  <Text variant="body-2">January 20, 2024 at 2:45 PM</Text>
                </View>
                <Divider />
                <View gap={1}>
                  <Text variant="caption-1" weight="medium" color="neutral-faded">
                    DESCRIPTION
                  </Text>
                  <Text variant="body-2">
                    This is a detailed description of the item with additional information
                    about its purpose and usage.
                  </Text>
                </View>
              </View>
              <Button variant="solid" onClick={detailsModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>
        </Card>
      </View>
    </View>
  )
}
