'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Card } from '../components/Card'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { Table } from '../components/Table'
import { Badge } from '../components/Badge'
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, CreditCard } from 'lucide-react'

export function DashboardBlockPage() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null)

  const statsData = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up' as const,
      icon: DollarSign,
      description: 'from last month',
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+180.1%',
      trend: 'up' as const,
      icon: Users,
      description: 'from last month',
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19%',
      trend: 'up' as const,
      icon: CreditCard,
      description: 'from last month',
    },
    {
      title: 'Active Now',
      value: '573',
      change: '-4.3%',
      trend: 'down' as const,
      icon: Activity,
      description: 'from last hour',
    },
  ]

  const tableData = [
    { id: '1', customer: 'Olivia Martin', email: 'olivia.martin@email.com', status: 'Active', amount: '$1,999.00' },
    { id: '2', customer: 'Jackson Lee', email: 'jackson.lee@email.com', status: 'Active', amount: '$39.00' },
    { id: '3', customer: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', status: 'Pending', amount: '$299.00' },
    { id: '4', customer: 'William Kim', email: 'will@email.com', status: 'Active', amount: '$99.00' },
    { id: '5', customer: 'Sofia Davis', email: 'sofia.davis@email.com', status: 'Inactive', amount: '$39.00' },
  ]

  return (
    <View padding={6} gap={6}>
      <View gap={2}>
        <Text variant="title-1">Dashboard</Text>
        <Text variant="body-2" color="neutral-faded">
          A comprehensive dashboard layout with statistics cards and data table
        </Text>
      </View>

      <Card padding={6}>
        <View gap={6}>
          <View gap={2}>
            <Text variant="title-3">Overview</Text>
            <Text variant="body-2" color="neutral-faded">
              Key metrics and performance indicators
            </Text>
          </View>

          {/* Stats Grid */}
          <View
            direction="row"
            gap={4}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {statsData.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.title} padding={4}>
                  <View gap={3}>
                    <View direction="row" align="center" justify="space-between">
                      <Text variant="body-2" color="neutral-faded">
                        {stat.title}
                      </Text>
                      <Icon size={16} className="text-neutral-faded" />
                    </View>
                    <View gap={1}>
                      <Text variant="title-2">{stat.value}</Text>
                      <View direction="row" align="center" gap={1}>
                        {stat.trend === 'up' ? (
                          <TrendingUp size={12} className="text-green-600" />
                        ) : (
                          <TrendingDown size={12} className="text-red-600" />
                        )}
                        <Text
                          variant="caption-1"
                          color={stat.trend === 'up' ? 'positive' : 'critical'}
                        >
                          {stat.change}
                        </Text>
                        <Text variant="caption-1" color="neutral-faded">
                          {stat.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
              )
            })}
          </View>

          {/* Recent Transactions Table */}
          <View gap={3}>
            <View direction="row" align="center" justify="space-between">
              <View gap={1}>
                <Text variant="title-4">Recent Transactions</Text>
                <Text variant="body-2" color="neutral-faded">
                  You have {tableData.length} transactions this month
                </Text>
              </View>
              <Button variant="outline" size="small">
                View All
              </Button>
            </View>

            <Card>
              <Table>
                <Table.Head>
                  <Table.Row>
                    <Table.Cell>Customer</Table.Cell>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>Status</Table.Cell>
                    <Table.Cell align="end">Amount</Table.Cell>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {tableData.map((row) => (
                    <Table.Row
                      key={row.id}
                      onClick={() => setSelectedRow(row.id)}
                      className={selectedRow === row.id ? "cursor-pointer bg-blue-50" : "cursor-pointer"}
                    >
                      <Table.Cell>
                        <Text variant="body-2" weight="medium">
                          {row.customer}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text variant="body-2" color="neutral-faded">
                          {row.email}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge
                          color={
                            row.status === 'Active'
                              ? 'positive'
                              : row.status === 'Pending'
                              ? 'warning'
                              : 'neutral'
                          }
                        >
                          {row.status}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell align="end">
                        <Text variant="body-2" weight="medium">
                          {row.amount}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
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
              • This dashboard block demonstrates a common layout pattern with stats cards and a data table
            </Text>
            <Text variant="body-2">
              • Stats cards use a grid layout that's responsive (1 column on mobile, 2 on tablet, 4 on desktop)
            </Text>
            <Text variant="body-2">
              • Each stat card shows a metric with trend indicator (up/down arrow) and percentage change
            </Text>
            <Text variant="body-2">
              • The table is interactive with row selection and uses Badge components for status indicators
            </Text>
            <Text variant="body-2">
              • Color coding helps users quickly identify positive (green) vs negative (red) trends
            </Text>
            <Text variant="body-2">
              • Use this pattern for admin dashboards, analytics views, or any data-heavy interface
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

