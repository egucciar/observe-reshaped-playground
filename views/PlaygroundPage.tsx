import { View } from '../components/View'
import { Text } from '../components/Text'

export function PlaygroundPage() {
  return (
    <View padding={6} gap={4} maxWidth="1200px">
      <View gap={2}>
        <Text variant="title-1" className="text-4xl font-bold">Hello World!</Text>
        <p className="text-gray-600">
          This is your playground - use this space to experiment and try things out!
        </p>
      </View>
    </View>
  )
}
