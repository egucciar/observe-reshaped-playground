'use client'

import { View } from '../components/View'
import { Text } from '../components/Text'
import { Avatar } from '../components/Avatar'
import { User, Mail, Phone, Calendar, Star, Heart } from 'lucide-react'

export function AvatarPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Avatar Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Initials</Text>
        <View direction="row" gap={3} align="center">
          <Avatar initials="AB" />
          <Avatar initials="CD" color="positive" />
          <Avatar initials="EF" color="warning" />
          <Avatar initials="GH" color="critical" />
          <Avatar initials="IJ" color="primary" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Icons</Text>
        <View direction="row" gap={3} align="center">
          <Avatar icon={User} />
          <Avatar icon={Mail} color="positive" />
          <Avatar icon={Phone} color="warning" />
          <Avatar icon={Calendar} color="critical" />
          <Avatar icon={Star} color="primary" />
          <Avatar icon={Heart} color="primary" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Different Sizes</Text>
        <View direction="row" gap={3} align="center">
          <Avatar initials="XS" size={8} />
          <Avatar initials="S" size={10} />
          <Avatar initials="M" size={12} />
          <Avatar initials="L" size={16} />
          <Avatar initials="XL" size={20} />
          <Avatar initials="2X" size={24} />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Icon Sizes</Text>
        <View direction="row" gap={3} align="center">
          <Avatar icon={User} size={8} />
          <Avatar icon={User} size={10} />
          <Avatar icon={User} size={12} color="primary" />
          <Avatar icon={User} size={16} color="primary" />
          <Avatar icon={User} size={20} color="primary" />
          <Avatar icon={User} size={24} color="primary" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Squared Avatars</Text>
        <View direction="row" gap={3} align="center">
          <Avatar initials="AB" squared />
          <Avatar initials="CD" color="positive" squared />
          <Avatar icon={User} color="primary" squared />
          <Avatar icon={Mail} color="warning" squared />
          <Avatar initials="XL" size={20} color="critical" squared />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">User List Example</Text>
        <View gap={2}>
          <View direction="row" gap={3} align="center">
            <Avatar initials="AJ" color="primary" />
            <View gap={1}>
              <span className="font-semibold">Alice Johnson</span>
              <span className="text-sm opacity-70">alice@example.com</span>
            </View>
          </View>
          <View direction="row" gap={3} align="center">
            <Avatar initials="BS" color="positive" />
            <View gap={1}>
              <span className="font-semibold">Bob Smith</span>
              <span className="text-sm opacity-70">bob@example.com</span>
            </View>
          </View>
          <View direction="row" gap={3} align="center">
            <Avatar initials="CD" color="warning" />
            <View gap={1}>
              <span className="font-semibold">Carol Davis</span>
              <span className="text-sm opacity-70">carol@example.com</span>
            </View>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Color Palette</Text>
        <View gap={2}>
          <View direction="row" gap={2} align="center">
            <Avatar initials="N" color="neutral" size={10} />
            <span className="text-sm">neutral</span>
          </View>
          <View direction="row" gap={2} align="center">
            <Avatar initials="P" color="positive" size={10} />
            <span className="text-sm">positive</span>
          </View>
          <View direction="row" gap={2} align="center">
            <Avatar initials="W" color="warning" size={10} />
            <span className="text-sm">warning</span>
          </View>
          <View direction="row" gap={2} align="center">
            <Avatar initials="C" color="critical" size={10} />
            <span className="text-sm">critical</span>
          </View>
          <View direction="row" gap={2} align="center">
            <Avatar initials="P" color="primary" size={10} />
            <span className="text-sm">primary</span>
          </View>
        </View>
      </View>

    </View>
  )
}
