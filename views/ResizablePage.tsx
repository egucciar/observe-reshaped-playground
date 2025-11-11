import { View } from '../components/View'
import { Resizable } from '../components/Resizable'

export function ResizablePage() {
  return (
    <View padding={4} gap={4}>
      <h1>Resizable Component</h1>

      <View gap={3}>
        <h2>Horizontal Split</h2>
        <Resizable height="200px">
          <Resizable.Item>
            <View backgroundColor="primary-faded" height="100%" padding={3}>
              <p>Left Panel</p>
              <p className="text-sm">Drag the handle to resize</p>
            </View>
          </Resizable.Item>
          <Resizable.Handle />
          <Resizable.Item>
            <View backgroundColor="positive-faded" height="100%" padding={3}>
              <p>Right Panel</p>
            </View>
          </Resizable.Item>
        </Resizable>
      </View>

      <View gap={3}>
        <h2>With Size Constraints</h2>
        <Resizable height="200px">
          <Resizable.Item defaultSize="200px" minSize="150px" maxSize="400px">
            <View backgroundColor="neutral-faded" height="100%" padding={3}>
              <p>Constrained Panel</p>
              <p className="text-sm">Min: 150px, Max: 400px, Default: 200px</p>
            </View>
          </Resizable.Item>
          <Resizable.Handle />
          <Resizable.Item>
            <View backgroundColor="neutral-faded" height="100%" padding={3}>
              <p>Flexible Panel</p>
            </View>
          </Resizable.Item>
        </Resizable>
      </View>

      <View gap={3}>
        <h2>Vertical Split</h2>
        <Resizable height="300px" direction="column">
          <Resizable.Item>
            <View backgroundColor="critical-faded" height="100%" padding={3}>
              <p>Top Panel</p>
            </View>
          </Resizable.Item>
          <Resizable.Handle />
          <Resizable.Item>
            <View backgroundColor="warning-faded" height="100%" padding={3}>
              <p>Bottom Panel</p>
            </View>
          </Resizable.Item>
        </Resizable>
      </View>

      <View gap={3}>
        <h2>Three Panels</h2>
        <Resizable height="200px">
          <Resizable.Item>
            <View backgroundColor="primary-faded" height="100%" padding={3}>
              <p>Left</p>
            </View>
          </Resizable.Item>
          <Resizable.Handle />
          <Resizable.Item>
            <View backgroundColor="positive-faded" height="100%" padding={3}>
              <p>Center</p>
            </View>
          </Resizable.Item>
          <Resizable.Handle />
          <Resizable.Item>
            <View backgroundColor="critical-faded" height="100%" padding={3}>
              <p>Right</p>
            </View>
          </Resizable.Item>
        </Resizable>
      </View>
    </View>
  )
}
