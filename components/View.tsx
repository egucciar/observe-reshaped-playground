import { View as ReshapedView, type ViewProps as ReshapedViewProps } from 'reshaped'

export interface ViewProps extends ReshapedViewProps {}

export const View = ({ ...props }: ViewProps) => {
  return <ReshapedView {...props} />
}

const Example = () => {
  return (
    <View as="span">
      This doesn't pass type checks , so it feels like as="span" doesn't work!
    </View>
  )
}

View.displayName = 'View'
View.Item = ReshapedView.Item
