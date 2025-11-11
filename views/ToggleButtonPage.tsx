'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { ToggleButton } from '../components/ToggleButton'
import { Card } from '../components/Card'

export function ToggleButtonPage() {
  const [isChecked, setIsChecked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [isPinned, setIsPinned] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">ToggleButton Component</Text>
      <p className="text-gray-600">Interactive buttons that can be toggled on or off</p>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic (Uncontrolled)</Text>
        <ToggleButton defaultChecked>Toggle Me</ToggleButton>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Controlled</Text>
        <ToggleButton checked={isChecked} onChange={(e) => setIsChecked(e.checked)}>
          {isChecked ? 'Checked' : 'Unchecked'}
        </ToggleButton>
        <p className="text-sm text-gray-600">Current state: {isChecked ? 'ON' : 'OFF'}</p>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Sizes</Text>
        <View direction="row" gap={2} align="center">
          <ToggleButton size="small" defaultChecked>
            Small
          </ToggleButton>
          <ToggleButton size="medium" defaultChecked>
            Medium
          </ToggleButton>
          <ToggleButton size="large" defaultChecked>
            Large
          </ToggleButton>
          <ToggleButton size="xlarge" defaultChecked>
            X-Large
          </ToggleButton>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Selected Colors</Text>
        <View direction="row" gap={2} wrap>
          <ToggleButton defaultChecked selectedColor="neutral">
            Neutral
          </ToggleButton>
          <ToggleButton defaultChecked selectedColor="primary">
            Primary
          </ToggleButton>
          <ToggleButton defaultChecked selectedColor="critical">
            Critical
          </ToggleButton>
          <ToggleButton defaultChecked selectedColor="positive">
            Positive
          </ToggleButton>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Variants</Text>
        <View direction="row" gap={2} wrap>
          <ToggleButton variant="outline" defaultChecked>
            Outline (Default)
          </ToggleButton>
          <ToggleButton variant="solid" defaultChecked>
            Solid
          </ToggleButton>
          <ToggleButton variant="faded" defaultChecked>
            Faded
          </ToggleButton>
          <ToggleButton variant="ghost" defaultChecked>
            Ghost
          </ToggleButton>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Icons</Text>
        <View direction="row" gap={2} wrap>
          <ToggleButton
            defaultChecked
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            }
          >
            Favorite
          </ToggleButton>
          <ToggleButton
            defaultChecked
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" x2="12" y1="5" y2="19" />
                <line x1="5" x2="19" y1="12" y2="12" />
              </svg>
            }
          >
            Add
          </ToggleButton>
          <ToggleButton
            defaultChecked
            endIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            }
          >
            Next
          </ToggleButton>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Icon Only</Text>
        <View direction="row" gap={2}>
          <ToggleButton
            defaultChecked
            attributes={{ 'aria-label': 'Like' }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            }
          />
          <ToggleButton
            defaultChecked
            attributes={{ 'aria-label': 'Bookmark' }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            }
          />
          <ToggleButton
            defaultChecked
            attributes={{ 'aria-label': 'Pin' }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" x2="12" y1="17" y2="22" />
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
              </svg>
            }
          />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">States</Text>
        <View direction="row" gap={2}>
          <ToggleButton disabled>Disabled</ToggleButton>
          <ToggleButton disabled defaultChecked>
            Disabled Checked
          </ToggleButton>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Interactive Examples</Text>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" gap={2} align="center">
              <ToggleButton
                checked={isFavorited}
                onChange={(e) => setIsFavorited(e.checked)}
                selectedColor="critical"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                }
              >
                {isFavorited ? 'Favorited' : 'Favorite'}
              </ToggleButton>
              <span className="text-sm text-gray-600">
                {isFavorited ? 'Added to favorites' : 'Not favorited'}
              </span>
            </View>

            <View direction="row" gap={2} align="center">
              <ToggleButton
                checked={isPinned}
                onChange={(e) => setIsPinned(e.checked)}
                selectedColor="primary"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" x2="12" y1="17" y2="22" />
                    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
                  </svg>
                }
              >
                {isPinned ? 'Pinned' : 'Pin'}
              </ToggleButton>
              <span className="text-sm text-gray-600">
                {isPinned ? 'Item is pinned' : 'Not pinned'}
              </span>
            </View>

            <View direction="row" gap={2} align="center">
              <ToggleButton
                checked={isMuted}
                onChange={(e) => setIsMuted(e.checked)}
                selectedColor="neutral"
                icon={
                  isMuted ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 5 6 9H2v6h4l5 4V5ZM22 9l-6 6M16 9l6 6" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 5 6 9H2v6h4l5 4V5ZM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )
                }
              >
                {isMuted ? 'Muted' : 'Unmuted'}
              </ToggleButton>
              <span className="text-sm text-gray-600">
                {isMuted ? 'Sound is off' : 'Sound is on'}
              </span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toolbar Example</Text>
        <Card padding={4}>
          <View direction="row" gap={2} wrap>
            <ToggleButton
              size="small"
              attributes={{ 'aria-label': 'Bold' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6zM6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                </svg>
              }
            />
            <ToggleButton
              size="small"
              attributes={{ 'aria-label': 'Italic' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" x2="10" y1="4" y2="4" />
                  <line x1="14" x2="5" y1="20" y2="20" />
                  <line x1="15" x2="9" y1="4" y2="20" />
                </svg>
              }
            />
            <ToggleButton
              size="small"
              attributes={{ 'aria-label': 'Underline' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M4 21h16" />
                </svg>
              }
            />
            <View width="1px" height="24px" className="bg-gray-300" />
            <ToggleButton
              size="small"
              attributes={{ 'aria-label': 'Align Left' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                  <line x1="17" x2="3" y1="18" y2="18" />
                </svg>
              }
            />
            <ToggleButton
              size="small"
              attributes={{ 'aria-label': 'Align Center' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="17" x2="7" y1="12" y2="12" />
                  <line x1="19" x2="5" y1="18" y2="18" />
                </svg>
              }
            />
            <ToggleButton
              size="small"
              attributes={{ 'aria-label': 'Align Right' }}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                  <line x1="21" x2="7" y1="18" y2="18" />
                </svg>
              }
            />
          </View>
        </Card>
      </View>
    </View>
  )
}
