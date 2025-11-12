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
import { FieldGroupPage } from '../views/FieldGroupPage'
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
import { SignUpFlowPage } from '../views/SignUpFlowPage'
import { AppLinkPage } from '../views/AppLinkPage'

export const componentMap: Record<string, React.ComponentType> = {
  // Introduction
  overview: OverviewPage,
  playground: PlaygroundPage,
  showcase: ShowcasePage,

  // Custom
  accordiongroup: () => (
    <PlaceholderPage
      title="Accordion Group Component"
      message="A group of accordions with controlled single or multiple expansion. Coming soon!"
    />
  ),
  aiinputs: () => (
    <PlaceholderPage
      title="AI Inputs Component"
      message="Intelligent input components with AI-powered suggestions and validation. Coming soon!"
    />
  ),
  applink: AppLinkPage,
  construction: ConstructionPage,
  facetpanel: () => (
    <PlaceholderPage
      title="Facet Panel Component"
      message="A filtering panel with faceted search capabilities. Coming soon!"
    />
  ),
  fieldgroup: FieldGroupPage,
  multipleselector: () => (
    <PlaceholderPage
      title="MultipleSelector Component"
      message="An enhanced multi-select component with search and filtering. Coming soon!"
    />
  ),
  overflowlist: () => (
    <PlaceholderPage
      title="OverflowList Component"
      message="A smart list component that handles overflow with a popup menu. Coming soon!"
    />
  ),
  toolbar: () => (
    <PlaceholderPage
      title="Toolbar Component"
      message="A custom toolbar component for enhanced navigation and actions. Coming soon!"
    />
  ),

  // Blocks
  'dashboard-block': DashboardBlockPage,
  'login-block': LoginBlockPage,
  'signup-flow': SignUpFlowPage,
  'sidebar-block': SidebarBlockPage,

  // Reshaped
  accordion: AccordionPage,
  actionbar: ActionBarPage,
  actionable: ActionablePage,
  alert: AlertPage,
  autocomplete: AutocompletePage,
  avatar: AvatarPage,
  badge: BadgePage,
  breadcrumbs: BreadcrumbsPage,
  button: ButtonPage,
  card: CardPage,
  checkbox: CheckboxPage,
  container: ContainerPage,
  divider: DividerPage,
  dismissible: DismissiblePage,
  dropdownmenu: DropdownMenuPage,
  fileupload: FileUploadPage,
  link: LinkPage,
  loader: LoaderPage,
  menuitem: MenuItemPage,
  modal: ModalPage,
  numberfield: NumberFieldPage,
  pagination: PaginationPage,
  progress: ProgressPage,
  radio: RadioPage,
  resizable: ResizablePage,
  select: SelectPage,
  skeleton: SkeletonPage,
  slider: SliderPage,
  stepper: StepperPage,
  switch: SwitchPage,
  table: TablePage,
  tabs: TabsPage,
  textarea: TextAreaPage,
  textfield: TextFieldPage,
  timeline: TimelinePage,
  toast: ToastPage,
  tooltip: TooltipPage,
  togglebutton: ToggleButtonPage,
  togglebuttongroup: ToggleButtonGroupPage,
  view: ViewPage,
}
