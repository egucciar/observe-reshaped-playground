'use client'

import { View } from '../components/View'
import { Modal, useToggle } from '../components/Modal'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
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
  Download
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
      <h1 className="text-2xl font-bold">Modal Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Modal</h2>
        <Card padding={4}>
          <Button variant="solid" color="primary" onClick={basicModal.activate}>
            Open Basic Modal
          </Button>
          <Modal active={basicModal.active} onClose={basicModal.deactivate}>
            <View padding={6} gap={4}>
              <Modal.Title>Basic Modal</Modal.Title>
              <Modal.Subtitle>This is a simple modal with title and content.</Modal.Subtitle>
              <View gap={3}>
                <p>Modal content goes here. You can include any content you need.</p>
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
        <h2 className="text-xl font-semibold">Modal Positions</h2>
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

          <Modal active={centerModal.active} onClose={centerModal.deactivate} position="center">
            <View padding={6} gap={4}>
              <Modal.Title>Center Modal</Modal.Title>
              <p>This modal is positioned in the center of the screen (default).</p>
              <Button variant="solid" onClick={centerModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={bottomModal.active} onClose={bottomModal.deactivate} position="bottom">
            <View padding={6} gap={4}>
              <Modal.Title>Bottom Modal</Modal.Title>
              <p>This modal slides up from the bottom of the screen.</p>
              <Button variant="solid" onClick={bottomModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={startModal.active} onClose={startModal.deactivate} position="start">
            <View padding={6} gap={4}>
              <Modal.Title>Start Modal</Modal.Title>
              <p>This modal slides in from the start (left) side of the screen.</p>
              <Button variant="solid" onClick={startModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={endModal.active} onClose={endModal.deactivate} position="end">
            <View padding={6} gap={4}>
              <Modal.Title>End Modal</Modal.Title>
              <p>This modal slides in from the end (right) side of the screen.</p>
              <Button variant="solid" onClick={endModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={fullScreenModal.active} onClose={fullScreenModal.deactivate} position="full-screen">
            <View padding={6} gap={4}>
              <Modal.Title>Full Screen Modal</Modal.Title>
              <p>This modal takes up the entire screen.</p>
              <View height="300px" className="border rounded p-4">
                <span>Full screen content area</span>
              </View>
              <Button variant="solid" onClick={fullScreenModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Modal Sizes</h2>
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
              <p>This is a small modal with 400px width.</p>
              <Button variant="solid" onClick={smallModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={mediumModal.active} onClose={mediumModal.deactivate} size="600px">
            <View padding={6} gap={4}>
              <Modal.Title>Medium Modal</Modal.Title>
              <p>This is a medium modal with 600px width.</p>
              <Button variant="solid" onClick={mediumModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>

          <Modal active={largeModal.active} onClose={largeModal.deactivate} size="800px">
            <View padding={6} gap={4}>
              <Modal.Title>Large Modal</Modal.Title>
              <p>This is a large modal with 800px width.</p>
              <Button variant="solid" onClick={largeModal.deactivate}>
                Close
              </Button>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Confirmation Modals</h2>
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
                <CheckCircle size={24} className="text-blue-500" />
                <Modal.Title>Confirm Action</Modal.Title>
              </View>
              <Modal.Subtitle>Are you sure you want to proceed with this action?</Modal.Subtitle>
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
                <Trash2 size={24} className="text-red-500" />
                <Modal.Title>Delete Item</Modal.Title>
              </View>
              <Modal.Subtitle>This action cannot be undone. Are you sure you want to delete this item?</Modal.Subtitle>
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
        <h2 className="text-xl font-semibold">Alert Modals</h2>
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
                <CheckCircle size={24} className="text-green-500" />
                <Modal.Title>Success</Modal.Title>
              </View>
              <p>Your changes have been saved successfully!</p>
              <Button variant="solid" color="primary" onClick={successModal.deactivate}>
                OK
              </Button>
            </View>
          </Modal>

          <Modal active={warningModal.active} onClose={warningModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" gap={3} align="center">
                <AlertTriangle size={24} className="text-yellow-500" />
                <Modal.Title>Warning</Modal.Title>
              </View>
              <p>Please review your changes before proceeding. Some fields may be incomplete.</p>
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
                <Info size={24} className="text-blue-500" />
                <Modal.Title>Information</Modal.Title>
              </View>
              <p>Here is some important information you should know about this feature.</p>
              <Button variant="solid" onClick={infoModal.deactivate}>
                Got it
              </Button>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Form Modal</h2>
        <Card padding={4}>
          <Button variant="solid" color="primary" onClick={formModal.activate}>
            Create New Item
          </Button>

          <Modal active={formModal.active} onClose={formModal.deactivate}>
            <View padding={6} gap={4}>
              <Modal.Title>Create New Item</Modal.Title>
              <Modal.Subtitle>Fill in the details below to create a new item.</Modal.Subtitle>
              <View gap={3}>
                <View gap={2}>
                  <span className="text-sm font-semibold">Title</span>
                  <TextField name="title" placeholder="Enter title" />
                </View>
                <View gap={2}>
                  <span className="text-sm font-semibold">Description</span>
                  <textarea
                    className="border rounded px-3 py-2"
                    placeholder="Enter description"
                    rows={4}
                  />
                </View>
                <View gap={2}>
                  <span className="text-sm font-semibold">Category</span>
                  <select className="border rounded px-3 py-2">
                    <option>Select category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </View>
              </View>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={formModal.deactivate}>
                  Cancel
                </Button>
                <Button variant="solid" color="primary" icon={Save} onClick={formModal.deactivate}>
                  Create
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Profile Modal</h2>
        <Card padding={4}>
          <Button variant="outline" onClick={profileModal.activate}>
            View Profile
          </Button>

          <Modal active={profileModal.active} onClose={profileModal.deactivate}>
            <View padding={6} gap={4}>
              <View direction="row" justify="space-between" align="center">
                <Modal.Title>User Profile</Modal.Title>
                <Button variant="ghost" size="small" icon={X} onClick={profileModal.deactivate} />
              </View>
              <View gap={4} align="center">
                <Avatar size={20} initials="JD" />
                <View gap={1} align="center">
                  <span className="text-lg font-semibold">John Doe</span>
                  <span className="text-sm opacity-70">john.doe@example.com</span>
                  <Badge color="positive">Active</Badge>
                </View>
              </View>
              <Divider />
              <View gap={3}>
                <View gap={1}>
                  <span className="text-sm font-semibold">Role</span>
                  <span className="text-sm">Administrator</span>
                </View>
                <View gap={1}>
                  <span className="text-sm font-semibold">Member since</span>
                  <span className="text-sm">January 2024</span>
                </View>
                <View gap={1}>
                  <span className="text-sm font-semibold">Last login</span>
                  <span className="text-sm">2 hours ago</span>
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
        <h2 className="text-xl font-semibold">Settings Modal</h2>
        <Card padding={4}>
          <Button variant="outline" icon={Settings} onClick={settingsModal.activate}>
            Open Settings
          </Button>

          <Modal active={settingsModal.active} onClose={settingsModal.deactivate} size="700px">
            <View padding={6} gap={4}>
              <Modal.Title>Settings</Modal.Title>
              <Modal.Subtitle>Manage your account preferences and settings.</Modal.Subtitle>
              <View gap={4}>
                <View gap={2}>
                  <span className="text-sm font-semibold">Account</span>
                  <View gap={2} className="border rounded p-3">
                    <View direction="row" justify="space-between" align="center">
                      <span className="text-sm">Email notifications</span>
                      <input type="checkbox" defaultChecked />
                    </View>
                    <View direction="row" justify="space-between" align="center">
                      <span className="text-sm">Push notifications</span>
                      <input type="checkbox" />
                    </View>
                    <View direction="row" justify="space-between" align="center">
                      <span className="text-sm">Two-factor authentication</span>
                      <input type="checkbox" defaultChecked />
                    </View>
                  </View>
                </View>
                <View gap={2}>
                  <span className="text-sm font-semibold">Privacy</span>
                  <View gap={2} className="border rounded p-3">
                    <View direction="row" justify="space-between" align="center">
                      <span className="text-sm">Profile visibility</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>Public</option>
                        <option>Private</option>
                        <option>Friends only</option>
                      </select>
                    </View>
                  </View>
                </View>
              </View>
              <View direction="row" gap={2} justify="end">
                <Button variant="ghost" onClick={settingsModal.deactivate}>
                  Cancel
                </Button>
                <Button variant="solid" color="primary" onClick={settingsModal.deactivate}>
                  Save Changes
                </Button>
              </View>
            </View>
          </Modal>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Image Preview Modal</h2>
        <Card padding={4}>
          <Button variant="outline" icon={ImageIcon} onClick={imageModal.activate}>
            Preview Image
          </Button>

          <Modal active={imageModal.active} onClose={imageModal.deactivate} size="900px">
            <View padding={6} gap={4}>
              <View direction="row" justify="space-between" align="center">
                <Modal.Title>Image Preview</Modal.Title>
                <Button variant="ghost" size="small" icon={X} onClick={imageModal.deactivate} />
              </View>
              <View className="border rounded bg-gray-100" height="400px" align="center" justify="center">
                <ImageIcon size={80} className="opacity-30" />
              </View>
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
        <h2 className="text-xl font-semibold">Details Modal</h2>
        <Card padding={4}>
          <Button variant="outline" icon={FileText} onClick={detailsModal.activate}>
            View Details
          </Button>

          <Modal active={detailsModal.active} onClose={detailsModal.deactivate}>
            <View padding={6} gap={4}>
              <Modal.Title>Item Details</Modal.Title>
              <View gap={3}>
                <View gap={1}>
                  <span className="text-xs font-semibold opacity-70 uppercase">Item ID</span>
                  <span className="text-sm">ITM-2024-00123</span>
                </View>
                <Divider />
                <View gap={1}>
                  <span className="text-xs font-semibold opacity-70 uppercase">Status</span>
                  <Badge color="positive">Active</Badge>
                </View>
                <Divider />
                <View gap={1}>
                  <span className="text-xs font-semibold opacity-70 uppercase">Created</span>
                  <span className="text-sm">January 15, 2024 at 10:30 AM</span>
                </View>
                <Divider />
                <View gap={1}>
                  <span className="text-xs font-semibold opacity-70 uppercase">Last Modified</span>
                  <span className="text-sm">January 20, 2024 at 2:45 PM</span>
                </View>
                <Divider />
                <View gap={1}>
                  <span className="text-xs font-semibold opacity-70 uppercase">Description</span>
                  <p className="text-sm">This is a detailed description of the item with additional information about its purpose and usage.</p>
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
