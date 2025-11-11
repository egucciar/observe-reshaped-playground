import { useState } from 'react'
import { View } from '../components/View'
import { Tabs } from '../components/Tabs'

export function TabsPage() {
  const [activeTab, setActiveTab] = useState('tab1')
  const [verticalTab, setVerticalTab] = useState('vtab1')

  return (
    <View padding={4} gap={4}>
      <h1>Tabs Component</h1>

      <View gap={3}>
        <h2>Horizontal Tabs (Default)</h2>
        <Tabs value={activeTab} onChange={args => setActiveTab(args.value)}>
          <Tabs.List>
            <Tabs.Item value="tab1">Tab 1</Tabs.Item>
            <Tabs.Item value="tab2">Tab 2</Tabs.Item>
            <Tabs.Item value="tab3">Tab 3</Tabs.Item>
          </Tabs.List>
        </Tabs>
        <View padding={3} backgroundColor="neutral-faded">
          <p>Active tab: {activeTab}</p>
        </View>
      </View>

      <View gap={3}>
        <h2>Vertical Tabs</h2>
        <View direction="row" gap={3}>
          <Tabs
            direction="column"
            value={verticalTab}
            onChange={args => setVerticalTab(args.value)}
          >
            <Tabs.List>
              <Tabs.Item value="vtab1">Vertical 1</Tabs.Item>
              <Tabs.Item value="vtab2">Vertical 2</Tabs.Item>
              <Tabs.Item value="vtab3">Vertical 3</Tabs.Item>
            </Tabs.List>
          </Tabs>
          <View padding={3} backgroundColor="neutral-faded" grow>
            <p>Active tab: {verticalTab}</p>
          </View>
        </View>
      </View>

      <View gap={3}>
        <h2>With Content Panels</h2>
        <Tabs value={activeTab} onChange={args => setActiveTab(args.value)}>
          <Tabs.List>
            <Tabs.Item value="tab1">First</Tabs.Item>
            <Tabs.Item value="tab2">Second</Tabs.Item>
            <Tabs.Item value="tab3">Third</Tabs.Item>
          </Tabs.List>
        </Tabs>
        <View padding={3} backgroundColor="neutral-faded">
          {activeTab === 'tab1' && <p>Content for First tab</p>}
          {activeTab === 'tab2' && <p>Content for Second tab</p>}
          {activeTab === 'tab3' && <p>Content for Third tab</p>}
        </View>
      </View>
    </View>
  )
}
