'use client'

import { View } from './View'
import { Card } from './Card'
import { Badge } from './Badge'

export interface ConstructionProps {
  title?: string
  message?: string
}

export function Construction({
  title = 'Under Construction',
  message = 'This component is currently being built. Check back soon!',
}: ConstructionProps) {
  return (
    <View padding={8} align="center" justify="center" minHeight="400px">
      <View maxWidth="600px">
        <Card padding={6}>
          <View gap={4} align="center">
            <View
              width="80px"
              height="80px"
              borderRadius="medium"
              backgroundColor="warning-faded"
              align="center"
              justify="center"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-warning"
              >
                <path d="M12 22V8" />
                <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                <circle cx="12" cy="5" r="3" />
              </svg>
            </View>

            <View gap={2} align="center">
              <h2>{title}</h2>
              <Badge color="warning">In Progress</Badge>
            </View>

            <p className="text-center text-gray-600">{message}</p>

            <View direction="row" gap={2} wrap justify="center">
              <View
                width="12px"
                height="12px"
                borderRadius="medium"
                backgroundColor="warning"
                className="animate-pulse"
                attributes={{ style: { animationDelay: '0ms' } }}
              />
              <View
                width="12px"
                height="12px"
                borderRadius="medium"
                backgroundColor="warning"
                className="animate-pulse"
                attributes={{ style: { animationDelay: '200ms' } }}
              />
              <View
                width="12px"
                height="12px"
                borderRadius="medium"
                backgroundColor="warning"
                className="animate-pulse"
                attributes={{ style: { animationDelay: '400ms' } }}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
