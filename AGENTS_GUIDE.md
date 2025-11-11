# Agents Guide

This document provides guidelines for AI agents working on this codebase.

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

## Important Notes

- **NEVER use HTML tags - always use Reshaped components**
  - Use `<Text variant="title-1">` instead of `<h1>`
  - Use `<Text variant="body-1">` instead of `<p>` or `<span>`
  - Use `<View>` instead of `<div>`
  - Use `<Button>` instead of `<button>`
  - Use `<TextField>` instead of `<input>`
- **Never mix native HTML elements with internal components**
- **Always check if a component wrapper exists before creating form elements**
- **Use TypeScript types from the component library**
- **Follow the existing patterns in the views/ directory**
- **Always check component page examples before implementing - APIs may differ from expectations**
- **Component subcomponents are not always named consistently (e.g., `.Item` vs `.Option`)**
- **When you get TypeScript errors, check the component page first - don't guess at prop names**
