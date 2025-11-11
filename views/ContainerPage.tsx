'use client'

import { Container } from '../components/Container'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'

export function ContainerPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Container Utility</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Usage</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Container provides max-width for larger screens and horizontal
              padding for mobile
            </p>
            <div className="border border-gray-300 rounded p-2">
              <Container>
                <View
                  className="bg-blue-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">
                    Container with default settings
                  </p>
                </View>
              </Container>
            </div>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Width</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Use the width prop to control container width (supports px, %, or
              number as unit multiplier)
            </p>
            <div className="border border-gray-300 rounded p-2">
              <Container width="600px">
                <View
                  className="bg-green-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">Container with width=&quot;600px&quot;</p>
                </View>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container width="80%">
                <View
                  className="bg-purple-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">Container with width=&quot;80%&quot;</p>
                </View>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container width={50}>
                <View
                  className="bg-yellow-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">
                    Container with width={'{50}'} (50 x1 units)
                  </p>
                </View>
              </Container>
            </div>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Height Control</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Control height and maxHeight with the same literal values
            </p>
            <div className="border border-gray-300 rounded p-2">
              <Container width="600px" height="150px">
                <View
                  className="bg-red-100 rounded"
                  padding={4}
                  style={{ height: '100%' }}
                >
                  <p className="text-center">
                    Container with height=&quot;150px&quot;
                  </p>
                </View>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container width="600px" height="200px" maxHeight="50%">
                <View
                  className="bg-orange-100 rounded"
                  padding={4}
                  style={{ height: '100%' }}
                >
                  <p className="text-center">
                    Container with height=&quot;200px&quot; maxHeight=&quot;50%&quot;
                  </p>
                </View>
              </Container>
            </div>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Padding</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Default horizontal padding is x4 units, but you can customize it
            </p>
            <div className="border border-gray-300 rounded p-2">
              <Container width="600px" padding={0}>
                <View
                  className="bg-pink-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">
                    Container with padding={'{0}'} (no padding)
                  </p>
                </View>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container width="600px" padding={2}>
                <View
                  className="bg-teal-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">
                    Container with padding={'{2}'} (x2 units)
                  </p>
                </View>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container width="600px" padding={8}>
                <View
                  className="bg-indigo-100 rounded"
                  padding={4}
                  style={{ height: '80px' }}
                >
                  <p className="text-center">
                    Container with padding={'{8}'} (x8 units)
                  </p>
                </View>
              </Container>
            </div>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Alignment</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Use align and justify props for flexbox alignment
            </p>
            <div className="border border-gray-300 rounded p-2">
              <Container
                width="600px"
                height="150px"
                align="center"
                justify="center"
              >
                <Badge color="primary">Centered Content</Badge>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container
                width="600px"
                height="150px"
                align="start"
                justify="start"
              >
                <Badge color="neutral">Top Left</Badge>
              </Container>
            </div>
            <div className="border border-gray-300 rounded p-2">
              <Container
                width="600px"
                height="150px"
                align="end"
                justify="end"
              >
                <Badge color="positive">Bottom Right</Badge>
              </Container>
            </div>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Centered Page Layout</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Common pattern: center page content with max-width
            </p>
            <div className="border border-gray-300 rounded p-2 bg-gray-50">
              <Container width="1024px">
                <View gap={3}>
                  <View
                    className="bg-white rounded shadow-sm"
                    padding={4}
                  >
                    <Text variant="title-3" className="font-semibold mb-2">Page Header</Text>
                    <p className="text-sm opacity-70">
                      This content is centered with a max-width of 1024px
                    </p>
                  </View>
                  <View
                    className="bg-white rounded shadow-sm"
                    padding={4}
                  >
                    <Text variant="title-3" className="font-semibold mb-2">Main Content</Text>
                    <p className="text-sm opacity-70">
                      Container automatically adds horizontal padding for mobile
                      devices
                    </p>
                  </View>
                  <View
                    className="bg-white rounded shadow-sm"
                    padding={4}
                  >
                    <Text variant="title-3" className="font-semibold mb-2">Footer</Text>
                    <p className="text-sm opacity-70">
                      All content stays within the container bounds
                    </p>
                  </View>
                </View>
              </Container>
            </div>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>
            • Container is a responsive layout utility for controlling content
            width
          </p>
          <p>
            • Default horizontal padding is x4 units (customizable with padding
            prop)
          </p>
          <p>
            • Width prop accepts string values (px, %, etc.) or numbers (unit
            multipliers)
          </p>
          <p>• Use for centering page content or within other components</p>
          <p>
            • Supports align and justify props for flexbox alignment (center,
            start, end)
          </p>
          <p>
            • Can control height and maxHeight with the same literal value
            format
          </p>
          <p>
            • Set padding to 0 when using inside components that already have
            padding
          </p>
          <p>
            • Perfect for creating consistent max-width layouts across your app
          </p>
        </View>
      </View>
    </View>
  )
}

