# Agents Guide

This document provides guidelines for AI agents working on this codebase.

## Component Usage Rules

### Always Use Internal Components

**NEVER** use plain HTML form elements or inputs directly. Always use the component library equivalents.

#### ❌ WRONG - Plain HTML Elements

```tsx
// Never do this
<input type="text" placeholder="Enter name" />
<input type="checkbox" />
<button>Click me</button>
<select>
  <option>Option 1</option>
</select>
<textarea placeholder="Enter text" />
```

#### ✅ CORRECT - Internal Components

```tsx
// Always use these
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

### Layout and Spacing

Use the `View` component for all layout needs instead of plain `div` elements:

```tsx
import { View } from '../components/View'

// For vertical stacks
<View gap={3} padding={4}>
  <span>Content 1</span>
  <span>Content 2</span>
</View>

// For horizontal rows
<View direction="row" gap={2} align="center">
  <span>Left</span>
  <span>Right</span>
</View>
```

### Cards

Use the `Card` component for containing grouped content:

```tsx
import { Card } from '../components/Card'

<Card padding={4} elevated>
  <View gap={2}>
    <h3>Title</h3>
    <p>Content</p>
  </View>
</Card>
```

## Common Patterns

### Form with TextField

```tsx
<form onSubmit={handleSubmit}>
  <View gap={3}>
    <View gap={2}>
      <span className="text-sm font-semibold">Label</span>
      <TextField
        name="field-name"
        placeholder="Enter value"
      />
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

<View gap={3}>
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

## Documentation References

For detailed component documentation, refer to:
- https://reshaped.so/docs/components

## File Organization

- **components/**: Component wrappers that re-export from reshaped
- **views/**: Page-level components that demonstrate component usage
- **app/**: Next.js application structure (pages, layout, etc.)

## Quick Reference

| Need | Component | Import |
|------|-----------|--------|
| Text input | `TextField` | `import { TextField } from '../components/TextField'` |
| Button | `Button` | `import { Button } from '../components/Button'` |
| Checkbox | `Checkbox` | `import { Checkbox } from '../components/Checkbox'` |
| Layout container | `View` | `import { View } from '../components/View'` |
| Content card | `Card` | `import { Card } from '../components/Card'` |
| File upload | `FileUpload` | `import { FileUpload } from '../components/FileUpload'` |
| Dropdown | `DropdownMenu` | `import { DropdownMenu } from '../components/DropdownMenu'` |
| Tabs | `Tabs` | `import { Tabs } from '../components/Tabs'` |
| Badge | `Badge` | `import { Badge } from '../components/Badge'` |
| Avatar | `Avatar` | `import { Avatar } from '../components/Avatar'` |

## Important Notes

- **Never mix native HTML elements with internal components**
- **Always check if a component wrapper exists before creating form elements**
- **Use TypeScript types from the component library**
- **Follow the existing patterns in the views/ directory**
