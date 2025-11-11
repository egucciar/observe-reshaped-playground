'use client'

import { View } from '../components/View'
import { Resizable } from '../components/Resizable'
import { ThemeToggle } from '../components/ThemeToggle'
import { Accordion } from '../components/Accordion'
import { AppLink } from '../components/AppLink'
import {
  introductionComponents,
  customComponents,
  blocksComponents,
  reshapedComponents,
} from './navigationConfig'

export function Content({ children }: { children: React.ReactNode }) {

  return (
    <View height="100vh" width="100%" overflow="hidden" position="relative">
      <View position="absolute" insetTop={4} insetEnd={4} className="!z-[1000]">
        <ThemeToggle />
      </View>
      <Resizable variant="bordered" height="100%">
        <Resizable.Item defaultSize="200px" minSize="150px" maxSize="400px">
          <View
            paddingInline={2}
            paddingTop={2}
            height="100vh"
            overflow="auto"
            className="scrollbar-on-hover"
          >
            <View gap={2}>
              <Accordion defaultActive>
                <Accordion.Trigger>
                  <View padding={2}>
                    <span className="font-semibold">Introduction</span>
                  </View>
                </Accordion.Trigger>
                <Accordion.Content>
                  <View paddingTop={2} gap={1}>
                    {introductionComponents.map(comp => (
                      <AppLink.MenuItem key={comp.key} href={`/${comp.key}`}>
                        {comp.label}
                      </AppLink.MenuItem>
                    ))}
                  </View>
                </Accordion.Content>
              </Accordion>

              <Accordion defaultActive>
                <Accordion.Trigger>
                  <View padding={2}>
                    <span className="font-semibold">Custom</span>
                  </View>
                </Accordion.Trigger>
                <Accordion.Content>
                  <View paddingTop={2} gap={1}>
                    {customComponents.map(comp => (
                      <AppLink.MenuItem key={comp.key} href={`/${comp.key}`}>
                        {comp.label}
                      </AppLink.MenuItem>
                    ))}
                  </View>
                </Accordion.Content>
              </Accordion>

              <Accordion defaultActive>
                <Accordion.Trigger>
                  <View padding={2}>
                    <span className="font-semibold">Blocks</span>
                  </View>
                </Accordion.Trigger>
                <Accordion.Content>
                  <View paddingTop={2} gap={1}>
                    {blocksComponents.map(comp => (
                      <AppLink.MenuItem key={comp.key} href={`/${comp.key}`}>
                        {comp.label}
                      </AppLink.MenuItem>
                    ))}
                  </View>
                </Accordion.Content>
              </Accordion>

              <Accordion defaultActive>
                <Accordion.Trigger>
                  <View padding={2}>
                    <span className="font-semibold">Reshaped</span>
                  </View>
                </Accordion.Trigger>
                <Accordion.Content>
                  <View paddingTop={2} gap={1}>
                    {reshapedComponents.map(comp => (
                      <AppLink.MenuItem key={comp.key} href={`/${comp.key}`}>
                        {comp.label}
                      </AppLink.MenuItem>
                    ))}
                  </View>
                </Accordion.Content>
              </Accordion>
            </View>
          </View>
        </Resizable.Item>

        <Resizable.Handle />

        <Resizable.Item>
          <View height="100vh" width="100%" className="overflow-x-hidden overflow-y-auto">
            {children}
          </View>
        </Resizable.Item>
      </Resizable>
    </View>
  )
}
