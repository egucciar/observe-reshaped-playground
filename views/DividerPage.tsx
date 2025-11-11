'use client'

import { View } from '../components/View'
import { Divider } from '../components/Divider'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'

export function DividerPage() {
  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">Divider Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Horizontal Divider</h2>
        <Card padding={4}>
          <View gap={0}>
            <p>Content above divider</p>
            <Divider />
            <p>Content below divider</p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Divider with Text Content</h2>
        <Card padding={4}>
          <View gap={3}>
            <Button variant="solid" color="primary" fullWidth>
              Login with Email
            </Button>
            <Divider>or login with</Divider>
            <View direction="row" gap={2}>
              <Button variant="outline" fullWidth>Google</Button>
              <Button variant="outline" fullWidth>GitHub</Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Content Position</h2>
        <Card padding={4}>
          <View gap={3}>
            <View gap={2}>
              <p className="text-sm opacity-70">Start position:</p>
              <Divider contentPosition="start">Start</Divider>
            </View>
            <View gap={2}>
              <p className="text-sm opacity-70">Center position (default):</p>
              <Divider contentPosition="center">Center</Divider>
            </View>
            <View gap={2}>
              <p className="text-sm opacity-70">End position:</p>
              <Divider contentPosition="end">End</Divider>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Vertical Dividers</h2>
        <Card padding={4}>
          <View direction="row" gap={3} align="center" height={20}>
            <View justify="center" align="center" width="100%">
              <span>Section 1</span>
            </View>
            <Divider vertical />
            <View justify="center" align="center" width="100%">
              <span>Section 2</span>
            </View>
            <Divider vertical />
            <View justify="center" align="center" width="100%">
              <span>Section 3</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Blank Divider</h2>
        <Card padding={4}>
          <View gap={3}>
            <p>Content with blank divider below</p>
            <Divider blank />
            <p>The blank divider removes the 1px space</p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Section Separators</h2>
        <Card padding={4}>
          <View gap={0}>
            <View padding={3}>
              <h3 className="font-semibold">Profile Information</h3>
              <p className="text-sm opacity-70">Update your account details</p>
            </View>
            <Divider />
            <View padding={3}>
              <h3 className="font-semibold">Privacy Settings</h3>
              <p className="text-sm opacity-70">Manage your privacy preferences</p>
            </View>
            <Divider />
            <View padding={3}>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm opacity-70">Configure notification preferences</p>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Team Members List</h2>
        <Card padding={4}>
          <View gap={0}>
            <View padding={3} direction="row" gap={3} align="center">
              <Avatar initials="JD" color="primary" />
              <View gap={1}>
                <span className="font-semibold">John Doe</span>
                <span className="text-sm opacity-70">john@example.com</span>
              </View>
            </View>
            <Divider />
            <View padding={3} direction="row" gap={3} align="center">
              <Avatar initials="AS" color="positive" />
              <View gap={1}>
                <span className="font-semibold">Alice Smith</span>
                <span className="text-sm opacity-70">alice@example.com</span>
              </View>
            </View>
            <Divider />
            <View padding={3} direction="row" gap={3} align="center">
              <Avatar initials="BJ" color="warning" />
              <View gap={1}>
                <span className="font-semibold">Bob Johnson</span>
                <span className="text-sm opacity-70">bob@example.com</span>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Stats Dashboard</h2>
        <Card padding={4}>
          <View direction="row" gap={0} align="stretch" height={30}>
            <View padding={3} justify="center" align="center" width="100%">
              <View gap={1} align="center">
                <span className="text-3xl font-bold">1,234</span>
                <span className="text-sm opacity-70">Users</span>
              </View>
            </View>
            <Divider vertical />
            <View padding={3} justify="center" align="center" width="100%">
              <View gap={1} align="center">
                <span className="text-3xl font-bold">567</span>
                <span className="text-sm opacity-70">Projects</span>
              </View>
            </View>
            <Divider vertical />
            <View padding={3} justify="center" align="center" width="100%">
              <View gap={1} align="center">
                <span className="text-3xl font-bold">89</span>
                <span className="text-sm opacity-70">Teams</span>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Toolbar with Vertical Dividers</h2>
        <Card padding={3}>
          <View direction="row" gap={3} align="center">
            <Button variant="ghost" size="small">File</Button>
            <Button variant="ghost" size="small">Edit</Button>
            <Button variant="ghost" size="small">View</Button>
            <Divider vertical />
            <Button variant="ghost" size="small">Format</Button>
            <Button variant="ghost" size="small">Tools</Button>
            <Divider vertical />
            <Button variant="ghost" size="small">Help</Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Article Sections</h2>
        <Card padding={4}>
          <View gap={0}>
            <View paddingBlock={3}>
              <h3 className="text-lg font-semibold mb-2">Introduction</h3>
              <p className="text-sm opacity-70">
                This is the introduction section of the article with some sample content.
              </p>
            </View>
            <Divider>Chapter 1</Divider>
            <View paddingBlock={3}>
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
              <p className="text-sm opacity-70">
                Learn the basics and get up and running quickly with our comprehensive guide.
              </p>
            </View>
            <Divider>Chapter 2</Divider>
            <View paddingBlock={3}>
              <h3 className="text-lg font-semibold mb-2">Advanced Topics</h3>
              <p className="text-sm opacity-70">
                Dive deeper into advanced features and best practices for optimal results.
              </p>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Pricing Tiers</h2>
        <View direction="row" gap={3}>
          <Card padding={4} elevated>
            <View gap={3}>
              <Badge color="neutral">Free</Badge>
              <View gap={1}>
                <span className="text-3xl font-bold">$0</span>
                <span className="text-sm opacity-70">per month</span>
              </View>
              <Divider />
              <View gap={2}>
                <p className="text-sm">✓ Basic features</p>
                <p className="text-sm">✓ 5 projects</p>
                <p className="text-sm">✓ Community support</p>
              </View>
              <Button variant="outline" fullWidth>Get Started</Button>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={3}>
              <Badge color="primary">Pro</Badge>
              <View gap={1}>
                <span className="text-3xl font-bold">$29</span>
                <span className="text-sm opacity-70">per month</span>
              </View>
              <Divider />
              <View gap={2}>
                <p className="text-sm">✓ All Free features</p>
                <p className="text-sm">✓ Unlimited projects</p>
                <p className="text-sm">✓ Priority support</p>
              </View>
              <Button variant="solid" color="primary" fullWidth>Upgrade</Button>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={3}>
              <Badge color="warning">Enterprise</Badge>
              <View gap={1}>
                <span className="text-3xl font-bold">$99</span>
                <span className="text-sm opacity-70">per month</span>
              </View>
              <Divider />
              <View gap={2}>
                <p className="text-sm">✓ All Pro features</p>
                <p className="text-sm">✓ Custom integrations</p>
                <p className="text-sm">✓ Dedicated support</p>
              </View>
              <Button variant="outline" fullWidth>Contact Sales</Button>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Using View's divided Property</h2>
        <Card padding={4}>
          <View divided gap={0}>
            <View padding={3}>
              <p>Item 1 - Automatically divided</p>
            </View>
            <View padding={3}>
              <p>Item 2 - Automatically divided</p>
            </View>
            <View padding={3}>
              <p>Item 3 - Automatically divided</p>
            </View>
            <View padding={3}>
              <p>Item 4 - No divider after last item</p>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
