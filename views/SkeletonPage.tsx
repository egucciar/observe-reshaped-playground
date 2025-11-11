import { View } from '../components/View'
import { Skeleton } from '../components/Skeleton'
import { Card } from '../components/Card'

export function SkeletonPage() {
  return (
    <View padding={4} gap={4}>
      <h1>Skeleton Component</h1>
      <p className="text-gray-600">Animated placeholder for loading states</p>

      <View gap={3}>
        <h2>Default (Text Line)</h2>
        <Skeleton />
      </View>

      <View gap={3}>
        <h2>Custom Sizes</h2>
        <View gap={2}>
          <Skeleton width="120px" height={9} />
          <Skeleton width="200px" height={9} />
          <Skeleton width="80%" height={9} />
        </View>
      </View>

      <View gap={3}>
        <h2>Border Radius</h2>
        <View gap={2}>
          <Skeleton width="200px" height={9} borderRadius="none" />
          <Skeleton width="200px" height={9} borderRadius="small" />
          <Skeleton width="200px" height={9} borderRadius="medium" />
          <Skeleton width="200px" height={9} borderRadius="large" />
        </View>
      </View>

      <View gap={3}>
        <h2>Circular (Avatar)</h2>
        <View direction="row" gap={2}>
          <Skeleton width={10} height={10} borderRadius="circular" />
          <Skeleton width={15} height={15} borderRadius="circular" />
          <Skeleton width={20} height={20} borderRadius="circular" />
        </View>
      </View>

      <View gap={3}>
        <h2>Card Content Example</h2>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" gap={3} align="center">
              <Skeleton width={15} height={15} borderRadius="circular" />
              <View gap={2}>
                <Skeleton width="150px" height={6} />
                <Skeleton width="100px" height={5} />
              </View>
            </View>
            <Skeleton width="100%" height={4} />
            <Skeleton width="100%" height={4} />
            <Skeleton width="70%" height={4} />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Multiple Text Lines</h2>
        <View gap={2}>
          <Skeleton />
          <Skeleton />
          <Skeleton width="60%" />
        </View>
      </View>
    </View>
  )
}
