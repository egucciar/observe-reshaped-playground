import { View } from '../components/View'

export function ViewPage() {
  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">View Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Layout</h2>
        <View padding={3} backgroundColor="neutral-faded">
          <p>Basic View with padding and background</p>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Direction: Row</h2>
        <View direction="row" gap={2}>
          <View padding={3} backgroundColor="primary-faded" width="100px">Box 1</View>
          <View padding={3} backgroundColor="primary-faded" width="100px">Box 2</View>
          <View padding={3} backgroundColor="primary-faded" width="100px">Box 3</View>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Direction: Column</h2>
        <View direction="column" gap={2}>
          <View padding={3} backgroundColor="positive-faded">Box 1</View>
          <View padding={3} backgroundColor="positive-faded">Box 2</View>
          <View padding={3} backgroundColor="positive-faded">Box 3</View>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Alignment</h2>
        <View height="150px" backgroundColor="neutral-faded" align="center" justify="center">
          <View padding={3} backgroundColor="critical-faded">
            Centered Content
          </View>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Gap Sizes</h2>
        <View direction="row" gap={1}>
          <View padding={2} backgroundColor="neutral-faded">gap=1</View>
          <View padding={2} backgroundColor="neutral-faded">gap=1</View>
        </View>
        <View direction="row" gap={4}>
          <View padding={2} backgroundColor="neutral-faded">gap=4</View>
          <View padding={2} backgroundColor="neutral-faded">gap=4</View>
        </View>
        <View direction="row" gap={8}>
          <View padding={2} backgroundColor="neutral-faded">gap=8</View>
          <View padding={2} backgroundColor="neutral-faded">gap=8</View>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Borders</h2>
        <View padding={3} borderRadius="medium" border>
          <p>View with border and border radius</p>
        </View>
      </View>
    </View>
  )
}
