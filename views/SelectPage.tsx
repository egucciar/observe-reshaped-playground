'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Select } from '../components/Select'
import { Combobox } from '../components/Combobox'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Globe, MapPin, User, Palette, Settings } from 'lucide-react'
import ComboboxMultipleExpandableDemo from '../components/shadcn-studio/combobox/combobox-11'
import { ExpandableMultiSelect } from '../components/ExpandableMultiSelect'

export function SelectPage() {
  const [country, setCountry] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [priority, setPriority] = useState('')

  // Combobox state
  const [comboCountry, setComboCountry] = useState('')
  const [comboLanguage, setComboLanguage] = useState('')
  const [comboColor, setComboColor] = useState('')

  // ExpandableMultiSelect state
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['react', 'nextjs'])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

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

      {/* Combobox Examples */}
      <View gap={4} paddingTop={8} attributes={{ style: { borderTop: '1px solid var(--rs-color-border-neutral)' } }}>
        <Text variant="title-1">Combobox Component (shadcn/ui)</Text>

        <View gap={2}>
          <Text variant="title-2">Overview</Text>
          <Text variant="body-2" color="neutral-faded">
            The Combobox component is built using shadcn/ui components (Command + Popover) and provides a searchable dropdown similar to Select, but with different styling and behavior.
          </Text>
        </View>

        <View gap={3}>
          <Text variant="title-2">Basic Combobox</Text>
          <Card padding={4}>
            <View maxWidth="400px">
              <Combobox
                name="combo-basic"
                placeholder="Select a country..."
                value={comboCountry}
                onChange={event => setComboCountry(event.value)}
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'au', label: 'Australia' },
                  { value: 'de', label: 'Germany' },
                  { value: 'fr', label: 'France' },
                  { value: 'jp', label: 'Japan' },
                ]}
              />
            </View>
            {comboCountry && (
              <View paddingTop={3}>
                <Badge color="primary">Selected: {comboCountry}</Badge>
              </View>
            )}
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">With Start Icon</Text>
          <Card padding={4}>
            <View maxWidth="400px" gap={3}>
              <Combobox
                name="combo-language"
                placeholder="Select language..."
                startSlot={<Globe size={16} />}
                value={comboLanguage}
                onChange={event => setComboLanguage(event.value)}
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French' },
                  { value: 'de', label: 'German' },
                  { value: 'ja', label: 'Japanese' },
                  { value: 'zh', label: 'Chinese' },
                  { value: 'ar', label: 'Arabic' },
                ]}
              />

              <Combobox
                name="combo-color"
                placeholder="Select a color..."
                startSlot={<Palette size={16} />}
                value={comboColor}
                onChange={event => setComboColor(event.value)}
                options={[
                  { value: 'red', label: 'Red' },
                  { value: 'orange', label: 'Orange' },
                  { value: 'yellow', label: 'Yellow' },
                  { value: 'green', label: 'Green' },
                  { value: 'blue', label: 'Blue' },
                  { value: 'purple', label: 'Purple' },
                  { value: 'pink', label: 'Pink' },
                ]}
              />
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Different Sizes</Text>
          <Card padding={4}>
            <View maxWidth="400px" gap={3}>
              <View gap={2}>
                <span className="text-sm font-semibold">Small (Default)</span>
                <Combobox
                  size="small"
                  placeholder="Small combobox..."
                  options={[
                    { value: 'xs', label: 'Extra Small' },
                    { value: 's', label: 'Small' },
                    { value: 'm', label: 'Medium' },
                  ]}
                />
              </View>

              <View gap={2}>
                <span className="text-sm font-semibold">Medium</span>
                <Combobox
                  size="medium"
                  placeholder="Medium combobox..."
                  options={[
                    { value: 'xs', label: 'Extra Small' },
                    { value: 's', label: 'Small' },
                    { value: 'm', label: 'Medium' },
                  ]}
                />
              </View>

              <View gap={2}>
                <span className="text-sm font-semibold">Large</span>
                <Combobox
                  size="large"
                  placeholder="Large combobox..."
                  options={[
                    { value: 'xs', label: 'Extra Small' },
                    { value: 's', label: 'Small' },
                    { value: 'm', label: 'Medium' },
                  ]}
                />
              </View>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Disabled State</Text>
          <Card padding={4}>
            <View maxWidth="400px" gap={3}>
              <Combobox
                disabled
                placeholder="This combobox is disabled..."
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />

              <Combobox
                disabled
                value="selected"
                options={[
                  { value: 'selected', label: 'Selected and Disabled' },
                  { value: 'other', label: 'Other Option' },
                ]}
              />
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Key Differences from Select</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Uses Radix UI primitives (Popover) instead of Reshaped
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Built with cmdk for command palette-style search functionality
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Options passed as array of objects instead of children components
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Integrates with FieldGroup context for automatic sizing
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Uses Tailwind CSS for styling instead of CSS modules
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Advanced Multi-Select Combobox */}
      <View gap={4} paddingTop={8} attributes={{ style: { borderTop: '1px solid var(--rs-color-border-neutral)' } }}>
        <Text variant="title-1">Advanced Multi-Select Combobox (shadcn-studio)</Text>

        <View gap={2}>
          <Text variant="title-2">Overview</Text>
          <Text variant="body-2" color="neutral-faded">
            This is an advanced multi-select combobox with expandable badges, built using shadcn/ui components. It features:
          </Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Multiple selection with badges</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Expandable/collapsible badge display</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Individual badge removal</Text>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">Search and filter functionality</Text>
            </View>
          </View>
        </View>

        <View gap={3}>
          <Text variant="title-2">Demo</Text>
          <Card padding={4}>
            <ComboboxMultipleExpandableDemo />
          </Card>
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
                  Reshaped Popover instead of Radix UI Popover
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  All Reshaped design tokens (bg-elevation-base, border-neutral-faded, shadow-raised, etc.)
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
                  Expand/collapse button to show/hide additional selections
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
