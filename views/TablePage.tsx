import { View } from '../components/View'
import { Text } from '../components/Text'
import { Table } from '../components/Table'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'

export function TablePage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Table Component</Text>
      <Text variant="body-1" color="neutral-faded">Organize and display data in tabular format</Text>

      <View gap={3}>
        <Text variant="title-2">Basic Table</Text>
        <Table>
          <Table.Row>
            <Table.Heading>Name</Table.Heading>
            <Table.Heading>Email</Table.Heading>
            <Table.Heading>Role</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell>John Doe</Table.Cell>
            <Table.Cell>john@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jane Smith</Table.Cell>
            <Table.Cell>jane@example.com</Table.Cell>
            <Table.Cell>Designer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob Johnson</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
            <Table.Cell>Manager</Table.Cell>
          </Table.Row>
        </Table>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Borders</Text>
        <Table border columnBorder>
          <Table.Row>
            <Table.Heading>Product</Table.Heading>
            <Table.Heading>Price</Table.Heading>
            <Table.Heading>Stock</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$999</Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mouse</Table.Cell>
            <Table.Cell>$29</Table.Cell>
            <Table.Cell>150</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Keyboard</Table.Cell>
            <Table.Cell>$79</Table.Cell>
            <Table.Cell>85</Table.Cell>
          </Table.Row>
        </Table>
      </View>

      <View gap={3}>
        <Text variant="title-2">Highlighted Rows (Striped)</Text>
        <Table>
          <Table.Row>
            <Table.Heading>ID</Table.Heading>
            <Table.Heading>Status</Table.Heading>
            <Table.Heading>Date</Table.Heading>
          </Table.Row>
          <Table.Row highlighted>
            <Table.Cell>#001</Table.Cell>
            <Table.Cell>Completed</Table.Cell>
            <Table.Cell>2025-01-15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>#002</Table.Cell>
            <Table.Cell>Pending</Table.Cell>
            <Table.Cell>2025-01-16</Table.Cell>
          </Table.Row>
          <Table.Row highlighted>
            <Table.Cell>#003</Table.Cell>
            <Table.Cell>In Progress</Table.Cell>
            <Table.Cell>2025-01-17</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>#004</Table.Cell>
            <Table.Cell>Completed</Table.Cell>
            <Table.Cell>2025-01-18</Table.Cell>
          </Table.Row>
        </Table>
      </View>

      <View gap={3}>
        <Text variant="title-2">Column Width & Alignment</Text>
        <Table border>
          <Table.Row>
            <Table.Heading width="40%">Description</Table.Heading>
            <Table.Heading width="20%" align="center">Quantity</Table.Heading>
            <Table.Heading width="20%" align="end">Price</Table.Heading>
            <Table.Heading width="20%" align="end">Total</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Premium Subscription</Table.Cell>
            <Table.Cell align="center">1</Table.Cell>
            <Table.Cell align="end">$99.00</Table.Cell>
            <Table.Cell align="end">$99.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Additional Storage (100GB)</Table.Cell>
            <Table.Cell align="center">2</Table.Cell>
            <Table.Cell align="end">$10.00</Table.Cell>
            <Table.Cell align="end">$20.00</Table.Cell>
          </Table.Row>
        </Table>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Badge Components</Text>
        <Table border>
          <Table.Row>
            <Table.Heading>User</Table.Heading>
            <Table.Heading>Status</Table.Heading>
            <Table.Heading>Priority</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Alice Brown</Table.Cell>
            <Table.Cell>
              <Badge color="positive">Active</Badge>
            </Table.Cell>
            <Table.Cell>
              <Badge color="critical">High</Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Charlie Davis</Table.Cell>
            <Table.Cell>
              <Badge color="neutral">Inactive</Badge>
            </Table.Cell>
            <Table.Cell>
              <Badge color="neutral">Low</Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Diana Evans</Table.Cell>
            <Table.Cell>
              <Badge color="positive">Active</Badge>
            </Table.Cell>
            <Table.Cell>
              <Badge color="warning">Medium</Badge>
            </Table.Cell>
          </Table.Row>
        </Table>
      </View>

      <View gap={3}>
        <Text variant="title-2">Column & Row Spanning</Text>
        <Table border columnBorder>
          <Table.Row>
            <Table.Heading rowSpan={2}>Category</Table.Heading>
            <Table.Heading colSpan={2} align="center">Q1 2025</Table.Heading>
            <Table.Heading colSpan={2} align="center">Q2 2025</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Heading>Revenue</Table.Heading>
            <Table.Heading>Growth</Table.Heading>
            <Table.Heading>Revenue</Table.Heading>
            <Table.Heading>Growth</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Software</Table.Cell>
            <Table.Cell>$50K</Table.Cell>
            <Table.Cell>+12%</Table.Cell>
            <Table.Cell>$56K</Table.Cell>
            <Table.Cell>+12%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Hardware</Table.Cell>
            <Table.Cell>$30K</Table.Cell>
            <Table.Cell>+8%</Table.Cell>
            <Table.Cell>$32K</Table.Cell>
            <Table.Cell>+7%</Table.Cell>
          </Table.Row>
        </Table>
      </View>

      <View gap={3}>
        <Text variant="title-2">In Card Container</Text>
        <Card>
          <Table>
            <Table.Row>
              <Table.Heading>Metric</Table.Heading>
              <Table.Heading align="end">Value</Table.Heading>
              <Table.Heading align="end">Change</Table.Heading>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Active Users</Table.Cell>
              <Table.Cell align="end">12,543</Table.Cell>
              <Table.Cell align="end">
                <Badge color="positive">+5.2%</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Page Views</Table.Cell>
              <Table.Cell align="end">45,821</Table.Cell>
              <Table.Cell align="end">
                <Badge color="positive">+12.8%</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Bounce Rate</Table.Cell>
              <Table.Cell align="end">38.5%</Table.Cell>
              <Table.Cell align="end">
                <Badge color="critical">-2.1%</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Custom Padding</Text>
        <Table border>
          <Table.Row>
            <Table.Heading padding={6}>Large Padding</Table.Heading>
            <Table.Heading padding={2}>Small Padding</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell padding={6}>This cell has larger padding</Table.Cell>
            <Table.Cell padding={2}>This cell has smaller padding</Table.Cell>
          </Table.Row>
        </Table>
      </View>
    </View>
  )
}
