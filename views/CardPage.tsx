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
      <Text variant="title-1" className="text-2xl font-bold">
        Card Component
      </Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">
          Basic Cards
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" className="text-lg font-semibold">
                Simple Card
              </Text>
              <p className="text-sm opacity-70">
                This is a basic card with default styling
              </p>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={2}>
              <Text variant="title-3" className="text-lg font-semibold">
                Elevated Card
              </Text>
              <p className="text-sm opacity-70">This card has increased elevation</p>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">
          Clickable Cards
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={4} onClick={() => console.log('Card 1 clicked')}>
            <View gap={2}>
              <Text variant="title-3" className="text-lg font-semibold">
                Interactive Card
              </Text>
              <p className="text-sm opacity-70">Click me to see interaction</p>
            </View>
          </Card>

          <Card padding={4} elevated onClick={() => console.log('Card 2 clicked')}>
            <View gap={2}>
              <Text variant="title-3" className="text-lg font-semibold">
                Elevated Interactive
              </Text>
              <p className="text-sm opacity-70">Elevated and clickable</p>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">
          Selectable Cards
        </Text>
        <View direction="row" gap={3} wrap>
          {['option1', 'option2', 'option3'].map(option => (
            <Card
              key={option}
              padding={4}
              selected={selectedCard === option}
              onClick={() => setSelectedCard(option)}
            >
              <View gap={2}>
                <Text variant="title-3" className="text-lg font-semibold">
                  Option {option.slice(-1)}
                </Text>
                <p className="text-sm opacity-70">Click to select this option</p>
              </View>
            </Card>
          ))}
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">
          Product Cards
        </Text>
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
                <ShoppingCart size={48} className="opacity-30" />
              </View>
              <View padding={4} gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="title-3" className="text-lg font-semibold">
                    Product Name
                  </Text>
                  <Badge color="primary">New</Badge>
                </View>
                <p className="text-sm opacity-70">
                  High quality product with great features
                </p>
                <View direction="row" justify="space-between" align="center">
                  <span className="text-xl font-bold">$99.99</span>
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
                <ShoppingCart size={48} className="opacity-30" />
              </View>
              <View padding={4} gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="title-3" className="text-lg font-semibold">
                    Another Product
                  </Text>
                  <Badge color="warning">Sale</Badge>
                </View>
                <p className="text-sm opacity-70">
                  Amazing features at a discounted price
                </p>
                <View direction="row" justify="space-between" align="center">
                  <View gap={1}>
                    <span className="text-xl font-bold">$79.99</span>
                    <span className="text-sm line-through opacity-50">$99.99</span>
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
                <ShoppingCart size={48} className="opacity-30" />
              </View>
              <View padding={4} gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <Text variant="title-3" className="text-lg font-semibold">
                    Premium Product
                  </Text>
                  <Badge color="positive">Best Seller</Badge>
                </View>
                <p className="text-sm opacity-70">Top-rated product loved by customers</p>
                <View direction="row" justify="space-between" align="center">
                  <span className="text-xl font-bold">$149.99</span>
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
        <Text variant="title-2" className="text-xl font-semibold">
          Social Media Cards
        </Text>
        <View gap={3}>
          <Card padding={4} elevated>
            <View gap={3}>
              <View direction="row" gap={3} align="center">
                <Avatar initials="JD" color="primary" />
                <View gap={1}>
                  <span className="font-semibold">John Doe</span>
                  <View direction="row" gap={2} align="center">
                    <Clock size={14} className="opacity-50" />
                    <span className="text-sm opacity-70">2 hours ago</span>
                  </View>
                </View>
              </View>
              <p>
                Just launched my new project! Check it out and let me know what you think.
              </p>
              <View
                height={48}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Eye size={32} className="opacity-30" />
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
                  <span className="font-semibold">Alice Smith</span>
                  <View direction="row" gap={2} align="center">
                    <Clock size={14} className="opacity-50" />
                    <span className="text-sm opacity-70">5 hours ago</span>
                  </View>
                </View>
              </View>
              <p>Beautiful sunset at the beach today!</p>
              <View
                height={48}
                backgroundColor="neutral-faded"
                justify="center"
                align="center"
              >
                <Eye size={32} className="opacity-30" />
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
        <Text variant="title-2" className="text-xl font-semibold">
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
              <Text variant="title-3" className="text-lg font-semibold">
                Tech Conference 2024
              </Text>
              <View gap={2}>
                <View direction="row" gap={2} align="center">
                  <Calendar size={16} className="opacity-70" />
                  <span className="text-sm opacity-70">March 15, 2024</span>
                </View>
                <View direction="row" gap={2} align="center">
                  <MapPin size={16} className="opacity-70" />
                  <span className="text-sm opacity-70">San Francisco, CA</span>
                </View>
                <View direction="row" gap={2} align="center">
                  <Users size={16} className="opacity-70" />
                  <span className="text-sm opacity-70">500+ attendees</span>
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
              <Text variant="title-3" className="text-lg font-semibold">
                Design Systems Webinar
              </Text>
              <View gap={2}>
                <View direction="row" gap={2} align="center">
                  <Calendar size={16} className="opacity-70" />
                  <span className="text-sm opacity-70">March 12, 2024</span>
                </View>
                <View direction="row" gap={2} align="center">
                  <Clock size={16} className="opacity-70" />
                  <span className="text-sm opacity-70">2:00 PM - 3:30 PM</span>
                </View>
                <View direction="row" gap={2} align="center">
                  <Users size={16} className="opacity-70" />
                  <span className="text-sm opacity-70">120 registered</span>
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
        <Text variant="title-2" className="text-xl font-semibold">
          Stats Cards
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={4} elevated>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm opacity-70">Total Revenue</span>
                <TrendingUp size={20} className="text-green-500" />
              </View>
              <span className="text-3xl font-bold">$45,231</span>
              <View direction="row" gap={2} align="center">
                <Badge color="positive" size="small">
                  +12.5%
                </Badge>
                <span className="text-sm opacity-70">from last month</span>
              </View>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm opacity-70">Active Users</span>
                <Users size={20} className="text-blue-500" />
              </View>
              <span className="text-3xl font-bold">2,345</span>
              <View direction="row" gap={2} align="center">
                <Badge color="positive" size="small">
                  +8.2%
                </Badge>
                <span className="text-sm opacity-70">from last week</span>
              </View>
            </View>
          </Card>

          <Card padding={4} elevated>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm opacity-70">Avg. Rating</span>
                <Star size={20} className="text-yellow-500" />
              </View>
              <span className="text-3xl font-bold">4.8</span>
              <View direction="row" gap={2} align="center">
                <Badge color="neutral" size="small">
                  +0.3
                </Badge>
                <span className="text-sm opacity-70">from last month</span>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">
          Different Padding Sizes
        </Text>
        <View direction="row" gap={3} wrap>
          <Card padding={2}>
            <p className="text-sm">Padding: 2</p>
          </Card>
          <Card padding={4}>
            <p className="text-sm">Padding: 4</p>
          </Card>
          <Card padding={6}>
            <p className="text-sm">Padding: 6</p>
          </Card>
          <Card padding={8}>
            <p className="text-sm">Padding: 8</p>
          </Card>
        </View>
      </View>
    </View>
  )
}
