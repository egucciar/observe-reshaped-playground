'use client'

import { useState } from 'react'
import { useToast } from 'reshaped'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Accordion } from '../components/Accordion'
import { ActionBar } from '../components/ActionBar'
import { Actionable } from '../components/Actionable'
import { Alert } from '../components/Alert'
import { Autocomplete } from '../components/Autocomplete'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Checkbox } from '../components/Checkbox'
import { Container } from '../components/Container'
import { Divider } from '../components/Divider'
import { Dismissible } from '../components/Dismissible'
import { DropdownMenu } from '../components/DropdownMenu'
import { FileUpload } from '../components/FileUpload'
import { Link } from '../components/Link'
import { Loader } from '../components/Loader'
import { MenuItem } from '../components/MenuItem'
import { Modal } from '../components/Modal'
import { NumberField } from '../components/NumberField'
import { Pagination } from '../components/Pagination'
import { Progress } from '../components/Progress'
import { Radio, RadioGroup } from '../components/Radio'
import { Resizable } from '../components/Resizable'
import { Select } from '../components/Select'
import { Skeleton } from '../components/Skeleton'
import { Slider } from '../components/Slider'
import { Stepper } from '../components/Stepper'
import { Switch } from '../components/Switch'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { TextArea } from '../components/TextArea'
import { TextField } from '../components/TextField'
import { Timeline } from '../components/Timeline'
import { Tooltip } from '../components/Tooltip'
import { ToggleButton } from '../components/ToggleButton'
import { ToggleButtonGroup } from '../components/ToggleButtonGroup'

export function ShowcasePage() {
  const toast = useToast()
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [switchValue, setSwitchValue] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)
  const [textFieldValue, setTextFieldValue] = useState('')
  const [numberFieldValue, setNumberFieldValue] = useState(0)
  const [textAreaValue, setTextAreaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [autocompleteValue, setAutocompleteValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [dismissibleVisible, setDismissibleVisible] = useState(true)
  const [toggleValue, setToggleValue] = useState(false)
  const [toggleGroupValue, setToggleGroupValue] = useState(['option1'])

  return (
    <View padding={6} gap={6} maxWidth="1200px">
      <View gap={2}>
        <Text variant="title-1" weight="bold">Component Showcase</Text>
        <Text variant="body-1" color="neutral-faded">
          A comprehensive showcase of all Reshaped components with interactive examples
        </Text>
      </View>

      <Divider />

      {/* Accordion */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Accordion</Text>
          <Accordion>
            <Accordion.Trigger>Click to expand</Accordion.Trigger>
            <Accordion.Content>
              <View padding={2}>
                <Text variant="body-2">Accordion content goes here</Text>
              </View>
            </Accordion.Content>
          </Accordion>
        </View>
      </Card>

      {/* ActionBar */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">ActionBar</Text>
          <View position="relative" height="100px" backgroundColor="neutral-faded" borderRadius="medium">
            <ActionBar position="bottom">
              <View direction="row" gap={2}>
                <Button>Action 1</Button>
                <Button>Action 2</Button>
              </View>
            </ActionBar>
          </View>
        </View>
      </Card>

      {/* Actionable */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Actionable</Text>
          <Actionable onClick={() => alert('Clicked!')}>
            <View padding={3} borderRadius="medium" backgroundColor="neutral-faded">
              Click me - I'm actionable!
            </View>
          </Actionable>
        </View>
      </Card>

      {/* Alert */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Alert</Text>
          <Alert title="Information" color="primary">
            This is an informational alert message
          </Alert>
        </View>
      </Card>

      {/* Autocomplete */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Autocomplete</Text>
          <Autocomplete
            name="autocomplete"
            value={autocompleteValue}
            onChange={(e) => setAutocompleteValue(e.value)}
            placeholder="Search..."
          >
            {['Apple', 'Banana', 'Cherry'].map((fruit) => {
              if (!autocompleteValue || fruit.toLowerCase().includes(autocompleteValue.toLowerCase())) {
                return (
                  <Autocomplete.Item key={fruit} value={fruit}>
                    {fruit}
                  </Autocomplete.Item>
                )
              }
              return null
            })}
          </Autocomplete>
        </View>
      </Card>

      {/* Avatar */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Avatar</Text>
          <Avatar initials="JD" color="primary" />
        </View>
      </Card>

      {/* Badge */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Badge</Text>
          <View direction="row" gap={2}>
            <Badge color="primary">Primary</Badge>
            <Badge color="positive">Success</Badge>
            <Badge color="critical">Error</Badge>
          </View>
        </View>
      </Card>

      {/* Breadcrumbs */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Breadcrumbs</Text>
          <Breadcrumbs>
            <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
            <Breadcrumbs.Item>Details</Breadcrumbs.Item>
          </Breadcrumbs>
        </View>
      </Card>

      {/* Button */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Button</Text>
          <View direction="row" gap={2}>
            <Button variant="solid" color="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </View>
        </View>
      </Card>

      {/* Checkbox */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Checkbox</Text>
          <Checkbox checked={checkboxValue} onChange={(e) => setCheckboxValue(!!e.value)}>
            Check me
          </Checkbox>
        </View>
      </Card>

      {/* Container */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Container</Text>
          <Container>
            <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
              Container content with max width
            </View>
          </Container>
        </View>
      </Card>

      {/* Dismissible */}
      {dismissibleVisible && (
        <Card padding={4}>
          <View gap={2}>
            <Text variant="title-3" weight="medium">Dismissible</Text>
            <Dismissible closeAriaLabel="Close" onClose={() => setDismissibleVisible(false)}>
              <Alert color="primary">Dismissible alert content</Alert>
            </Dismissible>
          </View>
        </Card>
      )}

      {/* DropdownMenu */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">DropdownMenu</Text>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              {(attributes) => (
                <Button attributes={attributes}>Open Menu</Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Option 1</DropdownMenu.Item>
              <DropdownMenu.Item>Option 2</DropdownMenu.Item>
              <DropdownMenu.Item>Option 3</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </View>
      </Card>

      {/* FileUpload */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">FileUpload</Text>
          <FileUpload name="file" onChange={(e) => console.log(e.value)}>
            Click to upload file
          </FileUpload>
        </View>
      </Card>

      {/* Link */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Link</Text>
          <Link href="#">Click this link</Link>
        </View>
      </Card>

      {/* Loader */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Loader</Text>
          <Loader />
        </View>
      </Card>

      {/* MenuItem */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">MenuItem</Text>
          <MenuItem>Menu Item</MenuItem>
        </View>
      </Card>

      {/* Modal */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Modal</Text>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal active={modalOpen} onClose={() => setModalOpen(false)}>
            <View padding={6} gap={4}>
              <Modal.Title>Modal Title</Modal.Title>
              <Text variant="body-2">Modal content goes here</Text>
              <View direction="row" gap={2} justify="end">
                <Button onClick={() => setModalOpen(false)}>Close</Button>
              </View>
            </View>
          </Modal>
        </View>
      </Card>

      {/* NumberField */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">NumberField</Text>
          <NumberField
            name="number"
            increaseAriaLabel="Increase"
            decreaseAriaLabel="Decrease"
            value={numberFieldValue}
            onChange={(e) => setNumberFieldValue(e.value)}
            placeholder="Enter a number"
          />
        </View>
      </Card>

      {/* Pagination */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Pagination</Text>
          <Pagination total={5} defaultPage={1} previousAriaLabel="Previous" nextAriaLabel="Next" />
        </View>
      </Card>

      {/* Progress */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Progress</Text>
          <Progress value={60} />
        </View>
      </Card>

      {/* Radio */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Radio</Text>
          <RadioGroup name="radio" value={radioValue} onChange={(e) => setRadioValue(e.value)}>
            <View gap={2}>
              <Radio value="option1">Option 1</Radio>
              <Radio value="option2">Option 2</Radio>
            </View>
          </RadioGroup>
        </View>
      </Card>

      {/* Select */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Select</Text>
          <Select name="select" value={selectValue} onChange={(e) => setSelectValue(e.value)} placeholder="Select an option">
            <Select.Option value="option1">Option 1</Select.Option>
            <Select.Option value="option2">Option 2</Select.Option>
            <Select.Option value="option3">Option 3</Select.Option>
          </Select>
        </View>
      </Card>

      {/* Skeleton */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Skeleton</Text>
          <Skeleton height="40px" />
        </View>
      </Card>

      {/* Slider */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Slider</Text>
          <Slider name="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} />
        </View>
      </Card>

      {/* Stepper */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Stepper</Text>
          <Stepper activeId={1}>
            <Stepper.Item title="Step 1" />
            <Stepper.Item title="Step 2" />
            <Stepper.Item title="Step 3" />
          </Stepper>
        </View>
      </Card>

      {/* Switch */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Switch</Text>
          <Switch name="switch" checked={switchValue} onChange={(e) => setSwitchValue(!!e.value)}>
            Toggle me
          </Switch>
        </View>
      </Card>

      {/* Table */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Table</Text>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Role</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jane Smith</Table.Cell>
                <Table.Cell>Designer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </View>
      </Card>

      {/* Tabs */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Tabs</Text>
          <Tabs defaultValue="tab1">
            <Tabs.List>
              <Tabs.Item value="tab1">Tab 1</Tabs.Item>
              <Tabs.Item value="tab2">Tab 2</Tabs.Item>
            </Tabs.List>
            <Tabs.Panel value="tab1">
              <View padding={3}>Content for Tab 1</View>
            </Tabs.Panel>
            <Tabs.Panel value="tab2">
              <View padding={3}>Content for Tab 2</View>
            </Tabs.Panel>
          </Tabs>
        </View>
      </Card>

      {/* TextArea */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">TextArea</Text>
          <TextArea
            name="textarea"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.value)}
            placeholder="Enter text..."
          />
        </View>
      </Card>

      {/* TextField */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">TextField</Text>
          <TextField
            name="textfield"
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.value)}
            placeholder="Enter text..."
          />
        </View>
      </Card>

      {/* Timeline */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Timeline</Text>
          <Timeline>
            <Timeline.Item>First event</Timeline.Item>
            <Timeline.Item>Second event</Timeline.Item>
            <Timeline.Item>Third event</Timeline.Item>
          </Timeline>
        </View>
      </Card>

      {/* Toast */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Toast</Text>
          <Button
            onClick={() => {
              toast.show({
                title: 'Toast notification',
                text: 'This is a toast message',
              })
            }}
          >
            Show Toast
          </Button>
        </View>
      </Card>

      {/* Tooltip */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Tooltip</Text>
          <Tooltip text="This is a tooltip">
            {(attributes) => (
              <Button attributes={attributes}>Hover me</Button>
            )}
          </Tooltip>
        </View>
      </Card>

      {/* ToggleButton */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">ToggleButton</Text>
          <ToggleButton checked={toggleValue} onChange={(e) => setToggleValue(e.checked)}>
            Toggle
          </ToggleButton>
        </View>
      </Card>

      {/* ToggleButtonGroup */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">ToggleButtonGroup</Text>
          <ToggleButtonGroup value={toggleGroupValue} onChange={(e) => setToggleGroupValue(e.value)}>
            <ToggleButton value="option1">Option 1</ToggleButton>
            <ToggleButton value="option2">Option 2</ToggleButton>
            <ToggleButton value="option3">Option 3</ToggleButton>
          </ToggleButtonGroup>
        </View>
      </Card>

      {/* Resizable - Last since it needs more space */}
      <Card padding={4}>
        <View gap={2}>
          <Text variant="title-3" weight="medium">Resizable</Text>
          <Resizable height="200px">
            <Resizable.Item>
              <View padding={3} backgroundColor="neutral-faded" height="100%">
                Panel 1
              </View>
            </Resizable.Item>
            <Resizable.Handle />
            <Resizable.Item>
              <View padding={3} backgroundColor="primary-faded" height="100%">
                Panel 2
              </View>
            </Resizable.Item>
          </Resizable>
        </View>
      </Card>
    </View>
  )
}
