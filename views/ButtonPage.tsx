import { View } from '../components/View'
import { Text } from '../components/Text'
import { Button } from '../components/Button'

export function ButtonPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Button Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Default (Small)</Text>
        <Button color="primary">Primary Button</Button>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Colors</Text>
        <View direction="row" gap={2}>
          <Button color="primary">Primary</Button>
          <Button color="positive">Positive</Button>
          <Button color="critical">Critical</Button>
          <Button color="neutral">Neutral</Button>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Sizes</Text>
        <View direction="row" gap={2} align="center">
          <Button size="small">Small (Default)</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Variants</Text>
        <View direction="row" gap={2}>
          <Button variant="solid" color="primary">Solid</Button>
          <Button variant="faded" color="primary">Faded</Button>
          <Button variant="outline" color="primary">Outline</Button>
          <Button variant="ghost" color="primary">Ghost</Button>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">States</Text>
        <View direction="row" gap={2}>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </View>
      </View>
    </View>
  )
}
