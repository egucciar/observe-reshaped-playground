'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Select } from '../components/Select'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Globe, MapPin, User, Palette, Settings } from 'lucide-react'
import { ExpandableMultiSelect } from '../components/ExpandableMultiSelect'

export function SelectPage() {
  const [country, setCountry] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [priority, setPriority] = useState('')

  // ExpandableMultiSelect state
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['react', 'nextjs'])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [expandModeFrameworks, setExpandModeFrameworks] = useState<string[]>(['react', 'nextjs', 'vue', 'angular', 'svelte'])
  const [popoverModeFrameworks, setPopoverModeFrameworks] = useState<string[]>(['react', 'nextjs', 'vue', 'angular', 'svelte'])
  const [manyExpandMode, setManyExpandMode] = useState<string[]>([
    'react', 'nextjs', 'angular', 'vue', 'svelte', 'solidjs', 'qwik', 'astro',
    'remix', 'django', 'flask', 'express', 'fastapi', 'spring', 'laravel',
    'rails', 'phoenix', 'fiber', 'gin', 'echo'
  ])
  const [manyPopoverMode, setManyPopoverMode] = useState<string[]>([
    'react', 'nextjs', 'angular', 'vue', 'svelte', 'solidjs', 'qwik', 'astro',
    'remix', 'django', 'flask', 'express', 'fastapi', 'spring', 'laravel',
    'rails', 'phoenix', 'fiber', 'gin', 'echo'
  ])

  // Size comparison states
  const [smallFrameworks, setSmallFrameworks] = useState<string[]>(['react', 'nextjs', 'vue', 'angular', 'svelte'])
  const [mediumFrameworks, setMediumFrameworks] = useState<string[]>(['react', 'nextjs', 'vue', 'angular', 'svelte'])
  const [largeFrameworks, setLargeFrameworks] = useState<string[]>(['react', 'nextjs', 'vue', 'angular', 'svelte'])

  // Crowded layout states
  const [crowdedFrameworks, setCrowdedFrameworks] = useState<string[]>([])
  const [crowdedLanguages, setCrowdedLanguages] = useState<string[]>([])
  const [crowdedOptions, setCrowdedOptions] = useState<string[]>([])
  const [crowdedCategories, setCrowdedCategories] = useState<string[]>([])
  const [crowdedTags, setCrowdedTags] = useState<string[]>([])
  const [crowdedStatus, setCrowdedStatus] = useState<string[]>([])

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Select Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The Select component includes the following customizations:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">Architecture: Only Select is Customized (Temporary)</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Base Select component is a plain re-export with no customizations
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Select receives custom styling, default size="small", and auto-propagates size to children
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  We are unlikely to use base Select since we always want to give users the ability to filter dropdown options, even when there are few options
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Long-term: Select has limitations (see{' '}
                  <a
                    href="https://github.com/reshaped-ui/reshaped/issues/497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    reshaped#497
                  </a>
                  ) and will be replaced with a fully custom implementation
                </Text>
              </View>
            </View>
          </View>

          <View paddingTop={2}>
            <Text variant="body-2" weight="medium">Default Size Strategy</Text>
          </View>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Select defaults to size="small" for consistent compact UI
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Children (Select.Option) automatically inherit size="small" unless explicitly overridden
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Implementation uses React.Children.map to clone children and inject size prop
                </Text>
              </View>
            </View>
          </View>

          <View paddingTop={2}>
            <Text variant="body-2" weight="medium">Enhanced Hover State</Text>
          </View>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Aligned with Card component for consistent hover behavior across components
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Shows highlighted border color on hover (default Reshaped has no hover change)
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Disabled for disabled and error states to avoid conflicts
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Error state uses native Reshaped styling (no custom modifications)
                </Text>
              </View>
            </View>
          </View>

          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Hover Example</Text>
              <Select name="hover-example" placeholder="Hover over me to see the highlighted border">
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
                <Select.Option value="option3">Option 3</Select.Option>
              </Select>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">Error State Example (Native Styling)</Text>
              <Text variant="caption-1" color="neutral-faded">
                Error state uses default Reshaped styling for demonstration
              </Text>
              <Select
                name="error-example"
                placeholder="Please select a valid option"
                hasError
              >
                <Select.Option value="invalid">Invalid Option</Select.Option>
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
              </Select>
              <Text variant="caption-1" color="critical">
                Please select a valid option
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Basic Select</Text>
        <Card padding={4}>
          <View maxWidth="400px">
            <Select name="basic" placeholder="Choose an option...">
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
              <Select.Option value="option4">Option 4</Select.Option>
            </Select>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>With Label</h2>
        <Card padding={4}>
          <View maxWidth="400px">
            <Select
              name="labeled"
              placeholder="Select a country..."
              value={country}
              onChange={event => setCountry(event.value)}
            >
              <Select.Option value="us">United States</Select.Option>
              <Select.Option value="uk">United Kingdom</Select.Option>
              <Select.Option value="ca">Canada</Select.Option>
              <Select.Option value="au">Australia</Select.Option>
              <Select.Option value="de">Germany</Select.Option>
              <Select.Option value="fr">France</Select.Option>
              <Select.Option value="jp">Japan</Select.Option>
            </Select>
          </View>
          {country && (
            <View paddingTop={3}>
              <Badge color="primary">Selected: {country}</Badge>
            </View>
          )}
        </Card>
      </View>

      <View gap={3}>
        <h2>With Start Icon</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select
              name="location"
              placeholder="Select location..."
              startSlot={<MapPin size={16} />}
            >
              <Select.Option value="ny">New York</Select.Option>
              <Select.Option value="la">Los Angeles</Select.Option>
              <Select.Option value="chicago">Chicago</Select.Option>
              <Select.Option value="houston">Houston</Select.Option>
              <Select.Option value="phoenix">Phoenix</Select.Option>
            </Select>

            <Select
              name="language"
              placeholder="Select language..."
              startSlot={<Globe size={16} />}
            >
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="es">Spanish</Select.Option>
              <Select.Option value="fr">French</Select.Option>
              <Select.Option value="de">German</Select.Option>
              <Select.Option value="ja">Japanese</Select.Option>
            </Select>

            <Select
              name="user"
              placeholder="Select user..."
              startSlot={<User size={16} />}
            >
              <Select.Option value="alice">Alice Johnson</Select.Option>
              <Select.Option value="bob">Bob Smith</Select.Option>
              <Select.Option value="carol">Carol Davis</Select.Option>
              <Select.Option value="david">David Wilson</Select.Option>
            </Select>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Different Sizes</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <View gap={2}>
              <span className="text-sm font-semibold">Small</span>
              <Select name="size-small" placeholder="Small select..." size="small">
                <Select.Option value="xs">Extra Small</Select.Option>
                <Select.Option value="s">Small</Select.Option>
                <Select.Option value="m">Medium</Select.Option>
              </Select>
            </View>

            <View gap={2}>
              <span className="text-sm font-semibold">Medium (Default)</span>
              <Select name="size-medium" placeholder="Medium select...">
                <Select.Option value="xs">Extra Small</Select.Option>
                <Select.Option value="s">Small</Select.Option>
                <Select.Option value="m">Medium</Select.Option>
              </Select>
            </View>

            <View gap={2}>
              <span className="text-sm font-semibold">Large</span>
              <Select name="size-large" placeholder="Large select..." size="large">
                <Select.Option value="xs">Extra Small</Select.Option>
                <Select.Option value="s">Small</Select.Option>
                <Select.Option value="m">Medium</Select.Option>
              </Select>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Disabled State</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select
              name="disabled"
              placeholder="This select is disabled..."
              disabled
            >
              <Select.Option value="1">Option 1</Select.Option>
              <Select.Option value="2">Option 2</Select.Option>
            </Select>

            <Select name="disabled-value" value="selected" disabled>
              <Select.Option value="selected">Selected and Disabled</Select.Option>
              <Select.Option value="other">Other Option</Select.Option>
            </Select>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>With Grouped Options</h2>
        <Card padding={4}>
          <View maxWidth="400px">
            <Select
              name="grouped"
              placeholder="Select a color..."
              value={color}
              onChange={event => setColor(event.value)}
              startSlot={<Palette size={16} />}
            >
              <Select.Option value="red">Red</Select.Option>
              <Select.Option value="orange">Orange</Select.Option>
              <Select.Option value="yellow">Yellow</Select.Option>
              <Select.Option value="green">Green</Select.Option>
              <Select.Option value="blue">Blue</Select.Option>
              <Select.Option value="purple">Purple</Select.Option>
              <Select.Option value="pink">Pink</Select.Option>
            </Select>
          </View>
          {color && (
            <View paddingTop={3}>
              <Badge color="primary">Selected color: {color}</Badge>
            </View>
          )}
        </Card>
      </View>

      <View gap={3}>
        <h2>Priority Selector</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select
              name="priority"
              placeholder="Select priority..."
              value={priority}
              onChange={event => setPriority(event.value)}
              startSlot={<Settings size={16} />}
            >
              <Select.Option value="critical">🔴 Critical</Select.Option>
              <Select.Option value="high">🟠 High</Select.Option>
              <Select.Option value="medium">🟡 Medium</Select.Option>
              <Select.Option value="low">🟢 Low</Select.Option>
            </Select>

            {priority && (
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Current Priority:</span>
                <Badge
                  color={
                    priority === 'critical'
                      ? 'critical'
                      : priority === 'high'
                      ? 'warning'
                      : priority === 'medium'
                      ? 'primary'
                      : 'positive'
                  }
                >
                  {priority}
                </Badge>
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>T-Shirt Sizes</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select
              name="tshirt"
              placeholder="Select your size..."
              value={size}
              onChange={event => setSize(event.value)}
            >
              <Select.Option value="xs">XS - Extra Small</Select.Option>
              <Select.Option value="s">S - Small</Select.Option>
              <Select.Option value="m">M - Medium</Select.Option>
              <Select.Option value="l">L - Large</Select.Option>
              <Select.Option value="xl">XL - Extra Large</Select.Option>
              <Select.Option value="xxl">XXL - Double Extra Large</Select.Option>
            </Select>

            {size && (
              <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
                <span className="text-sm">
                  You selected: <strong>{size.toUpperCase()}</strong>
                </span>
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Usage Tips</h2>
        <View gap={2} className="text-sm opacity-80">
          <p>• Click to open the dropdown menu</p>
          <p>• Use arrow keys to navigate through options</p>
          <p>• Press Enter or Space to select the focused option</p>
          <p>• Press Escape to close the dropdown</p>
          <p>• Type to search for options (if searchable)</p>
        </View>
      </View>

      {/* ExpandableMultiSelect Component */}
      <View gap={4} paddingTop={8} attributes={{ style: { borderTop: '1px solid var(--rs-color-border-neutral)' } }}>
        <Text variant="title-1">ExpandableMultiSelect Component</Text>

        <View gap={2}>
          <Text variant="title-2">Overview</Text>
          <Text variant="body-2" color="neutral-faded">
            The ExpandableMultiSelect component combines the Reshaped design system styling with advanced multi-select functionality. It features:
          </Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Multiple selection with Reshaped Badge components</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Expandable/collapsible badge display</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Individual badge removal using onDismiss</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Reshaped Popover with elevation="overlay"</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Full Reshaped design token styling</Text>
            </View>
          </View>
        </View>

        <View gap={3}>
          <Text variant="title-2">Basic Multi-Select</Text>
          <Card padding={4}>
            <View maxWidth="500px">
              <ExpandableMultiSelect
                name="frameworks"
                placeholder="Select frameworks..."
                searchPlaceholder="Search frameworks..."
                size="medium"
                value={selectedFrameworks}
                onChange={event => setSelectedFrameworks(event.value)}
                options={[
                  { value: 'react', label: 'React' },
                  { value: 'nextjs', label: 'Next.js' },
                  { value: 'angular', label: 'Angular' },
                  { value: 'vue', label: 'Vue.js' },
                  { value: 'django', label: 'Django' },
                  { value: 'astro', label: 'Astro' },
                  { value: 'remix', label: 'Remix' },
                  { value: 'svelte', label: 'Svelte' },
                  { value: 'solidjs', label: 'SolidJS' },
                  { value: 'qwik', label: 'Qwik' },
                ]}
              />
            </View>
            {selectedFrameworks.length > 0 && (
              <View paddingTop={3}>
                <Text variant="body-3" color="neutral-faded">
                  Selected: {selectedFrameworks.join(', ')}
                </Text>
              </View>
            )}
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">With Icon & Custom maxShownItems</Text>
          <Card padding={4}>
            <View maxWidth="500px">
              <ExpandableMultiSelect
                name="languages"
                placeholder="Select languages..."
                searchPlaceholder="Search languages..."
                startSlot={<Globe size={16} />}
                value={selectedLanguages}
                onChange={event => setSelectedLanguages(event.value)}
                maxShownItems={3}
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French' },
                  { value: 'de', label: 'German' },
                  { value: 'ja', label: 'Japanese' },
                  { value: 'zh', label: 'Chinese' },
                  { value: 'ar', label: 'Arabic' },
                  { value: 'pt', label: 'Portuguese' },
                  { value: 'ru', label: 'Russian' },
                  { value: 'hi', label: 'Hindi' },
                ]}
              />
            </View>
            {selectedLanguages.length > 0 && (
              <View paddingTop={3}>
                <Text variant="body-3" color="neutral-faded">
                  Selected {selectedLanguages.length} language{selectedLanguages.length !== 1 ? 's' : ''}
                </Text>
              </View>
            )}
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Different Sizes (Side by Side Comparison)</Text>
          <Card padding={4}>
            <View gap={4}>
              <View gap={2}>
                <span className="text-sm font-semibold">Small</span>
                <View direction="row" gap={3} wrap={true}>
                  <View grow={true} className="min-w-0 basis-0">
                    <Select name="size-small-comparison" placeholder="Small select..." size="small">
                      <Select.Option value="react">React</Select.Option>
                      <Select.Option value="nextjs">Next.js</Select.Option>
                      <Select.Option value="vue">Vue.js</Select.Option>
                    </Select>
                  </View>
                  <View grow={true} className="min-w-0 basis-0">
                    <ExpandableMultiSelect
                      name="frameworks-small"
                      placeholder="Select frameworks..."
                      searchPlaceholder="Search frameworks..."
                      size="small"
                      value={smallFrameworks}
                      onChange={event => setSmallFrameworks(event.value)}
                      options={[
                        { value: 'react', label: 'React' },
                        { value: 'nextjs', label: 'Next.js' },
                        { value: 'angular', label: 'Angular' },
                        { value: 'vue', label: 'Vue.js' },
                        { value: 'svelte', label: 'Svelte' },
                      ]}
                    />
                  </View>
                </View>
              </View>

              <View gap={2}>
                <span className="text-sm font-semibold">Medium (Default)</span>
                <View direction="row" gap={3} wrap={true}>
                  <View grow={true} className="min-w-0 basis-0">
                    <Select name="size-medium-comparison" placeholder="Medium select..." size="medium">
                      <Select.Option value="react">React</Select.Option>
                      <Select.Option value="nextjs">Next.js</Select.Option>
                      <Select.Option value="vue">Vue.js</Select.Option>
                    </Select>
                  </View>
                  <View grow={true} className="min-w-0 basis-0">
                    <ExpandableMultiSelect
                      name="frameworks-medium"
                      placeholder="Select frameworks..."
                      searchPlaceholder="Search frameworks..."
                      size="medium"
                      value={mediumFrameworks}
                      onChange={event => setMediumFrameworks(event.value)}
                      options={[
                        { value: 'react', label: 'React' },
                        { value: 'nextjs', label: 'Next.js' },
                        { value: 'angular', label: 'Angular' },
                        { value: 'vue', label: 'Vue.js' },
                        { value: 'svelte', label: 'Svelte' },
                      ]}
                    />
                  </View>
                </View>
              </View>

              <View gap={2}>
                <span className="text-sm font-semibold">Large</span>
                <View direction="row" gap={3} wrap={true}>
                  <View grow={true} className="min-w-0 basis-0">
                    <Select name="size-large-comparison" placeholder="Large select..." size="large">
                      <Select.Option value="react">React</Select.Option>
                      <Select.Option value="nextjs">Next.js</Select.Option>
                      <Select.Option value="vue">Vue.js</Select.Option>
                    </Select>
                  </View>
                  <View grow={true} className="min-w-0 basis-0">
                    <ExpandableMultiSelect
                      name="frameworks-large"
                      placeholder="Select frameworks..."
                      searchPlaceholder="Search frameworks..."
                      size="large"
                      value={largeFrameworks}
                      onChange={event => setLargeFrameworks(event.value)}
                      options={[
                        { value: 'react', label: 'React' },
                        { value: 'nextjs', label: 'Next.js' },
                        { value: 'angular', label: 'Angular' },
                        { value: 'vue', label: 'Vue.js' },
                        { value: 'svelte', label: 'Svelte' },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Very Crowded Layout Example</Text>
          <Text variant="body-2" color="neutral-faded">
            Testing the ExpandableMultiSelect in a crowded layout with 6 small selects side by side. This demonstrates how the component handles limited horizontal space and the 50% expansion on click.
          </Text>
          <Card padding={4}>
            <View direction="row" gap={2} wrap={true}>
              <View grow={true} className="min-w-0 basis-0">
                <ExpandableMultiSelect
                  name="crowded-1"
                  placeholder="Frameworks..."
                  searchPlaceholder="Search..."
                  size="small"
                  value={crowdedFrameworks}
                  onChange={event => setCrowdedFrameworks(event.value)}
                  options={[
                    { value: 'react', label: 'React' },
                    { value: 'nextjs', label: 'Next.js' },
                    { value: 'angular', label: 'Angular' },
                    { value: 'vue', label: 'Vue.js' },
                    { value: 'svelte', label: 'Svelte' },
                  ]}
                />
              </View>
              <View grow={true} className="min-w-0 basis-0">
                <ExpandableMultiSelect
                  name="crowded-2"
                  placeholder="Languages..."
                  searchPlaceholder="Search..."
                  size="small"
                  value={crowdedLanguages}
                  onChange={event => setCrowdedLanguages(event.value)}
                  options={[
                    { value: 'en', label: 'English' },
                    { value: 'es', label: 'Spanish' },
                    { value: 'fr', label: 'French' },
                    { value: 'de', label: 'German' },
                    { value: 'ja', label: 'Japanese' },
                  ]}
                />
              </View>
              <View grow={true} className="min-w-0 basis-0">
                <ExpandableMultiSelect
                  name="crowded-3"
                  placeholder="Options..."
                  searchPlaceholder="Search..."
                  size="small"
                  value={crowdedOptions}
                  onChange={event => setCrowdedOptions(event.value)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                    { value: 'option5', label: 'Option 5' },
                  ]}
                />
              </View>
              <View grow={true} className="min-w-0 basis-0">
                <ExpandableMultiSelect
                  name="crowded-4"
                  placeholder="Categories..."
                  searchPlaceholder="Search..."
                  size="small"
                  value={crowdedCategories}
                  onChange={event => setCrowdedCategories(event.value)}
                  options={[
                    { value: 'cat1', label: 'Category A' },
                    { value: 'cat2', label: 'Category B' },
                    { value: 'cat3', label: 'Category C' },
                    { value: 'cat4', label: 'Category D' },
                    { value: 'cat5', label: 'Category E' },
                  ]}
                />
              </View>
              <View grow={true} className="min-w-0 basis-0">
                <ExpandableMultiSelect
                  name="crowded-5"
                  placeholder="Tags..."
                  searchPlaceholder="Search..."
                  size="small"
                  value={crowdedTags}
                  onChange={event => setCrowdedTags(event.value)}
                  options={[
                    { value: 'tag1', label: 'Tag 1' },
                    { value: 'tag2', label: 'Tag 2' },
                    { value: 'tag3', label: 'Tag 3' },
                    { value: 'tag4', label: 'Tag 4' },
                    { value: 'tag5', label: 'Tag 5' },
                  ]}
                />
              </View>
              <View grow={true} className="min-w-0 basis-0">
                <ExpandableMultiSelect
                  name="crowded-6"
                  placeholder="Status..."
                  searchPlaceholder="Search..."
                  size="small"
                  value={crowdedStatus}
                  onChange={event => setCrowdedStatus(event.value)}
                  options={[
                    { value: 'active', label: 'Active' },
                    { value: 'pending', label: 'Pending' },
                    { value: 'completed', label: 'Completed' },
                    { value: 'archived', label: 'Archived' },
                    { value: 'draft', label: 'Draft' },
                  ]}
                />
              </View>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Overflow Modes</Text>
          <Text variant="body-2" color="neutral-faded">
            The ExpandableMultiSelect supports two overflow modes for handling multiple selections:
          </Text>

          <View gap={4}>
            <View gap={2}>
              <Text variant="title-3">Expand Mode</Text>
              <Text variant="body-2" color="neutral-faded">
                Shows badges inline with a clickable "Show Less" / "+N more" toggle. Inspired by shadcn/ui's expandable combobox pattern.
              </Text>
              <Card padding={4}>
                <View maxWidth="500px">
                  <ExpandableMultiSelect
                    name="expand-mode"
                    placeholder="Select frameworks..."
                    searchPlaceholder="Search frameworks..."
                    size="medium"
                    value={expandModeFrameworks}
                    onChange={event => setExpandModeFrameworks(event.value)}
                    overflowMode="expand"
                    maxShownItems={2}
                    options={[
                      { value: 'react', label: 'React' },
                      { value: 'nextjs', label: 'Next.js' },
                      { value: 'angular', label: 'Angular' },
                      { value: 'vue', label: 'Vue.js' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'solidjs', label: 'SolidJS' },
                      { value: 'qwik', label: 'Qwik' },
                      { value: 'astro', label: 'Astro' },
                      { value: 'remix', label: 'Remix' },
                      { value: 'django', label: 'Django' },
                    ]}
                  />
                </View>
              </Card>
            </View>

            <View gap={2}>
              <Text variant="title-3">Popover Mode (Default)</Text>
              <Text variant="body-2" color="neutral-faded">
                Shows badges with an overflow indicator that displays hidden items in a hover popover. Uses the OverflowList component.
              </Text>
              <Card padding={4}>
                <View maxWidth="500px">
                  <ExpandableMultiSelect
                    name="popover-mode"
                    placeholder="Select frameworks..."
                    searchPlaceholder="Search frameworks..."
                    size="medium"
                    value={popoverModeFrameworks}
                    onChange={event => setPopoverModeFrameworks(event.value)}
                    overflowMode="popover"
                    options={[
                      { value: 'react', label: 'React' },
                      { value: 'nextjs', label: 'Next.js' },
                      { value: 'angular', label: 'Angular' },
                      { value: 'vue', label: 'Vue.js' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'solidjs', label: 'SolidJS' },
                      { value: 'qwik', label: 'Qwik' },
                      { value: 'astro', label: 'Astro' },
                      { value: 'remix', label: 'Remix' },
                      { value: 'django', label: 'Django' },
                    ]}
                  />
                </View>
              </Card>
            </View>
          </View>

          <View gap={2} paddingTop={2}>
            <Text variant="body-2" weight="medium">Mode Comparison</Text>
            <View gap={2}>
              <View direction="row" gap={2} align="start">
                <Text variant="body-2">•</Text>
                <View>
                  <Text variant="body-2" color="neutral-faded">
                    <strong>Expand Mode:</strong> Better for forms where users need to see all selections at once. Allows the input to grow vertically.
                  </Text>
                </View>
              </View>
              <View direction="row" gap={2} align="start">
                <Text variant="body-2">•</Text>
                <View>
                  <Text variant="body-2" color="neutral-faded">
                    <strong>Popover Mode:</strong> Better for compact UIs where vertical space is limited. Keeps input height fixed.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View gap={3}>
          <Text variant="title-2">Many Items Example (20 selections)</Text>
          <Text variant="body-2" color="neutral-faded">
            Demonstrating overflow behavior with many selected items. Compare how each mode handles 20 selections.
          </Text>

          <View gap={4}>
            <View gap={2}>
              <Text variant="title-3">Expand Mode with 20 Items</Text>
              <Text variant="body-2" color="neutral-faded">
                Click "+N more" to expand and see all 20 selections. Notice how it wraps to multiple lines.
              </Text>
              <Card padding={4}>
                <View maxWidth="500px">
                  <ExpandableMultiSelect
                    name="many-expand-mode"
                    placeholder="Select frameworks..."
                    searchPlaceholder="Search frameworks..."
                    size="medium"
                    value={manyExpandMode}
                    onChange={event => setManyExpandMode(event.value)}
                    overflowMode="expand"
                    maxShownItems={3}
                    options={[
                      { value: 'react', label: 'React' },
                      { value: 'nextjs', label: 'Next.js' },
                      { value: 'angular', label: 'Angular' },
                      { value: 'vue', label: 'Vue.js' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'solidjs', label: 'SolidJS' },
                      { value: 'qwik', label: 'Qwik' },
                      { value: 'astro', label: 'Astro' },
                      { value: 'remix', label: 'Remix' },
                      { value: 'django', label: 'Django' },
                      { value: 'flask', label: 'Flask' },
                      { value: 'express', label: 'Express' },
                      { value: 'fastapi', label: 'FastAPI' },
                      { value: 'spring', label: 'Spring' },
                      { value: 'laravel', label: 'Laravel' },
                      { value: 'rails', label: 'Rails' },
                      { value: 'phoenix', label: 'Phoenix' },
                      { value: 'fiber', label: 'Fiber' },
                      { value: 'gin', label: 'Gin' },
                      { value: 'echo', label: 'Echo' },
                    ]}
                  />
                </View>
              </Card>
            </View>

            <View gap={2}>
              <Text variant="title-3">Popover Mode with 20 Items</Text>
              <Text variant="body-2" color="neutral-faded">
                Hover over "+N more" to see hidden items in a popover. The input stays compact.
              </Text>
              <Card padding={4}>
                <View maxWidth="500px">
                  <ExpandableMultiSelect
                    name="many-popover-mode"
                    placeholder="Select frameworks..."
                    searchPlaceholder="Search frameworks..."
                    size="medium"
                    value={manyPopoverMode}
                    onChange={event => setManyPopoverMode(event.value)}
                    overflowMode="popover"
                    options={[
                      { value: 'react', label: 'React' },
                      { value: 'nextjs', label: 'Next.js' },
                      { value: 'angular', label: 'Angular' },
                      { value: 'vue', label: 'Vue.js' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'solidjs', label: 'SolidJS' },
                      { value: 'qwik', label: 'Qwik' },
                      { value: 'astro', label: 'Astro' },
                      { value: 'remix', label: 'Remix' },
                      { value: 'django', label: 'Django' },
                      { value: 'flask', label: 'Flask' },
                      { value: 'express', label: 'Express' },
                      { value: 'fastapi', label: 'FastAPI' },
                      { value: 'spring', label: 'Spring' },
                      { value: 'laravel', label: 'Laravel' },
                      { value: 'rails', label: 'Rails' },
                      { value: 'phoenix', label: 'Phoenix' },
                      { value: 'fiber', label: 'Fiber' },
                      { value: 'gin', label: 'Gin' },
                      { value: 'echo', label: 'Echo' },
                    ]}
                  />
                </View>
              </Card>
            </View>
          </View>
        </View>

        <View gap={3}>
          <Text variant="title-2">Key Features</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Uses Reshaped Badge with onDismiss for individual removal
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Floating UI for precise dropdown positioning
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  All Reshaped design tokens (bg-elevation-overlay, border-neutral-faded, shadow-overlay, etc.)
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Configurable maxShownItems prop (default: 2)
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Two overflow modes: expand (inline toggle) and popover (hover tooltip)
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Configurable size prop (small, medium, large) that syncs badge sizes
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
