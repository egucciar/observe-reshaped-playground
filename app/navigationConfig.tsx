import { Sparkles } from 'lucide-react'

export interface NavItem {
  key: string
  label: React.ReactNode
}

export const introductionComponents: NavItem[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'playground', label: 'Playground' },
  { key: 'showcase', label: 'Showcase' },
  { key: 'tailwind', label: 'Tailwind' },
]

export const customComponents: NavItem[] = [
  { key: 'accordiongroup', label: 'Accordion Group' },
  { key: 'aiinputs', label: 'AI Inputs' },
  { key: 'applink', label: 'AppLink' },
  { key: 'construction', label: 'Construction' },
  { key: 'facetpanel', label: 'Facet Panel' },
  { key: 'fieldgroup', label: 'Field Group' },
  { key: 'multipleselector', label: 'MultipleSelector' },
  { key: 'overflowlist', label: 'OverflowList' },
  { key: 'toolbar', label: 'Toolbar' },
]

export const blocksComponents: NavItem[] = [
  { key: 'dashboard-block', label: 'Dashboard' },
  { key: 'login-block', label: 'Login' },
  { key: 'sidebar-block', label: 'Sidebar' },
]

export const reshapedComponents: NavItem[] = [
  { key: 'accordion', label: 'Accordion' },
  { key: 'actionbar', label: 'ActionBar' },
  { key: 'actionable', label: 'Actionable' },
  { key: 'alert', label: 'Alert' },
  {
    key: 'autocomplete',
    label: (
      <span className="flex items-center gap-1">
        Autocomplete <Sparkles size={14} />
      </span>
    ),
  },
  { key: 'avatar', label: 'Avatar' },
  { key: 'badge', label: 'Badge' },
  { key: 'breadcrumbs', label: 'Breadcrumbs' },
  {
    key: 'button',
    label: (
      <span className="flex items-center gap-1">
        Button <Sparkles size={14} />
      </span>
    ),
  },
  {
    key: 'card',
    label: (
      <span className="flex items-center gap-1">
        Card <Sparkles size={14} />
      </span>
    ),
  },
  { key: 'checkbox', label: 'Checkbox' },
  { key: 'container', label: 'Container' },
  { key: 'divider', label: 'Divider' },
  { key: 'dismissible', label: 'Dismissible' },
  { key: 'dropdownmenu', label: 'DropdownMenu' },
  { key: 'fileupload', label: 'FileUpload' },
  { key: 'link', label: 'Link' },
  { key: 'loader', label: 'Loader' },
  { key: 'menuitem', label: 'MenuItem' },
  { key: 'modal', label: 'Modal' },
  {
    key: 'numberfield',
    label: (
      <span className="flex items-center gap-1">
        NumberField <Sparkles size={14} />
      </span>
    ),
  },
  { key: 'pagination', label: 'Pagination' },
  { key: 'progress', label: 'Progress' },
  { key: 'radio', label: 'Radio' },
  { key: 'resizable', label: 'Resizable' },
  {
    key: 'select',
    label: (
      <span className="flex items-center gap-1">
        Select <Sparkles size={14} />
      </span>
    ),
  },
  { key: 'skeleton', label: 'Skeleton' },
  { key: 'slider', label: 'Slider' },
  { key: 'stepper', label: 'Stepper' },
  { key: 'switch', label: 'Switch' },
  { key: 'table', label: 'Table' },
  { key: 'tabs', label: 'Tabs' },
  {
    key: 'text',
    label: (
      <span className="flex items-center gap-1">
        Text <Sparkles size={14} />
      </span>
    ),
  },
  {
    key: 'textarea',
    label: (
      <span className="flex items-center gap-1">
        TextArea <Sparkles size={14} />
      </span>
    ),
  },
  {
    key: 'textfield',
    label: (
      <span className="flex items-center gap-1">
        TextField <Sparkles size={14} />
      </span>
    ),
  },
  { key: 'timeline', label: 'Timeline' },
  { key: 'toast', label: 'Toast' },
  { key: 'tooltip', label: 'Tooltip' },
  { key: 'togglebutton', label: 'ToggleButton' },
  { key: 'togglebuttongroup', label: 'ToggleButtonGroup' },
  { key: 'view', label: 'View' },
]
