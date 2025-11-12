'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import {
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Users,
  ShoppingCart,
  Eye,
} from 'lucide-react'

export function CardPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedItems)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedItems(newLiked)
  }

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Card Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The Card component includes the following customizations to improve visual feedback and usability:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">Modified Hover, Focus & Selected States</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Replaced background highlight overlay with border and shadow changes
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Hover state shows highlighted border color and raised shadow elevation
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Selected state uses primary border (2px) for clear visual indication
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Focus state matches selected state for consistent keyboard navigation
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Border is rendered on pseudo-element to avoid conflicts with card shadows
                </Text>
              </View>
            </View>
          </View>

          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Hover Examples</Text>
              <View direction="row" gap={3} wrap>
                <Card padding={4} onClick={() => console.log('Hover card clicked')}>
                  <View gap={2}>
                    <Text variant="title-3">Hover Over Me</Text>
                    <Text variant="body-2" color="neutral-faded">
                      Notice the border darkens and shadow elevates
                    </Text>
                  </View>
                </Card>
                <Card padding={4} elevated onClick={() => console.log('Elevated hover clicked')}>
                  <View gap={2}>
                    <Text variant="title-3">Elevated Card</Text>
                    <Text variant="body-2" color="neutral-faded">
                      Works with elevated cards too
                    </Text>
                  </View>
                </Card>
              </View>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">Selected Examples</Text>
              <View direction="row" gap={3} wrap>
                {['option1', 'option2', 'option3'].map(option => (
                  <Card
                    key={option}
                    padding={4}
                    selected={selectedCard === option}
                    onClick={() => setSelectedCard(option)}
                  >
                    <View gap={2}>
                      <Text variant="title-3">Option {option.slice(-1)}</Text>
                      <Text variant="body-2" color="neutral-faded">
                        Click to select
                      </Text>
                    </View>
                  </Card>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Product Cards</Text>
        <Text variant="body-2" color="neutral-faded">
          Click on a product card to select it
        </Text>
        <View direction="row" gap={3} wrap>
          <Card
            padding={0}
            elevated
            selected={selectedProduct === 'product1'}
            onClick={() =>
              setSelectedProduct(selectedProduct === 'product1' ? null : 'product1')
            }
          >
            <View gap={0}>
              <View
                height={40}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Text color="neutral-faded">
                  <ShoppingCart size={48} />
                </Text>
              </View>
              <View padding={4} gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="title-3">Product Name</Text>
                  <Badge color="primary">New</Badge>
                </View>
                <Text variant="body-2" color="neutral-faded">
                  High quality product with great features
                </Text>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="featured-3" weight="bold">$99.99</Text>
                  <Button
                    variant="solid"
                    color="primary"
                    size="small"
                    onClick={e => {
                      e.stopPropagation()
                      console.log('Add to cart: Product Name')
                    }}
                  >
                    Add to Cart
                  </Button>
                </View>
              </View>
            </View>
          </Card>

          <Card
            padding={0}
            // elevated
            selected={selectedProduct === 'product2'}
            onClick={() =>
              setSelectedProduct(selectedProduct === 'product2' ? null : 'product2')
            }
          >
            <View gap={0}>
              <View
                height={40}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Text color="neutral-faded">
                  <ShoppingCart size={48} />
                </Text>
              </View>
              <View padding={4} gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="title-3">
                    Another Product
                  </Text>
                  <Badge color="warning">Sale</Badge>
                </View>
                <Text variant="body-2" color="neutral-faded">
                  Amazing features at a discounted price
                </Text>
                <View direction="row" justify="space-between" align="center">
                  <View gap={1}>
                    <Text variant="featured-3" weight="bold">$79.99</Text>
                    <Text variant="body-2" color="neutral-faded">
                      <s>$99.99</s>
                    </Text>
                  </View>
                  <Button
                    variant="solid"
                    color="primary"
                    size="small"
                    onClick={e => {
                      e.stopPropagation()
                      console.log('Add to cart: Another Product')
                    }}
                  >
                    Add to Cart
                  </Button>
                </View>
              </View>
            </View>
          </Card>

          <Card
            padding={0}
            elevated
            selected={selectedProduct === 'product3'}
            onClick={() =>
              setSelectedProduct(selectedProduct === 'product3' ? null : 'product3')
            }
          >
            <View gap={0}>
              <View
                height={40}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Text color="neutral-faded">
                  <ShoppingCart size={48} />
                </Text>
              </View>
              <View padding={4} gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="title-3">
                    Premium Product
                  </Text>
                  <Badge color="positive">Best Seller</Badge>
                </View>
                <Text variant="body-2" color="neutral-faded">Top-rated product loved by customers</Text>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="featured-3" weight="bold">$149.99</Text>
                  <Button
                    variant="solid"
                    color="primary"
                    size="small"
                    onClick={e => {
                      e.stopPropagation()
                      console.log('Add to cart: Premium Product')
                    }}
                  >
                    Add to Cart
                  </Button>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">
          Social Media Cards
        </Text>
        <View gap={3}>
          <Card padding={4} elevated>
            <View gap={3}>
              <View direction="row" gap={3} align="center">
                <Avatar initials="JD" color="primary" />
                <View gap={1}>
                  <Text variant="body-2" weight="medium">John Doe</Text>
                  <View direction="row" gap={2} align="center">
                    <Text color="neutral-faded">
                      <Clock size={14} />
                    </Text>
                    <Text variant="body-2" color="neutral-faded">2 hours ago</Text>
                  </View>
                </View>
              </View>
              <Text variant="body-2">
                Just launched my new project! Check it out and let me know what you think.
              </Text>
              <View
                height={48}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Text color="neutral-faded">
                  <Eye size={32} />
                </Text>
              </View>
              <View direction="row" gap={4}>
                <Button
                  variant="ghost"
                  icon={Heart}
                  color={likedItems.has('post1') ? 'critical' : 'neutral'}
                  onClick={() => toggleLike('post1')}
                >
                  {likedItems.has('post1') ? '124' : '123'}
                </Button>
                <Button variant="ghost" icon={MessageCircle}>
                  45
                </Button>
                <Button variant="ghost" icon={Share2}>
                  12
                </Button>
              </View>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={3}>
              <View direction="row" gap={3} align="center">
                <Avatar initials="AS" color="positive" />
                <View gap={1}>
                  <Text variant="body-2" weight="medium">Alice Smith</Text>
                  <View direction="row" gap={2} align="center">
                    <Text color="neutral-faded">
                      <Clock size={14} />
                    </Text>
                    <Text variant="body-2" color="neutral-faded">5 hours ago</Text>
                  </View>
                </View>
              </View>
              <Text variant="body-2">Beautiful sunset at the beach today!</Text>
              <View
                height={48}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Text color="neutral-faded">
                  <Eye size={32} />
                </Text>
              </View>
              <View direction="row" gap={4}>
                <Button
                  variant="ghost"
                  icon={Heart}
                  color={likedItems.has('post2') ? 'critical' : 'neutral'}
                  onClick={() => toggleLike('post2')}
                >
                  {likedItems.has('post2') ? '257' : '256'}
                </Button>
                <Button variant="ghost" icon={MessageCircle}>
                  38
                </Button>
                <Button variant="ghost" icon={Share2}>
                  22
                </Button>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">
          Event Cards
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={4} elevated onClick={() => console.log('Event clicked')}>
            <View gap={3}>
              <View direction="row" justify="space-between" align="center">
                <Badge icon={Calendar} color="primary">
                  Upcoming
                </Badge>
                <Badge color="warning">Featured</Badge>
              </View>
              <Text variant="title-3" weight="medium">
                Tech Conference 2024
              </Text>
              <View gap={2}>
                <View direction="row" gap={2} align="center">
                  <Text color="neutral-faded">
                    <Calendar size={16} />
                  </Text>
                  <Text variant="body-2" color="neutral-faded">March 15, 2024</Text>
                </View>
                <View direction="row" gap={2} align="center">
                  <Text color="neutral-faded">
                    <MapPin size={16} />
                  </Text>
                  <Text variant="body-2" color="neutral-faded">San Francisco, CA</Text>
                </View>
                <View direction="row" gap={2} align="center">
                  <Text color="neutral-faded">
                    <Users size={16} />
                  </Text>
                  <Text variant="body-2" color="neutral-faded">500+ attendees</Text>
                </View>
              </View>
              <Button variant="solid" color="primary" fullWidth>
                Register Now
              </Button>
            </View>
          </Card>

          <Card padding={4} elevated onClick={() => console.log('Webinar clicked')}>
            <View gap={3}>
              <View direction="row" justify="space-between" align="center">
                <Badge icon={Calendar} color="positive">
                  This Week
                </Badge>
              </View>
              <Text variant="title-3" weight="medium">
                Design Systems Webinar
              </Text>
              <View gap={2}>
                <View direction="row" gap={2} align="center">
                  <Text color="neutral-faded">
                    <Calendar size={16} />
                  </Text>
                  <Text variant="body-2" color="neutral-faded">March 12, 2024</Text>
                </View>
                <View direction="row" gap={2} align="center">
                  <Text color="neutral-faded">
                    <Clock size={16} />
                  </Text>
                  <Text variant="body-2" color="neutral-faded">2:00 PM - 3:30 PM</Text>
                </View>
                <View direction="row" gap={2} align="center">
                  <Text color="neutral-faded">
                    <Users size={16} />
                  </Text>
                  <Text variant="body-2" color="neutral-faded">120 registered</Text>
                </View>
              </View>
              <Button variant="solid" color="primary" fullWidth>
                Join Webinar
              </Button>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">
          Stats Cards
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={4} elevated>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <Text variant="body-2" color="neutral-faded">Total Revenue</Text>
                <Text color="positive">
                  <TrendingUp size={20} />
                </Text>
              </View>
              <Text variant="featured-1" weight="bold">$45,231</Text>
              <View direction="row" gap={2} align="center">
                <Badge color="positive" size="small">
                  +12.5%
                </Badge>
                <Text variant="body-2" color="neutral-faded">from last month</Text>
              </View>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <Text variant="body-2" color="neutral-faded">Active Users</Text>
                <Text color="primary">
                  <Users size={20} />
                </Text>
              </View>
              <Text variant="featured-1" weight="bold">2,345</Text>
              <View direction="row" gap={2} align="center">
                <Badge color="positive" size="small">
                  +8.2%
                </Badge>
                <Text variant="body-2" color="neutral-faded">from last week</Text>
              </View>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <Text variant="body-2" color="neutral-faded">Avg. Rating</Text>
                <Text color="warning">
                  <Star size={20} />
                </Text>
              </View>
              <Text variant="featured-1" weight="bold">4.8</Text>
              <View direction="row" gap={2} align="center">
                <Badge color="neutral" size="small">
                  +0.3
                </Badge>
                <Text variant="body-2" color="neutral-faded">from last month</Text>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">
          Different Padding Sizes
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={2}>
            <Text variant="body-2">Padding: 2</Text>
          </Card>
          <Card padding={4}>
            <Text variant="body-2">Padding: 4</Text>
          </Card>
          <Card padding={6}>
            <Text variant="body-2">Padding: 6</Text>
          </Card>
          <Card padding={8}>
            <Text variant="body-2">Padding: 8</Text>
          </Card>
        </View>
      </View>
    </View>
  )
}
