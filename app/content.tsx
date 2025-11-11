'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Resizable } from '../components/Resizable'
import { ThemeToggle } from '../components/ThemeToggle'
import { Accordion } from '../components/Accordion'
import { MenuItem } from '../components/MenuItem'
import { Sparkles } from 'lucide-react'
import { AccordionPage } from '../views/AccordionPage'
import { ActionBarPage } from '../views/ActionBarPage'
import { ActionablePage } from '../views/ActionablePage'
import { AlertPage } from '../views/AlertPage'
import { AutocompletePage } from '../views/AutocompletePage'
import { AvatarPage } from '../views/AvatarPage'
import { BadgePage } from '../views/BadgePage'
import { BreadcrumbsPage } from '../views/BreadcrumbsPage'
import { ButtonPage } from '../views/ButtonPage'
import { CardPage } from '../views/CardPage'
import { CheckboxPage } from '../views/CheckboxPage'
import { ContainerPage } from '../views/ContainerPage'
import { DividerPage } from '../views/DividerPage'
import { DismissiblePage } from '../views/DismissiblePage'
import { DropdownMenuPage } from '../views/DropdownMenuPage'
import { FileUploadPage } from '../views/FileUploadPage'
import { LinkPage } from '../views/LinkPage'
import { LoaderPage } from '../views/LoaderPage'
import { MenuItemPage } from '../views/MenuItemPage'
import { ModalPage } from '../views/ModalPage'
import { NumberFieldPage } from '../views/NumberFieldPage'
import { PaginationPage } from '../views/PaginationPage'
import { ProgressPage } from '../views/ProgressPage'
import { RadioPage } from '../views/RadioPage'
import { ResizablePage } from '../views/ResizablePage'
import { SelectPage } from '../views/SelectPage'
import { SkeletonPage } from '../views/SkeletonPage'
import { SliderPage } from '../views/SliderPage'
import { StepperPage } from '../views/StepperPage'
import { SwitchPage } from '../views/SwitchPage'
import { TablePage } from '../views/TablePage'
import { TabsPage } from '../views/TabsPage'
import { TextAreaPage } from '../views/TextAreaPage'
import { TextFieldPage } from '../views/TextFieldPage'
import { TimelinePage } from '../views/TimelinePage'
import { ToastPage } from '../views/ToastPage'
import { TooltipPage } from '../views/TooltipPage'
import { ToggleButtonPage } from '../views/ToggleButtonPage'
import { ToggleButtonGroupPage } from '../views/ToggleButtonGroupPage'
import { ViewPage } from '../views/ViewPage'
import { OverviewPage } from '../views/OverviewPage'
import { ConstructionPage } from '../views/ConstructionPage'
import { PlaceholderPage } from '../views/PlaceholderPage'
import { PlaygroundPage } from '../views/PlaygroundPage'
import { ShowcasePage } from '../views/ShowcasePage'
import { DashboardBlockPage } from '../views/DashboardBlockPage'
import { LoginBlockPage } from '../views/LoginBlockPage'
import { SidebarBlockPage } from '../views/SidebarBlockPage'

const introductionComponents = [
  { key: 'overview', label: 'Overview', component: OverviewPage },
  { key: 'playground', label: 'Playground', component: PlaygroundPage },
  { key: 'showcase', label: 'Showcase', component: ShowcasePage },
]

const customComponents = [
  {
    key: 'accordiongroup',
    label: 'Accordion Group',
    component: () => (
      <PlaceholderPage
        title="Accordion Group Component"
        message="A group of accordions with controlled single or multiple expansion. Coming soon!"
      />
    ),
  },
  {
    key: 'aiinputs',
    label: 'AI Inputs',
    component: () => (
      <PlaceholderPage
        title="AI Inputs Component"
        message="Intelligent input components with AI-powered suggestions and validation. Coming soon!"
      />
    ),
  },
  { key: 'construction', label: 'Construction', component: ConstructionPage },
  {
    key: 'facetpanel',
    label: 'Facet Panel',
    component: () => (
      <PlaceholderPage
        title="Facet Panel Component"
        message="A filtering panel with faceted search capabilities. Coming soon!"
      />
    ),
  },
  {
    key: 'fieldgroup',
    label: 'Field Group',
    component: () => (
      <PlaceholderPage
        title="Field Group Component"
        message="A component for grouping related input fields together. Coming soon!"
      />
    ),
  },
  {
    key: 'multipleselector',
    label: 'MultipleSelector',
    component: () => (
      <PlaceholderPage
        title="MultipleSelector Component"
        message="An enhanced multi-select component with search and filtering. Coming soon!"
      />
    ),
  },
  {
    key: 'overflowlist',
    label: 'OverflowList',
    component: () => (
      <PlaceholderPage
        title="OverflowList Component"
        message="A smart list component that handles overflow with a popup menu. Coming soon!"
      />
    ),
  },
  {
    key: 'toolbar',
    label: 'Toolbar',
    component: () => (
      <PlaceholderPage
        title="Toolbar Component"
        message="A custom toolbar component for enhanced navigation and actions. Coming soon!"
      />
    ),
  },
]

const blocksComponents = [
  { key: 'dashboard-block', label: 'Dashboard', component: DashboardBlockPage },
  { key: 'login-block', label: 'Login', component: LoginBlockPage },
  { key: 'sidebar-block', label: 'Sidebar', component: SidebarBlockPage },
]

const reshapedComponents = [
  { key: 'accordion', label: 'Accordion', component: AccordionPage },
  { key: 'actionbar', label: 'ActionBar', component: ActionBarPage },
  { key: 'actionable', label: 'Actionable', component: ActionablePage },
  { key: 'alert', label: 'Alert', component: AlertPage },
  { key: 'autocomplete', label: (<span className="flex items-center gap-1">Autocomplete <Sparkles size={14} /></span>), component: AutocompletePage },
  { key: 'avatar', label: 'Avatar', component: AvatarPage },
  { key: 'badge', label: 'Badge', component: BadgePage },
  { key: 'breadcrumbs', label: 'Breadcrumbs', component: BreadcrumbsPage },
  { key: 'button', label: (<span className="flex items-center gap-1">Button <Sparkles size={14} /></span>), component: ButtonPage },
  { key: 'card', label: (<span className="flex items-center gap-1">Card <Sparkles size={14} /></span>), component: CardPage },
  { key: 'checkbox', label: 'Checkbox', component: CheckboxPage },
  { key: 'container', label: 'Container', component: ContainerPage },
  { key: 'divider', label: 'Divider', component: DividerPage },
  { key: 'dismissible', label: 'Dismissible', component: DismissiblePage },
  { key: 'dropdownmenu', label: 'DropdownMenu', component: DropdownMenuPage },
  { key: 'fileupload', label: 'FileUpload', component: FileUploadPage },
  { key: 'link', label: 'Link', component: LinkPage },
  { key: 'loader', label: 'Loader', component: LoaderPage },
  { key: 'menuitem', label: 'MenuItem', component: MenuItemPage },
  { key: 'modal', label: 'Modal', component: ModalPage },
  { key: 'numberfield', label: (<span className="flex items-center gap-1">NumberField <Sparkles size={14} /></span>), component: NumberFieldPage },
  { key: 'pagination', label: 'Pagination', component: PaginationPage },
  { key: 'progress', label: 'Progress', component: ProgressPage },
  { key: 'radio', label: 'Radio', component: RadioPage },
  { key: 'resizable', label: 'Resizable', component: ResizablePage },
  { key: 'select', label: (<span className="flex items-center gap-1">Select <Sparkles size={14} /></span>), component: SelectPage },
  { key: 'skeleton', label: 'Skeleton', component: SkeletonPage },
  { key: 'slider', label: 'Slider', component: SliderPage },
  { key: 'stepper', label: 'Stepper', component: StepperPage },
  { key: 'switch', label: 'Switch', component: SwitchPage },
  { key: 'table', label: 'Table', component: TablePage },
  { key: 'tabs', label: 'Tabs', component: TabsPage },
  { key: 'textarea', label: (<span className="flex items-center gap-1">TextArea <Sparkles size={14} /></span>), component: TextAreaPage },
  { key: 'textfield', label: (<span className="flex items-center gap-1">TextField <Sparkles size={14} /></span>), component: TextFieldPage },
  { key: 'timeline', label: 'Timeline', component: TimelinePage },
  { key: 'toast', label: 'Toast', component: ToastPage },
  { key: 'tooltip', label: 'Tooltip', component: TooltipPage },
  { key: 'togglebutton', label: 'ToggleButton', component: ToggleButtonPage },
  {
    key: 'togglebuttongroup',
    label: 'ToggleButtonGroup',
    component: ToggleButtonGroupPage,
  },
  { key: 'view', label: 'View', component: ViewPage },
]

const allComponents = [
  ...introductionComponents,
  ...customComponents,
  ...blocksComponents,
  ...reshapedComponents,
]

export function Content() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderPage = () => {
    const currentConfig = allComponents.find(c => c.key === activeTab)
    if (currentConfig) {
      const PageComponent = currentConfig.component
      return <PageComponent />
    }
    return <OverviewPage />
  }

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
                      <MenuItem
                        key={comp.key}
                        selected={activeTab === comp.key}
                        onClick={() => setActiveTab(comp.key)}
                      >
                        {comp.label}
                      </MenuItem>
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
                      <MenuItem
                        key={comp.key}
                        selected={activeTab === comp.key}
                        onClick={() => setActiveTab(comp.key)}
                      >
                        {comp.label}
                      </MenuItem>
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
                      <MenuItem
                        key={comp.key}
                        selected={activeTab === comp.key}
                        onClick={() => setActiveTab(comp.key)}
                      >
                        {comp.label}
                      </MenuItem>
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
                      <MenuItem
                        key={comp.key}
                        selected={activeTab === comp.key}
                        onClick={() => setActiveTab(comp.key)}
                      >
                        {comp.label}
                      </MenuItem>
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
            {renderPage()}
          </View>
        </Resizable.Item>
      </Resizable>
    </View>
  )
}
