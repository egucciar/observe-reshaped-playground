import { View } from '../components/View'
import { Text } from '../components/Text'
import { Button } from '../components/Button'

export function ButtonPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Button Component</Text>

      <View gap={3}>
        <Text variant="title-2">Default (Small)</Text>
        <Button color="primary">Primary Button</Button>
      </View>

      <View gap={3}>
        <Text variant="title-2">Colors</Text>
        <View direction="row" gap={2}>
          <Button color="primary">Primary</Button>
          <Button color="positive">Positive</Button>
          <Button color="critical">Critical</Button>
          <Button color="neutral">Neutral</Button>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Sizes</Text>
        <View direction="row" gap={2} align="center">
          <Button size="small">Small (Default)</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Variants</Text>
        <View direction="row" gap={2}>
          <Button variant="solid" color="primary">Solid</Button>
          <Button variant="faded" color="primary">Faded</Button>
          <Button variant="outline" color="primary">Outline</Button>
          <Button variant="ghost" color="primary">Ghost</Button>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">States</Text>
        <View direction="row" gap={2}>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </View>
      </View>

      <View gap={3} paddingTop={4}>
        <Text variant="title-1">Custom Enhancements</Text>
        <Text variant="body-1" color="neutral-faded">
          The following sections demonstrate custom enhancements added to the Button component
        </Text>
      </View>

      <View gap={3}>
        <Text variant="title-2">1. Built-in Tooltip API</Text>
        <Text variant="body-2" color="neutral-faded">
          Tooltips are built directly into the Button component. Simply pass a tooltip prop with text or configuration. Disabled buttons automatically receive proper tooltip support.
        </Text>

        <View gap={2}>
          <Text variant="body-2" weight="medium">Basic Tooltips</Text>
          <View direction="row" gap={2}>
            <Button color="primary" tooltip="This action will submit the form">
              Submit
            </Button>
            <Button color="positive" tooltip="Save your changes">
              Save
            </Button>
            <Button color="critical" tooltip="This action cannot be undone">
              Delete
            </Button>
          </View>
        </View>

        <View gap={2}>
          <Text variant="body-2" weight="medium">Disabled Buttons with Tooltips</Text>
          <Text variant="caption-1" color="neutral-faded">
            The key benefit: tooltips work seamlessly on disabled buttons
          </Text>
          <View direction="row" gap={2}>
            <Button disabled tooltip="This action is not available">
              Disabled Action
            </Button>
            <Button disabled color="primary" tooltip="You must save changes first">
              Submit
            </Button>
            <Button disabled color="critical" tooltip="Delete is not allowed for this item">
              Delete
            </Button>
          </View>
        </View>

        <View gap={2}>
          <Text variant="body-2" weight="medium">Different Variants</Text>
          <View direction="row" gap={2}>
            <Button variant="solid" color="primary" tooltip="Solid button style">
              Solid
            </Button>
            <Button variant="outline" color="primary" tooltip="Outline button style">
              Outline
            </Button>
            <Button variant="ghost" color="primary" tooltip="Ghost button style">
              Ghost
            </Button>
            <Button variant="faded" color="primary" tooltip="Faded button style">
              Faded
            </Button>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">2. Modified Hover & Focus States</Text>
        <Text variant="body-2" color="neutral-faded">
          Goal: The default states are very subtle, so we've enhanced them for better visibility
        </Text>
        <View direction="row" gap={2}>
          <Button variant="solid" color="primary">Hover Me</Button>
          <Button variant="outline" color="primary">Or Me</Button>
          <Button variant="ghost" color="primary">Try Me</Button>
        </View>
      </View>
    </View>
  )
}
