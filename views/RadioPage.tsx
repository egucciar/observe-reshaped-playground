'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Radio, RadioGroup } from '../components/Radio'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'

export function RadioPage() {
  const [selectedAnimal, setSelectedAnimal] = useState('dog')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedPlan, setSelectedPlan] = useState('basic')
  const [selectedShipping, setSelectedShipping] = useState('standard')
  const [selectedPayment, setSelectedPayment] = useState('credit-card')
  const [selectedTheme, setSelectedTheme] = useState('light')
  const [selectedNotifications, setSelectedNotifications] = useState('all')

  return (
    <View padding={4} gap={4}>
      <h1>Radio Component</h1>

      <View gap={3}>
        <h2>Basic Radio Buttons</h2>
        <Card padding={4}>
          <View gap={3}>
            <Radio name="basic" value="option1">
              Option 1
            </Radio>
            <Radio name="basic" value="option2">
              Option 2
            </Radio>
            <Radio name="basic" value="option3">
              Option 3
            </Radio>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Radio Sizes</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Small</span>
              <View gap={2}>
                <Radio name="size-small" value="1" size="small">
                  Small radio button
                </Radio>
                <Radio name="size-small" value="2" size="small">
                  Another small option
                </Radio>
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Medium (default)</span>
              <View gap={2}>
                <Radio name="size-medium" value="1" size="medium">
                  Medium radio button
                </Radio>
                <Radio name="size-medium" value="2" size="medium">
                  Another medium option
                </Radio>
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Large</span>
              <View gap={2}>
                <Radio name="size-large" value="1" size="large">
                  Large radio button
                </Radio>
                <Radio name="size-large" value="2" size="large">
                  Another large option
                </Radio>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Radio States</h2>
        <Card padding={4}>
          <View gap={3}>
            <Radio name="states" value="default">
              Default state
            </Radio>
            <Radio name="states" value="checked" checked>
              Checked state
            </Radio>
            <Radio name="states" value="disabled" disabled>
              Disabled state
            </Radio>
            <Radio name="states" value="disabled-checked" disabled checked>
              Disabled and checked
            </Radio>
            <Radio name="states" value="error" hasError>
              Error state
            </Radio>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>RadioGroup - Basic</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected:</span>
              <Badge color="primary">{selectedAnimal}</Badge>
            </View>
            <RadioGroup
              name="animal"
              value={selectedAnimal}
              onChange={({ value }) => setSelectedAnimal(value)}
            >
              <View gap={2}>
                <Radio value="dog">Dog</Radio>
                <Radio value="cat">Cat</Radio>
                <Radio value="bird">Bird</Radio>
                <Radio value="fish">Fish</Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>RadioGroup - Colors</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected Color:</span>
              <Badge color="primary">{selectedColor}</Badge>
            </View>
            <RadioGroup
              name="color"
              value={selectedColor}
              onChange={({ value }) => setSelectedColor(value)}
            >
              <View gap={2}>
                <Radio value="red">Red</Radio>
                <Radio value="blue">Blue</Radio>
                <Radio value="green">Green</Radio>
                <Radio value="yellow">Yellow</Radio>
                <Radio value="purple">Purple</Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>RadioGroup - Sizes</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected Size:</span>
              <Badge color="primary">{selectedSize}</Badge>
            </View>
            <RadioGroup
              name="size"
              value={selectedSize}
              onChange={({ value }) => setSelectedSize(value)}
            >
              <View gap={2}>
                <Radio value="small">Small</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="large">Large</Radio>
                <Radio value="xlarge">Extra Large</Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Subscription Plan Selection</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected Plan:</span>
              <Badge color="primary">{selectedPlan}</Badge>
            </View>
            <RadioGroup
              name="plan"
              value={selectedPlan}
              onChange={({ value }) => setSelectedPlan(value)}
            >
              <View gap={3}>
                <Card padding={3} className="border">
                  <View gap={2}>
                    <Radio value="basic">
                      <View gap={1}>
                        <span className="font-semibold">Basic Plan</span>
                        <span className="text-sm opacity-70">$9.99/month</span>
                      </View>
                    </Radio>
                    <span className="text-sm opacity-70 pl-6">
                      Perfect for individuals getting started
                    </span>
                  </View>
                </Card>
                <Card padding={3} className="border">
                  <View gap={2}>
                    <Radio value="pro">
                      <View gap={1}>
                        <span className="font-semibold">Pro Plan</span>
                        <span className="text-sm opacity-70">$19.99/month</span>
                      </View>
                    </Radio>
                    <span className="text-sm opacity-70 pl-6">
                      For professionals who need more features
                    </span>
                  </View>
                </Card>
                <Card padding={3} className="border">
                  <View gap={2}>
                    <Radio value="enterprise">
                      <View gap={1}>
                        <span className="font-semibold">Enterprise Plan</span>
                        <span className="text-sm opacity-70">$49.99/month</span>
                      </View>
                    </Radio>
                    <span className="text-sm opacity-70 pl-6">
                      Advanced features for large teams
                    </span>
                  </View>
                </Card>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Shipping Method Selection</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected Method:</span>
              <Badge color="primary">{selectedShipping}</Badge>
            </View>
            <RadioGroup
              name="shipping"
              value={selectedShipping}
              onChange={({ value }) => setSelectedShipping(value)}
            >
              <View gap={2}>
                <View
                  direction="row"
                  justify="space-between"
                  align="center"
                  className="border-b pb-2"
                >
                  <Radio value="standard">
                    <View gap={0}>
                      <span className="font-semibold">Standard Shipping</span>
                      <span className="text-sm opacity-70">5-7 business days</span>
                    </View>
                  </Radio>
                  <span className="text-sm font-semibold">$5.99</span>
                </View>
                <View
                  direction="row"
                  justify="space-between"
                  align="center"
                  className="border-b pb-2"
                >
                  <Radio value="express">
                    <View gap={0}>
                      <span className="font-semibold">Express Shipping</span>
                      <span className="text-sm opacity-70">2-3 business days</span>
                    </View>
                  </Radio>
                  <span className="text-sm font-semibold">$12.99</span>
                </View>
                <View
                  direction="row"
                  justify="space-between"
                  align="center"
                  className="border-b pb-2"
                >
                  <Radio value="overnight">
                    <View gap={0}>
                      <span className="font-semibold">Overnight Shipping</span>
                      <span className="text-sm opacity-70">Next business day</span>
                    </View>
                  </Radio>
                  <span className="text-sm font-semibold">$24.99</span>
                </View>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Payment Method Selection</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected Method:</span>
              <Badge color="primary">{selectedPayment}</Badge>
            </View>
            <RadioGroup
              name="payment"
              value={selectedPayment}
              onChange={({ value }) => setSelectedPayment(value)}
            >
              <View gap={3}>
                <Radio value="credit-card">
                  <View gap={1}>
                    <span className="font-semibold">Credit Card</span>
                    <span className="text-sm opacity-70">Visa, Mastercard, Amex</span>
                  </View>
                </Radio>
                <Radio value="paypal">
                  <View gap={1}>
                    <span className="font-semibold">PayPal</span>
                    <span className="text-sm opacity-70">
                      Pay with your PayPal account
                    </span>
                  </View>
                </Radio>
                <Radio value="bank-transfer">
                  <View gap={1}>
                    <span className="font-semibold">Bank Transfer</span>
                    <span className="text-sm opacity-70">Direct bank transfer</span>
                  </View>
                </Radio>
                <Radio value="crypto">
                  <View gap={1}>
                    <span className="font-semibold">Cryptocurrency</span>
                    <span className="text-sm opacity-70">Bitcoin, Ethereum</span>
                  </View>
                </Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Theme Settings</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected Theme:</span>
              <Badge color="primary">{selectedTheme}</Badge>
            </View>
            <RadioGroup
              name="theme"
              value={selectedTheme}
              onChange={({ value }) => setSelectedTheme(value)}
            >
              <View gap={2}>
                <Radio value="light">Light Mode</Radio>
                <Radio value="dark">Dark Mode</Radio>
                <Radio value="system">System Default</Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Notification Preferences</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected:</span>
              <Badge color="primary">{selectedNotifications}</Badge>
            </View>
            <RadioGroup
              name="notifications"
              value={selectedNotifications}
              onChange={({ value }) => setSelectedNotifications(value)}
            >
              <View gap={2}>
                <Radio value="all">
                  <View gap={0}>
                    <span className="font-semibold">All Notifications</span>
                    <span className="text-sm opacity-70">Receive all updates</span>
                  </View>
                </Radio>
                <Radio value="important">
                  <View gap={0}>
                    <span className="font-semibold">Important Only</span>
                    <span className="text-sm opacity-70">Critical updates only</span>
                  </View>
                </Radio>
                <Radio value="none">
                  <View gap={0}>
                    <span className="font-semibold">None</span>
                    <span className="text-sm opacity-70">No notifications</span>
                  </View>
                </Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Survey Question</h2>
        <Card padding={4}>
          <View gap={4}>
            <span className="text-sm font-semibold">
              How satisfied are you with our service?
            </span>
            <RadioGroup name="satisfaction">
              <View gap={2}>
                <Radio value="very-satisfied">Very Satisfied</Radio>
                <Radio value="satisfied">Satisfied</Radio>
                <Radio value="neutral">Neutral</Radio>
                <Radio value="dissatisfied">Dissatisfied</Radio>
                <Radio value="very-dissatisfied">Very Dissatisfied</Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Radio with Reset</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center">
              <span className="text-sm font-semibold">Selected:</span>
              <Badge color="primary">{selectedColor}</Badge>
            </View>
            <RadioGroup
              name="color-reset"
              value={selectedColor}
              onChange={({ value }) => setSelectedColor(value)}
            >
              <View gap={2}>
                <Radio value="red">Red</Radio>
                <Radio value="blue">Blue</Radio>
                <Radio value="green">Green</Radio>
              </View>
            </RadioGroup>
            <View direction="row" gap={2}>
              <Button
                variant="outline"
                size="small"
                onClick={() => setSelectedColor('red')}
              >
                Select Red
              </Button>
              <Button
                variant="outline"
                size="small"
                onClick={() => setSelectedColor('blue')}
              >
                Select Blue
              </Button>
              <Button
                variant="outline"
                size="small"
                onClick={() => setSelectedColor('green')}
              >
                Select Green
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Horizontal Layout</h2>
        <Card padding={4}>
          <View gap={4}>
            <span className="text-sm font-semibold">Select a day:</span>
            <RadioGroup name="day">
              <View direction="row" gap={3} wrap>
                <Radio value="monday">Monday</Radio>
                <Radio value="tuesday">Tuesday</Radio>
                <Radio value="wednesday">Wednesday</Radio>
                <Radio value="thursday">Thursday</Radio>
                <Radio value="friday">Friday</Radio>
              </View>
            </RadioGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Form Example</h2>
        <Card padding={4}>
          <form
            onSubmit={e => {
              e.preventDefault()
              alert('Form submitted!')
            }}
          >
            <View gap={4}>
              <View gap={2}>
                <span className="text-sm font-semibold">Account Type</span>
                <RadioGroup name="accountType">
                  <View gap={2}>
                    <Radio value="personal">Personal</Radio>
                    <Radio value="business">Business</Radio>
                  </View>
                </RadioGroup>
              </View>
              <View gap={2}>
                <span className="text-sm font-semibold">Subscription Frequency</span>
                <RadioGroup name="frequency">
                  <View gap={2}>
                    <Radio value="monthly">Monthly</Radio>
                    <Radio value="yearly">Yearly (Save 20%)</Radio>
                  </View>
                </RadioGroup>
              </View>
              <Button type="submit" variant="solid" color="primary">
                Continue
              </Button>
            </View>
          </form>
        </Card>
      </View>
    </View>
  )
}
