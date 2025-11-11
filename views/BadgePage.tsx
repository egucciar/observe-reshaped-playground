'use client'

import { View } from '../components/View'
import { Text } from '../components/Text'
import { Badge } from '../components/Badge'
import { Avatar } from '../components/Avatar'
import { Star, Heart, CheckCircle, AlertCircle, Info, ChevronRight, Bell, Mail } from 'lucide-react'

export function BadgePage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Badge Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Badges</Text>
        <View direction="row" gap={3} align="center" wrap>
          <Badge>Default</Badge>
          <Badge color="positive">Positive</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="critical">Critical</Badge>
          <Badge color="primary">Primary</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Badge Sizes</Text>
        <View direction="row" gap={3} align="center">
          <Badge size="small">Small</Badge>
          <Badge size="medium">Medium</Badge>
          <Badge size="large">Large</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Faded Variant</Text>
        <View direction="row" gap={3} align="center" wrap>
          <Badge variant="faded">Neutral</Badge>
          <Badge variant="faded" color="positive">Positive</Badge>
          <Badge variant="faded" color="warning">Warning</Badge>
          <Badge variant="faded" color="critical">Critical</Badge>
          <Badge variant="faded" color="primary">Primary</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Outline Variant</Text>
        <View direction="row" gap={3} align="center" wrap>
          <Badge variant="outline">Neutral</Badge>
          <Badge variant="outline" color="positive">Positive</Badge>
          <Badge variant="outline" color="warning">Warning</Badge>
          <Badge variant="outline" color="critical">Critical</Badge>
          <Badge variant="outline" color="primary">Primary</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Start Icon</Text>
        <View direction="row" gap={3} align="center" wrap>
          <Badge icon={CheckCircle} color="positive">Verified</Badge>
          <Badge icon={Star} color="warning">Featured</Badge>
          <Badge icon={Heart} color="critical">Favorite</Badge>
          <Badge icon={Info} color="primary">Information</Badge>
          <Badge icon={Bell}>Notification</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With End Icon</Text>
        <View direction="row" gap={3} align="center" wrap>
          <Badge endIcon={ChevronRight} color="primary">View details</Badge>
          <Badge endIcon={ChevronRight} color="positive">Continue</Badge>
          <Badge endIcon={ChevronRight}>Learn more</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Rounded (Notification Style)</Text>
        <View direction="row" gap={3} align="center">
          <Badge color="critical" size="small" rounded>5</Badge>
          <Badge color="critical" size="small" rounded>99+</Badge>
          <Badge color="primary" size="small" rounded>12</Badge>
          <Badge color="positive" size="small" rounded>3</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Status Badges</Text>
        <View gap={2}>
          <View direction="row" gap={2} align="center">
            <Badge icon={CheckCircle} color="positive" variant="faded">Active</Badge>
            <span className="text-sm">User account is active</span>
          </View>
          <View direction="row" gap={2} align="center">
            <Badge icon={AlertCircle} color="warning" variant="faded">Pending</Badge>
            <span className="text-sm">Awaiting approval</span>
          </View>
          <View direction="row" gap={2} align="center">
            <Badge icon={AlertCircle} color="critical" variant="faded">Inactive</Badge>
            <span className="text-sm">Account suspended</span>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Badge with Container (Positioned)</Text>
        <View direction="row" gap={4} align="center">
          <Badge.Container>
            <Badge color="critical" size="small" rounded>5</Badge>
            <Avatar initials="JD" color="primary" />
          </Badge.Container>

          <Badge.Container>
            <Badge color="critical" size="small" rounded>12</Badge>
            <Avatar icon={Mail} color="neutral" />
          </Badge.Container>

          <Badge.Container>
            <Badge color="primary" size="small" rounded>3</Badge>
            <Avatar icon={Bell} color="warning" />
          </Badge.Container>

          <Badge.Container>
            <Badge color="positive" size="small" rounded>99+</Badge>
            <Avatar initials="AB" color="positive" squared />
          </Badge.Container>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Category Tags</Text>
        <View direction="row" gap={2} align="center" wrap>
          <Badge variant="outline">Technology</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">Development</Badge>
          <Badge variant="outline">Marketing</Badge>
          <Badge variant="outline">Sales</Badge>
          <Badge variant="outline">Support</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Priority Labels</Text>
        <View direction="row" gap={3} align="center" wrap>
          <Badge color="critical" icon={AlertCircle}>High Priority</Badge>
          <Badge color="warning" icon={AlertCircle}>Medium Priority</Badge>
          <Badge color="neutral" icon={Info}>Low Priority</Badge>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Combined Variants</Text>
        <View gap={2}>
          <View direction="row" gap={2} align="center" wrap>
            <Badge size="small" icon={Star} color="warning">Pro</Badge>
            <Badge size="small" icon={Heart} color="critical">Premium</Badge>
            <Badge size="small" icon={CheckCircle} color="positive">Verified</Badge>
          </View>
          <View direction="row" gap={2} align="center" wrap>
            <Badge size="large" icon={Star} color="warning" variant="faded">Featured</Badge>
            <Badge size="large" icon={Heart} color="critical" variant="outline">Favorite</Badge>
          </View>
        </View>
      </View>
    </View>
  )
}
