# Agents Guide

This document provides guidelines for AI agents working on this codebase.

## ⚠️ Tailwind CSS Usage Policy

**PREFER RESHAPED COMPONENTS FIRST. Use Tailwind CSS strategically when Reshaped doesn't provide the needed functionality.**

### When to Use Reshaped vs Tailwind

**✅ ALWAYS use Reshaped for:**
- Typography (`Text` component instead of `<p>`, `<span>`, `<h1>`)
- Form elements (`TextField`, `TextArea`, `Select`, `Switch` instead of `<input>`, `<textarea>`, `<select>`)
- Layout containers (`View` instead of `<div>`)
- Buttons (`Button` instead of `<button>`)
- Cards and containers (`Card` component)
- Standard UI patterns that Reshaped provides

**✅ CAN use Tailwind when:**
- Reshaped doesn't provide the specific styling you need
- Quick prototyping and iterating on designs
- Copy/pasting examples to iterate from
- Filling gaps in Reshaped's coverage
- **IMPORTANT: When using Tailwind, prefer Reshaped design tokens** (see below)

### Reshaped Design Tokens with Tailwind

When you DO use Tailwind, use Reshaped's design tokens for consistency:

**Colors:**
- `bg-elevated`, `bg-neutral-faded`, `text-primary`, `text-critical`, `text-positive`, `text-warning`
- `border-neutral-faded`, `border-primary`

**Spacing:**
- `p-x1` through `p-x12`, `m-x1` through `m-x12`
- `gap-x1` through `gap-x12`
- Responsive: `l:p-x6`, `s:m-x4`

**Borders:**
- `rounded-small`, `rounded-medium`, `rounded-large`, `rounded-full`

**Shadows:**
- `shadow-raised`, `shadow-overlay`

**Example of Correct Tailwind Usage:**
```tsx
// ✅ GOOD - Using Tailwind with Reshaped tokens for styling gaps
<div className="bg-elevated p-x4 l:p-x6 text-critical border border-neutral-faded rounded-medium shadow-raised">
  Custom styled content with Reshaped tokens
</div>

// ✅ GOOD - Reshaped components with Tailwind for gaps
<View align="center" justify="center">
  <Text variant="title-1">Hello</Text>
  <div className="bg-elevated p-x4 rounded-medium">
    <Text variant="body-1">Mixed approach when needed</Text>
  </div>
</View>

// ❌ BAD - Using arbitrary Tailwind values instead of tokens
<div className="bg-gray-100 p-4 text-red-500 border border-gray-300 rounded-lg">
  Should use Reshaped tokens
</div>

// ❌ BAD - Using raw HTML when Reshaped has components
<p className="text-xl font-bold">Should use Text component</p>
<input type="text" className="border rounded p-2" />
```

## Component Usage Rules

### Always Use Internal Components

**NEVER** use plain HTML elements directly. Always use the Reshaped component library equivalents.

This includes:

- **Form elements**: Use TextField, Checkbox, Button, Select, etc. instead of `<input>`, `<button>`, `<select>`
- **Typography**: Use Text component instead of `<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`
- **Layout**: Use View component instead of `<div>`
- **Links**: Use Link component instead of `<a>`

### Typography - NEVER Use HTML Tags

**CRITICAL: Always use the Text component for all text content. Never use HTML heading or text tags.**

#### ❌ WRONG - Plain HTML Elements

```tsx
// NEVER use HTML tags for typography
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<p>Paragraph text</p>
<span>Inline text</span>

// NEVER use HTML form elements
<input type="text" placeholder="Enter name" />
<input type="checkbox" />
<button>Click me</button>
<select>
  <option>Option 1</option>
</select>
<textarea placeholder="Enter text" />

// NEVER use HTML layout elements
<div className="container">
  <div className="row">Content</div>
</div>
```

#### ✅ CORRECT - Internal Components

```tsx
// Always use Text component for typography
import { Text } from '../components/Text'

<Text variant="title-1">Page Title</Text>
<Text variant="title-2">Section Title</Text>
<Text variant="title-3">Subsection</Text>
<Text variant="body-1">Paragraph text</Text>
<Text variant="body-2">Smaller text</Text>
<Text variant="caption-1">Caption text</Text>

// Always use form components
import { TextField } from '../components/TextField'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import { Select } from '../components/Select'
import { Textarea } from '../components/Textarea'

<TextField name="name" placeholder="Enter name" />
<Checkbox>Option</Checkbox>
<Button>Click me</Button>
<Select name="option">
  <Select.Option value="1">Option 1</Select.Option>
</Select>
<Textarea name="text" placeholder="Enter text" />

// Always use View for layout
import { View } from '../components/View'

<View gap={4}>
  <View gap={2}>Content</View>
</View>
```

### Text Component Variants

**CRITICAL: NEVER use Tailwind classes for typography styling (text-xl, font-bold, etc.). Always use the Text component's variant and props API.**

The Text component supports multiple variants for different typography needs:

- `title-1` - Largest heading (replaces `<h1>`)
- `title-2` - Second-level heading (replaces `<h2>`)
- `title-3` - Third-level heading (replaces `<h3>`)
- `title-4` - Fourth-level heading (replaces `<h4>`)
- `title-5` - Fifth-level heading (replaces `<h5>`)
- `title-6` - Smallest heading (replaces `<h6>`)
- `body-1` - Regular body text (replaces `<p>`)
- `body-2` - Smaller body text
- `body-3` - Smallest body text
- `caption-1` - Caption text
- `caption-2` - Smaller caption text
- `featured-1` - Large featured text
- `featured-2` - Medium featured text
- `featured-3` - Small featured text

**Text Component Props for Styling:**

- `variant` - Controls the text size and style
- `weight` - Controls font weight (e.g., `"regular"`, `"medium"`, `"bold"`)
- `color` - Controls text color (e.g., `"neutral-faded"` for muted text)
- `align` - Controls text alignment (e.g., `"start"`, `"center"`, `"end"`)

**Example Usage:**

```tsx
import { Text } from '../components/Text'
import { View } from '../components/View'

// ❌ WRONG - Don't use Tailwind classes
<Text variant="title-1" className="text-2xl font-bold">Title</Text>
<Text variant="body-1" className="opacity-70">Muted text</Text>

// ✅ CORRECT - Use Text component props
<Text variant="title-1">Title</Text>
<Text variant="title-1" weight="bold">Bold Title</Text>
<Text variant="body-1" color="neutral-faded">Muted text</Text>
<Text variant="body-2" align="center">Centered text</Text>

<View gap={3}>
  <Text variant="title-1">Main Page Title</Text>
  <Text variant="title-2">Section Heading</Text>
  <Text variant="body-1">This is regular paragraph text.</Text>
  <Text variant="body-2" color="neutral-faded">This is muted helper text.</Text>
  <Text variant="caption-1">This is a caption or helper text.</Text>
</View>
```

### Component Import Pattern

All components should be imported from the `components/` directory, which re-exports them from the `reshaped` library:

```tsx
import { ComponentName } from '../components/ComponentName'
```

### Component Structure

When creating a new component wrapper:

1. Export the component from reshaped
2. Export the component's TypeScript types

```tsx
// components/ComponentName.tsx
export { ComponentName } from 'reshaped'
export type { ComponentNameProps } from 'reshaped'
```

### CRITICAL: Wrapping Subcomponents - Avoid Infinite Recursion

When wrapping a component's subcomponent (like `DropdownMenu.Item` or `Select.Custom`), you **MUST** store a reference to the original subcomponent **BEFORE** attaching the wrapped version. Otherwise, you'll create infinite recursion where the wrapped component calls itself.

#### ❌ WRONG - Causes Infinite Recursion

```tsx
// DON'T DO THIS - DropdownMenuItem will call itself infinitely!
const DropdownMenu = ReshapedDropdownMenu

const DropdownMenuItem = ({ size = 'small', ...props }: DropdownMenuItemProps) => {
  // This references DropdownMenu.Item, which will be DropdownMenuItem after line 8!
  return <ReshapedDropdownMenu.Item size={size} {...props} />
}

// This replaces ReshapedDropdownMenu.Item with DropdownMenuItem
DropdownMenu.Item = DropdownMenuItem
```

#### ✅ CORRECT - Store Reference First

```tsx
// Store reference to original subcomponent BEFORE attaching wrapped version
const DropdownMenu = ReshapedDropdownMenu
const ReshapedDropdownMenuItem = ReshapedDropdownMenu.Item  // ← Store reference first!

// Now wrap it safely
const DropdownMenuItem = ({ size = 'small', ...props }: DropdownMenuItemProps) => {
  // This always references the original Reshaped component
  return <ReshapedDropdownMenuItem size={size} {...props} />
}

// Safe to attach - DropdownMenuItem uses ReshapedDropdownMenuItem internally
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Trigger = ReshapedDropdownMenu.Trigger
DropdownMenu.Content = ReshapedDropdownMenu.Content
```

**Why this matters:**
- When you write `const DropdownMenu = ReshapedDropdownMenu`, both variables reference the same object
- If you attach `DropdownMenuItem` to `DropdownMenu.Item`, it also modifies `ReshapedDropdownMenu.Item`
- Without storing the original reference, `ReshapedDropdownMenu.Item` inside your wrapper will call itself
- This causes infinite recursion and crashes the app

**Always follow this pattern when wrapping subcomponents:**
1. Store a reference to the original subcomponent
2. Create your wrapper using that stored reference
3. Attach your wrapper to the parent component

### Layout and Spacing

Use the `View` component for all layout needs instead of plain `div` elements:

```tsx
import { View } from '../components/View'
import { Text } from '../components/Text'

// For vertical stacks
<View gap={3} padding={4}>
  <Text variant="body-1">Content 1</Text>
  <Text variant="body-1">Content 2</Text>
</View>

// For horizontal rows
<View direction="row" gap={2} align="center">
  <Text variant="body-1">Left</Text>
  <Text variant="body-1">Right</Text>
</View>

// View supports native height, width, minHeight, maxHeight, minWidth, maxWidth
<View height="80px" padding={4}>
  <Text variant="body-1">Fixed height container</Text>
</View>

<View height="100%" width="50%">
  <Text variant="body-1">Responsive sizing</Text>
</View>
```

### Cards

Use the `Card` component for containing grouped content:

```tsx
import { Card } from '../components/Card'
import { View } from '../components/View'
import { Text } from '../components/Text'
;<Card padding={4} elevated>
  <View gap={2}>
    <Text variant="title-3">Title</Text>
    <Text variant="body-1">Content</Text>
  </View>
</Card>
```

## Common Patterns

### Form with TextField

```tsx
import { View } from '../components/View'
import { Text } from '../components/Text'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'
;<form onSubmit={handleSubmit}>
  <View gap={3}>
    <View gap={2}>
      <Text variant="body-2" weight="bold">
        Label
      </Text>
      <TextField name="field-name" placeholder="Enter value" />
    </View>
    <Button type="submit" variant="solid" color="primary">
      Submit
    </Button>
  </View>
</form>
```

### File Upload with TextField

```tsx
import { FileUpload } from '../components/FileUpload'
import { TextField } from '../components/TextField'
;<View gap={3}>
  <TextField name="title" placeholder="Enter title" />
  <FileUpload name="files" onChange={handleFiles}>
    Drop files here
  </FileUpload>
</View>
```

### Buttons with Actions

```tsx
import { Button } from '../components/Button'
import { Trash2 } from 'lucide-react'

<Button
  variant="solid"
  color="primary"
  onClick={handleClick}
>
  Click Me
</Button>

<Button
  icon={Trash2}
  variant="ghost"
  size="small"
  onClick={handleDelete}
/>
```

### Buttons with Tooltips

The `Button` component has built-in tooltip support. Simply pass a `tooltip` prop with either a string or a tooltip configuration object. This is especially useful for disabled buttons, which normally don't receive mouse events.

```tsx
import { Button } from '../components/Button'

// Simple string tooltip
<Button color="primary" tooltip="This will submit the form">
  Submit
</Button>

// Tooltip on disabled button (the key benefit!)
<Button disabled tooltip="This action is not available">
  Disabled Action
</Button>

// Tooltip with configuration object
<Button
  tooltip={{
    text: "Save your changes",
    position: "top"
  }}
>
  Save
</Button>
```

**Why use the built-in tooltip prop instead of wrapping with `<Tooltip>`?**
- Disabled buttons don't receive mouse events, so tooltips won't work
- The Button component handles this automatically by wrapping disabled buttons in an `Actionable` component
- Simpler API - no need to manually wire up render props and attributes

## Documentation References

For detailed component documentation, refer to:

- https://reshaped.so/docs/components

## File Organization

- **components/**: Component wrappers that re-export from reshaped
- **views/**: Page-level components that demonstrate component usage
- **app/**: Next.js application structure (pages, layout, etc.)

## Quick Reference

| Need             | Component      | Import                                                      |
| ---------------- | -------------- | ----------------------------------------------------------- |
| Typography       | `Text`         | `import { Text } from '../components/Text'`                 |
| Text input       | `TextField`    | `import { TextField } from '../components/TextField'`       |
| Button           | `Button`       | `import { Button } from '../components/Button'`             |
| Checkbox         | `Checkbox`     | `import { Checkbox } from '../components/Checkbox'`         |
| Layout container | `View`         | `import { View } from '../components/View'`                 |
| Content card     | `Card`         | `import { Card } from '../components/Card'`                 |
| File upload      | `FileUpload`   | `import { FileUpload } from '../components/FileUpload'`     |
| Dropdown         | `DropdownMenu` | `import { DropdownMenu } from '../components/DropdownMenu'` |
| Tabs             | `Tabs`         | `import { Tabs } from '../components/Tabs'`                 |
| Badge            | `Badge`        | `import { Badge } from '../components/Badge'`               |
| Avatar           | `Avatar`       | `import { Avatar } from '../components/Avatar'`             |

## Learning Component APIs

**CRITICAL: Always check existing component usage before implementing.**

Component APIs in this codebase can be inconsistent. Before using any component:

1. **Look at the component's page in `views/`** - Example: For `Accordion`, check `views/AccordionPage.tsx`
2. **Check if there's an existing wrapper** in `components/` directory
3. **Search for existing usage** in the codebase to see patterns

### Common API Gotchas

- **Subcomponents vary**: Some use `.Item`, others use `.Option`, some use separate imports
  - Example: `Autocomplete.Item` vs `Select.Option` vs `RadioGroup` (separate import)
- **Not all components follow the same pattern**: Always verify the actual API
- **Some components need specific structure**: Check the page examples for required wrappers
- **Render props pattern**: Some components like `Tooltip` and `DropdownMenu.Trigger` use render props with `attributes`
  - Example: `<Tooltip text="...">{(attributes) => <Button attributes={attributes}>Text</Button>}</Tooltip>`
  - Example: `<DropdownMenu.Trigger>{(attributes) => <Button attributes={attributes}>Menu</Button>}</DropdownMenu.Trigger>`
- **Built-in tooltip support**: Some components automatically have the ability to work with tooltip without manually wiring the attributes and children render function
  - Example: `Button` has built-in tooltip support via the `tooltip` prop
  - Instead of: `<Tooltip text="..."><Button>Text</Button></Tooltip>` (won't work for disabled buttons)
  - Use: `<Button tooltip="...">Text</Button>` (works for both enabled and disabled buttons)

### When in Doubt

```bash
# Search for component usage
grep -r "ComponentName" views/
```

Then follow the patterns you find in the existing page implementations.

## TypeScript & Type Errors

**CRITICAL: When you encounter TypeScript errors, check the component page in `views/` first.**

### Common Required Props

Many form components require a `name` prop:

```tsx
// ❌ WRONG - Missing name prop
<TextField value={value} onChange={handler} />

// ✅ CORRECT
<TextField name="field-name" value={value} onChange={handler} />
```

**Components that require `name` prop:**

- `Autocomplete`
- `FileUpload`
- `NumberField` (also needs `increaseAriaLabel` and `decreaseAriaLabel`)
- `RadioGroup`
- `Select.Custom`
- `Slider`
- `Switch`
- `TextArea`
- `TextField`

### Component Prop Limitations

**Card Component:**
- Card does NOT support `maxWidth` or `width` props
- To constrain Card width, wrap it in a View with width constraints:

```tsx
// ❌ WRONG - Card doesn't support maxWidth/width
<Card padding={6} maxWidth="500px" width="100%">
  Content
</Card>

// ✅ CORRECT - Wrap Card in View with width constraints
<View maxWidth="500px" width="100%">
  <Card padding={6}>
    Content
  </Card>
</View>
```

**View Component:**
- View does NOT support `style` prop for custom CSS
- View does NOT support `borderRadius="full"` - only "small", "medium", "large" are valid
- For custom styling like fully rounded borders, use Tailwind with Reshaped tokens:

```tsx
// ❌ WRONG - View doesn't support style prop or borderRadius="full"
<View padding={3} borderRadius="full" style={{ borderRadius: '9999px' }}>
  Content
</View>

// ✅ CORRECT - Use Tailwind with Reshaped tokens for custom styling
<div className="bg-primary-faded p-x3 rounded-full inline-flex">
  Content
</div>
```

**Table.Row Component:**
- Table.Row uses `highlighted` prop for selection/highlighting, NOT `selected`

```tsx
// ❌ WRONG - 'selected' prop doesn't exist
<Table.Row selected={isSelected}>
  <Table.Cell>Content</Table.Cell>
</Table.Row>

// ✅ CORRECT - Use 'highlighted' prop
<Table.Row highlighted={isSelected}>
  <Table.Cell>Content</Table.Cell>
</Table.Row>
```

### Accessibility Props

Some components require aria-label props:

```tsx
// NumberField requires increase/decrease aria labels
<NumberField
  name="quantity"
  increaseAriaLabel="Increase quantity"
  decreaseAriaLabel="Decrease quantity"
  value={value}
  onChange={handler}
/>

// Pagination requires previous/next aria labels
<Pagination
  total={10}
  defaultPage={1}
  previousAriaLabel="Previous page"
  nextAriaLabel="Next page"
/>

// Dismissible requires closeAriaLabel
<Dismissible closeAriaLabel="Close" onClose={handler}>
  Content
</Dismissible>
```

### Event Handler Patterns

Different components return values in different ways:

```tsx
// Most components use e.value
<TextField onChange={(e) => setValue(e.value)} />
<Autocomplete onChange={(e) => setValue(e.value)} />
<RadioGroup onChange={(e) => setValue(e.value)} />

// Switch returns a potentially undefined value, needs coercion
<Switch onChange={(e) => setValue(!!e.value)} />

// ToggleButton uses e.checked instead of e.value
<ToggleButton onChange={(e) => setValue(e.checked)} />

// Pagination uses args.page
<Pagination onChange={(args) => setPage(args.page)} />
```

### Common Prop Name Differences

- **Pagination**: Uses `total`, `page`, and `defaultPage` (not `activePage` or `pageCount`)
- **Stepper**: Uses `activeId` and `title` (not `value` on items)
- **ToggleButton**: Uses `checked` (not `selected`)
- **Switch**: Also uses `checked`

### Debugging Type Errors

1. **Read the component page** in `views/ComponentNamePage.tsx` to see working examples
2. **Check the error message** for what props are required vs what you provided
3. **Look at existing usage** in the codebase
4. **Common fixes**:
   - Add missing `name` prop to form fields
   - Add aria-label props for accessibility components
   - Use correct event handler property (`e.value` vs `e.checked` vs `args.page`)
   - Use correct prop names (`page` vs `activePage`, `checked` vs `selected`)

## Tailwind CSS Replacement Guide

### Common Tailwind → Reshaped Conversions

**Typography:**
```tsx
// ❌ Tailwind
<h1 className="text-4xl font-bold">Title</h1>
<h2 className="text-2xl font-semibold">Section</h2>
<p className="text-xl text-gray-600">Description</p>
<span className="text-sm text-gray-500">Helper</span>
<span className="text-xs font-semibold opacity-70 uppercase">Label</span>

// ✅ Reshaped
<Text variant="title-1">Title</Text>
<Text variant="title-2">Section</Text>
<Text variant="featured-2" color="neutral-faded">Description</Text>
<Text variant="body-2" color="neutral-faded">Helper</Text>
<Text variant="caption-1" weight="medium" color="neutral-faded">LABEL</Text>
```

**Colors:**
```tsx
// ❌ Tailwind
<div className="text-blue-600">Primary</div>
<div className="text-green-500">Success</div>
<div className="text-red-500">Error</div>
<div className="text-yellow-500">Warning</div>
<div className="bg-gray-100">Background</div>

// ✅ Reshaped
<Text color="primary">Primary</Text>
<Text color="positive">Success</Text>
<Text color="critical">Error</Text>
<Text color="warning">Warning</Text>
<View backgroundColor="neutral-faded">Background</View>
```

**Layout:**
```tsx
// ❌ Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="w-full max-w-md p-4">Content</div>
</div>

// ✅ Reshaped
<View direction="row" gap={4} wrap>
  <View maxWidth="500px" width="100%" padding={4}>Content</View>
</View>
```

**Borders & Cards:**
```tsx
// ❌ Tailwind
<div className="border rounded px-3 py-2">Content</div>
<div className="border rounded p-4">Card</div>

// ✅ Reshaped
<Card padding={3}>Content</Card>
<Card padding={4}>Card</Card>
```

**Form Elements:**
```tsx
// ❌ Tailwind
<textarea className="border rounded px-3 py-2" placeholder="Text" />
<select className="border rounded px-2 py-1">
  <option>Option</option>
</select>
<input type="checkbox" />

// ✅ Reshaped
<TextArea name="text" placeholder="Text" />
<Select.Custom name="select" placeholder="Select">
  <Select.Option value="1">Option</Select.Option>
</Select.Custom>
<Switch name="enabled" />
```

**Icons with Colors:**
```tsx
// ❌ Tailwind
<Icon size={20} className="text-blue-500" />
<Icon size={16} className="opacity-70" />

// ✅ Reshaped
<Text color="primary">
  <Icon size={20} />
</Text>
<Text color="neutral-faded">
  <Icon size={16} />
</Text>
```

**Links:**
```tsx
// ❌ Tailwind
<a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
  Link
</a>

// ✅ Reshaped
<Link
  href="https://example.com"
  attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
>
  Link
</Link>
```

### Pre-Commit Checklist

Before creating any pull request, verify your code has:

- [ ] ✅ NO `className` props with Tailwind utilities (`text-*`, `font-*`, `bg-*`, `p-*`, `m-*`, `flex`, `grid`, etc.)
- [ ] ✅ ALL text uses `<Text>` component (no `<p>`, `<span>`, `<h1>`, `<h2>`, etc.)
- [ ] ✅ ALL layout uses `<View>` component (no `<div>` with styling)
- [ ] ✅ ALL colors use Reshaped props (`color="primary"`, `color="neutral-faded"`, not Tailwind classes)
- [ ] ✅ ALL form elements use Reshaped components (`TextField`, `TextArea`, `Select`, `Switch`, `Checkbox`)
- [ ] ✅ ALL borders/cards use `<Card>` component (no `className="border rounded"`)

## Important Notes

- **NEVER use HTML tags - always use Reshaped components**
  - Use `<Text variant="title-1">` instead of `<h1>`
  - Use `<Text variant="body-1">` instead of `<p>` or `<span>`
  - Use `<View>` instead of `<div>`
  - Use `<Button>` instead of `<button>`
  - Use `<TextField>` instead of `<input>`
- **NEVER use Tailwind CSS utility classes**
  - Use `<Text variant="title-2">` instead of `className="text-2xl font-semibold"`
  - Use `<Text color="neutral-faded">` instead of `className="text-gray-600"`
  - Use `<View direction="row" gap={4}>` instead of `className="flex gap-4"`
  - Use `<Card padding={4}>` instead of `className="border rounded p-4"`
- **Never mix native HTML elements with internal components**
- **Always check if a component wrapper exists before creating form elements**
- **Use TypeScript types from the component library**
- **Follow the existing patterns in the views/ directory**
- **Always check component page examples before implementing - APIs may differ from expectations**
- **Component subcomponents are not always named consistently (e.g., `.Item` vs `.Option`)**
- **When you get TypeScript errors, check the component page first - don't guess at prop names**
