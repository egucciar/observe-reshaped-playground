import { View } from '../components/View'
import { ActionBar } from '../components/ActionBar'
import { Button } from '../components/Button'

export function ActionBarPage() {
  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">ActionBar Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Bottom Position (Default)</h2>
        <View position="relative" height="200px" backgroundColor="neutral-faded" borderRadius="medium">
          <View padding={3}>
            <p>Container with ActionBar at bottom</p>
          </View>
          <ActionBar position="bottom">
            <View direction="row" gap={2}>
              <Button color="primary">Save</Button>
              <Button variant="outline">Cancel</Button>
            </View>
          </ActionBar>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Bottom-End Position</h2>
        <View position="relative" height="200px" backgroundColor="neutral-faded" borderRadius="medium">
          <View padding={3}>
            <p>ActionBar aligned to bottom-end</p>
          </View>
          <ActionBar position="bottom-end">
            <View direction="row" gap={2}>
              <Button color="primary">Next</Button>
            </View>
          </ActionBar>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Top Position</h2>
        <View position="relative" height="200px" backgroundColor="neutral-faded" borderRadius="medium">
          <ActionBar position="top">
            <View direction="row" gap={2} align="center">
              <Button variant="ghost">Back</Button>
              <View grow />
              <Button color="primary">Submit</Button>
            </View>
          </ActionBar>
          <View padding={3} paddingTop={12}>
            <p>ActionBar at top of container</p>
          </View>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">With Offset</h2>
        <View position="relative" height="200px" backgroundColor="neutral-faded" borderRadius="medium">
          <View padding={3}>
            <p>ActionBar with offset from edge</p>
          </View>
          <ActionBar position="bottom" offset={2}>
            <View direction="row" gap={2}>
              <Button color="positive">Confirm</Button>
              <Button variant="outline" color="critical">Delete</Button>
            </View>
          </ActionBar>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Elevated (with shadow)</h2>
        <View position="relative" height="200px" backgroundColor="neutral-faded" borderRadius="medium">
          <View padding={3}>
            <p>ActionBar with elevation shadow</p>
          </View>
          <ActionBar position="bottom" elevated>
            <View direction="row" gap={2}>
              <Button color="primary">Apply</Button>
              <Button variant="ghost">Reset</Button>
            </View>
          </ActionBar>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Complex Layout</h2>
        <View position="relative" height="250px" backgroundColor="neutral-faded" borderRadius="medium">
          <View padding={3}>
            <p className="font-semibold">Checkout Summary</p>
            <p className="mt-2">Total: $99.99</p>
            <p>Items: 3</p>
          </View>
          <ActionBar position="bottom" elevated>
            <View direction="row" gap={2} align="center">
              <View grow>
                <p className="text-sm font-semibold">Total: $99.99</p>
              </View>
              <Button variant="outline">Continue Shopping</Button>
              <Button color="primary">Proceed to Checkout</Button>
            </View>
          </ActionBar>
        </View>
      </View>
    </View>
  )
}
