# Component Creation Guide

This guide is for creating and modifying custom wrapper components around Reshaped components. If you're building prototypes or pages using existing components, see [AGENTS_GUIDE.md](AGENTS_GUIDE.md) instead.

## Component Structure

When creating a new component wrapper:

1. Export the component from reshaped
2. Export the component's TypeScript types

```tsx
// components/ComponentName.tsx
export { ComponentName } from 'reshaped'
export type { ComponentNameProps } from 'reshaped'
```

## CRITICAL: Wrapping Subcomponents - Avoid Infinite Recursion

When wrapping a component's subcomponent (like `DropdownMenu.Item` or `Select.Custom`), you **MUST** store a reference to the original subcomponent **BEFORE** attaching the wrapped version. Otherwise, you'll create infinite recursion where the wrapped component calls itself.

### ❌ WRONG - Causes Infinite Recursion

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

### ✅ CORRECT - Store Reference First

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

## Tooltip Integration Patterns

### Built-in Tooltip Support (Recommended)

For components that should support tooltips, provide a `tooltip` prop that handles the integration internally. This is especially important for disabled interactive elements that don't receive mouse events.

**Example: [Button.tsx](components/Button.tsx)**

```tsx
export interface ButtonProps extends ReshapedButtonProps {
  tooltip?: string | Omit<TooltipProps, 'children'>
}

// Internal component that renders with combined attributes
const ButtonWithAttributes = ({
  tooltipAttributes,
  ...props
}: ButtonProps & { tooltipAttributes?: ButtonProps['attributes'] }) => {
  return (
    <ReshapedButton
      {...props}
      attributes={{
        ...props.attributes,
        ...tooltipAttributes,
      }}
    />
  )
}

const Button = ({ tooltip, ...props }: ButtonProps) => {
  if (!tooltip) {
    return <ButtonWithAttributes {...props} />
  }

  const tooltipConfig: Omit<TooltipProps, 'children'> =
    typeof tooltip === 'string' ? { text: tooltip } : tooltip

  return (
    <Tooltip {...tooltipConfig}>
      {tooltipAttributes => {
        // For disabled buttons, wrap in Actionable to enable tooltip hover
        if (props.disabled) {
          return (
            <Actionable attributes={tooltipAttributes} as="div">
              <ButtonWithAttributes {...props} />
            </Actionable>
          )
        }

        // For enabled buttons, pass tooltip attributes directly
        return <ButtonWithAttributes {...props} tooltipAttributes={tooltipAttributes} />
      }}
    </Tooltip>
  )
}
```

### Tooltip Attributes Pattern - Internal Components

**CRITICAL: When you need to access the ref from tooltip attributes (e.g., for truncation detection), extract it from `tooltipAttributes`, NOT from the component's `attributes` prop.**

The Tooltip component provides attributes (including a ref) through its render prop. If you need to access this ref for internal logic, you must use the internal component pattern.

**Key principle: Extract refs from `tooltipAttributes`, NOT from `attributes`**

#### ❌ WRONG - Trying to Get Ref from attributes

```tsx
export const MyComponent = ({ attributes, ...props }) => {
  // This ref will be undefined when used inside a Tooltip render prop!
  const ref = attributes?.ref

  return (
    <Tooltip text="...">
      {tooltipAttributes => (
        <ReshapedComponent
          attributes={{
            ...attributes,
            ...tooltipAttributes,  // tooltipAttributes contains the ref!
          }}
          {...props}
        />
      )}
    </Tooltip>
  )
}
```

#### ✅ CORRECT - Internal Component Pattern

**Example: [Text.tsx](components/Text.tsx)**

```tsx
// Step 1: Create internal component that accepts tooltipAttributes
const TextWithAttributes = <As extends keyof React.JSX.IntrinsicElements = 'div'>({
  tooltipAttributes,
  ...props
}: TextProps<As> & {
  tooltipAttributes?: TextProps<As>['attributes']
}) => {
  // Extract ref from tooltipAttributes (which contains the combined attributes)
  const containerRef = (tooltipAttributes?.ref as React.RefObject<HTMLElement>) ?? {
    current: null,
  }

  // Now you can use the ref for internal logic (e.g., truncation detection)
  useLayoutEffect(() => {
    if (!containerRef.current) return
    // Do something with the ref
  }, [containerRef])

  return (
    <ReshapedText
      attributes={{
        ...props.attributes,
        ...tooltipAttributes,
      }}
      {...props}
    >
      {children}
    </ReshapedText>
  )
}

// Step 2: Main component passes tooltipAttributes to internal component
export const Text = <As extends keyof React.JSX.IntrinsicElements = 'div'>({
  ...props
}: TextProps<As>) => {
  return (
    <Tooltip text="...">
      {tooltipAttributes => (
        <TextWithAttributes
          tooltipAttributes={tooltipAttributes}
          {...props}
        />
      )}
    </Tooltip>
  )
}
```

**Why this pattern is necessary:**
- The Tooltip component provides `tooltipAttributes` through its render prop
- These attributes include the ref that the Tooltip needs to position itself
- If you try to access `attributes?.ref` before it's merged with `tooltipAttributes`, you won't get the Tooltip's ref
- The internal component receives the combined `tooltipAttributes` and can access the ref correctly

**When to use this pattern:**
- When your component needs to access the ref for internal logic (truncation detection, measurements, etc.)
- When you need to work with tooltip attributes AND manage internal state based on the DOM element
- When building advanced features that require DOM access

**Real-world examples:**
- [Button.tsx](components/Button.tsx) - Uses `ButtonWithAttributes` to handle tooltip attributes
- [Text.tsx](components/Text.tsx) - Uses `TextWithAttributes` to access ref for truncation detection

## Creating "Special" Component Pages

**Special pages** are component pages that document custom enhancements or modifications made to Reshaped components. These pages get a sparkles emoji (✨) in the navigation to indicate they contain custom functionality.

### When to Create a Special Page

Create a special page when you've added custom functionality to a component:
- Built-in tooltip support (like Button)
- Custom hover/focus states (like Button, NumberField)
- Automatic truncation detection (like Text)
- Modified default props or behavior
- Custom CSS enhancements via CSS modules

### Structure of a Special Page

**CRITICAL: Custom enhancements MUST come FIRST, before standard Reshaped documentation.**

Special pages follow this pattern (see [TextAreaPage.tsx](views/TextAreaPage.tsx), [TextPage.tsx](views/TextPage.tsx)):

```tsx
export function ComponentPage() {
  return (
    <View padding={4} gap={4}>
      {/* 1. Component title only */}
      <Text variant="title-1">Component Name</Text>

      {/* 2. CUSTOM ENHANCEMENTS SECTION - ALWAYS FIRST */}
      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            Brief overview of custom functionality added to this component:
          </Text>
        </View>

        {/* 3. Document each enhancement */}
        <View gap={3}>
          <Text variant="body-2" weight="medium">1. Enhancement Name</Text>
          <View gap={2}>
            {/* Bullet points explaining the enhancement */}
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Key feature or benefit
                </Text>
              </View>
            </View>
          </View>

          {/* Examples section */}
          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Example Category</Text>
              <Card padding={4}>
                {/* Live interactive examples */}
              </Card>
            </View>
          </View>
        </View>

        {/* 4. Props API (as enhancement #2) */}
        <View gap={3}>
          <Text variant="body-2" weight="medium">2. Props API</Text>
          <Card padding={4}>
            <View gap={3}>
              <View gap={1}>
                <Text variant="body-2" weight="medium">propName?: Type</Text>
                <Text variant="body-2" color="neutral-faded">
                  Description of prop, default value, and usage.
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </View>

      {/* 5. STANDARD RESHAPED PROPS - ALWAYS LAST */}
      <View gap={4} paddingTop={4}>
        <View gap={2}>
          <Text variant="title-2">Standard Reshaped Props</Text>
          <Text variant="body-2" color="neutral-faded">
            For complete Reshaped documentation, see Reshaped docs or Observe Storybook
          </Text>
        </View>

        {/* Brief examples of standard functionality */}
        <View gap={3}>
          <Text variant="body-2" weight="medium">Variants</Text>
          <Card padding={4}>
            {/* Concise examples */}
          </Card>
        </View>
      </View>
    </View>
  )
}
```

### Information Hierarchy

**Typography/Heading Levels:**
- `title-1` - Component name, main section headers ("Custom Enhancements", "Standard Reshaped Props")
- `title-2` - Section headers within main sections
- `body-2 weight="medium"` - Enhancement numbers, subsection titles, example categories
- `body-2` - Regular body text, explanations
- `body-2 color="neutral-faded"` - Helper text, descriptions, bullet points
- `caption-1 color="neutral-faded"` - Labels, small helper text

### Adding the Sparkles Emoji to Navigation

After creating a special page, update [app/navigationConfig.tsx](app/navigationConfig.tsx):

```tsx
import { Sparkles } from 'lucide-react'

export const reshapedComponents: NavItem[] = [
  // ... other components
  {
    key: 'componentname',
    label: (
      <span className="flex items-center gap-1">
        ComponentName <Sparkles size={14} />
      </span>
    ),
  },
  // ... more components
]
```

### Documentation Best Practices

1. **Start with custom enhancements** - Show what we've added beyond Reshaped FIRST
2. **Clearly separate standard functionality** - Use `paddingTop={4}` and a new title-2 heading
3. **Number each enhancement** - Makes it easy to reference specific features
4. **Provide context** - Explain why the enhancement exists, not just what it does
5. **Show multiple examples** - Demonstrate different use cases and edge cases
6. **Document the API** - List all new props with types and descriptions
7. **Explain technical details** - Help other developers understand the implementation
8. **Use interactive examples** - Let users try the features directly on the page

### Examples of Special Pages

- **[ButtonPage.tsx](views/ButtonPage.tsx)** - Built-in tooltip API + modified hover/focus states
- **[NumberFieldPage.tsx](views/NumberFieldPage.tsx)** - Pseudo-element borders + enhanced hover + persistent error state
- **[TextPage.tsx](views/TextPage.tsx)** - Automatic truncation tooltips with ResizeObserver detection
- **[TextFieldPage.tsx](views/TextFieldPage.tsx)** - Custom size defaults and enhanced states
- **[TextAreaPage.tsx](views/TextAreaPage.tsx)** - Custom size defaults and enhanced states
- **[SelectPage.tsx](views/SelectPage.tsx)** - Custom size defaults and wrapper components
- **[CardPage.tsx](views/CardPage.tsx)** - Enhanced hover states and visual feedback
- **[AutocompletePage.tsx](views/AutocompletePage.tsx)** - Custom size defaults

## Security Best Practices

- Be careful not to introduce security vulnerabilities such as command injection, XSS, SQL injection, and other OWASP top 10 vulnerabilities
- If you notice insecure code, immediately fix it
- Always sanitize user input
- Use appropriate escape functions when rendering dynamic content
