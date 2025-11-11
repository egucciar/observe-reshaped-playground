import { View } from '../components/View'
import { Button } from '../components/Button'

export function ButtonPage() {
  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">Button Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Default (Small)</h2>
        <Button color="primary">Primary Button</Button>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Colors</h2>
        <View direction="row" gap={2}>
          <Button color="primary">Primary</Button>
          <Button color="positive">Positive</Button>
          <Button color="critical">Critical</Button>
          <Button color="neutral">Neutral</Button>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Sizes</h2>
        <View direction="row" gap={2} align="center">
          <Button size="small">Small (Default)</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Variants</h2>
        <View direction="row" gap={2}>
          <Button variant="solid" color="primary">Solid</Button>
          <Button variant="faded" color="primary">Faded</Button>
          <Button variant="outline" color="primary">Outline</Button>
          <Button variant="ghost" color="primary">Ghost</Button>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">States</h2>
        <View direction="row" gap={2}>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </View>
      </View>
    </View>
  )
}
