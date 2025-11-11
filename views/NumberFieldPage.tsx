'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { NumberField } from '../components/NumberField'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'

export function NumberFieldPage() {
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(99.99)
  const [percentage, setPercentage] = useState(50)
  const [age, setAge] = useState(25)
  const [rating, setRating] = useState(3)

  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">NumberField Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Number Fields</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Quantity</span>
              <NumberField
                name="quantity"
                increaseAriaLabel="Increase quantity"
                decreaseAriaLabel="Decrease quantity"
                defaultValue={1}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Amount</span>
              <NumberField
                name="amount"
                increaseAriaLabel="Increase amount"
                decreaseAriaLabel="Decrease amount"
                defaultValue={10}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Count</span>
              <NumberField
                name="count"
                increaseAriaLabel="Increase count"
                decreaseAriaLabel="Decrease count"
                defaultValue={0}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Number Field Sizes</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Small</span>
              <NumberField
                name="small"
                size="small"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={5}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Medium (default)</span>
              <NumberField
                name="medium"
                size="medium"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={5}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Large</span>
              <NumberField
                name="large"
                size="large"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={5}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Number Field Variants</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Outline (default)</span>
              <NumberField
                name="outline"
                variant="outline"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={10}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Faded</span>
              <NumberField
                name="faded"
                variant="faded"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={10}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Step Values</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Step by 1 (default)</span>
              <NumberField
                name="step1"
                increaseAriaLabel="Increase by 1"
                decreaseAriaLabel="Decrease by 1"
                defaultValue={10}
                step={1}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Step by 5</span>
              <NumberField
                name="step5"
                increaseAriaLabel="Increase by 5"
                decreaseAriaLabel="Decrease by 5"
                defaultValue={10}
                step={5}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Step by 10</span>
              <NumberField
                name="step10"
                increaseAriaLabel="Increase by 10"
                decreaseAriaLabel="Decrease by 10"
                defaultValue={50}
                step={10}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Step by 0.1 (decimal)</span>
              <NumberField
                name="stepDecimal"
                increaseAriaLabel="Increase by 0.1"
                decreaseAriaLabel="Decrease by 0.1"
                defaultValue={1.5}
                step={0.1}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Min and Max Values</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Range 0-10</span>
              <NumberField
                name="range0-10"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={5}
                min={0}
                max={10}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Range 1-100</span>
              <NumberField
                name="range1-100"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={50}
                min={1}
                max={100}
              />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Minimum only (min: 0)</span>
              <NumberField
                name="minOnly"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={10}
                min={0}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Controlled Component</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Quantity</span>
                <Badge>{quantity}</Badge>
              </View>
              <NumberField
                name="controlledQuantity"
                increaseAriaLabel="Increase quantity"
                decreaseAriaLabel="Decrease quantity"
                value={quantity}
                onChange={(value) => setQuantity(value.value)}
                min={1}
                max={99}
              />
            </View>
            <View direction="row" gap={2}>
              <Button variant="outline" size="small" onClick={() => setQuantity(1)}>
                Reset
              </Button>
              <Button variant="outline" size="small" onClick={() => setQuantity(10)}>
                Set to 10
              </Button>
              <Button variant="outline" size="small" onClick={() => setQuantity(quantity + 5)}>
                Add 5
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Price Input</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Price</span>
                <Badge color="primary">${price.toFixed(2)}</Badge>
              </View>
              <NumberField
                name="price"
                increaseAriaLabel="Increase price"
                decreaseAriaLabel="Decrease price"
                value={price}
                onChange={(value) => setPrice(value.value)}
                step={0.01}
                min={0}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Percentage Input</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Discount</span>
                <Badge color="positive">{percentage}%</Badge>
              </View>
              <NumberField
                name="percentage"
                increaseAriaLabel="Increase percentage"
                decreaseAriaLabel="Decrease percentage"
                value={percentage}
                onChange={(value) => setPercentage(value.value)}
                min={0}
                max={100}
                step={5}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Age Input</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Age</span>
                <Badge>{age} years</Badge>
              </View>
              <NumberField
                name="age"
                increaseAriaLabel="Increase age"
                decreaseAriaLabel="Decrease age"
                value={age}
                onChange={(value) => setAge(value.value)}
                min={0}
                max={120}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Rating Input</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Rating</span>
                <Badge color="warning">{rating} / 5</Badge>
              </View>
              <NumberField
                name="rating"
                increaseAriaLabel="Increase rating"
                decreaseAriaLabel="Decrease rating"
                value={rating}
                onChange={(value) => setRating(value.value)}
                min={1}
                max={5}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Disabled State</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Disabled Number Field</span>
              <NumberField
                name="disabled"
                increaseAriaLabel="Increase value"
                decreaseAriaLabel="Decrease value"
                defaultValue={10}
                disabled
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Form Example</h2>
        <Card padding={4}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Form submitted!')
            }}
          >
            <View gap={4}>
              <View gap={2}>
                <span className="text-sm font-semibold">Product Quantity</span>
                <NumberField
                  name="productQuantity"
                  increaseAriaLabel="Increase product quantity"
                  decreaseAriaLabel="Decrease product quantity"
                  defaultValue={1}
                  min={1}
                  max={10}
                />
              </View>
              <View gap={2}>
                <span className="text-sm font-semibold">Unit Price ($)</span>
                <NumberField
                  name="unitPrice"
                  increaseAriaLabel="Increase unit price"
                  decreaseAriaLabel="Decrease unit price"
                  defaultValue={19.99}
                  step={0.01}
                  min={0}
                />
              </View>
              <View gap={2}>
                <span className="text-sm font-semibold">Discount (%)</span>
                <NumberField
                  name="discount"
                  increaseAriaLabel="Increase discount"
                  decreaseAriaLabel="Decrease discount"
                  defaultValue={0}
                  min={0}
                  max={100}
                  step={5}
                />
              </View>
              <Button type="submit" variant="solid" color="primary">
                Submit Order
              </Button>
            </View>
          </form>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Shopping Cart Example</h2>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" gap={3} align="center" className="border-b pb-3">
              <View className="w-16 h-16 bg-gray-200 rounded" />
              <View gap={1} grow>
                <span className="font-semibold">Product Name</span>
                <span className="text-sm opacity-70">$29.99 each</span>
              </View>
              <View gap={2} align="end">
                <NumberField
                  name="cartItem1"
                  size="small"
                  increaseAriaLabel="Increase quantity"
                  decreaseAriaLabel="Decrease quantity"
                  defaultValue={2}
                  min={1}
                  max={10}
                />
                <span className="text-sm font-semibold">$59.98</span>
              </View>
            </View>

            <View direction="row" gap={3} align="center" className="border-b pb-3">
              <View className="w-16 h-16 bg-gray-200 rounded" />
              <View gap={1} grow>
                <span className="font-semibold">Another Product</span>
                <span className="text-sm opacity-70">$49.99 each</span>
              </View>
              <View gap={2} align="end">
                <NumberField
                  name="cartItem2"
                  size="small"
                  increaseAriaLabel="Increase quantity"
                  decreaseAriaLabel="Decrease quantity"
                  defaultValue={1}
                  min={1}
                  max={10}
                />
                <span className="text-sm font-semibold">$49.99</span>
              </View>
            </View>

            <View direction="row" justify="space-between" align="center" paddingTop={2}>
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">$109.97</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Settings Panel Example</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Font Size</span>
              <NumberField
                name="fontSize"
                increaseAriaLabel="Increase font size"
                decreaseAriaLabel="Decrease font size"
                defaultValue={14}
                min={10}
                max={24}
              />
              <span className="text-xs opacity-70">Range: 10-24 pixels</span>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Line Height</span>
              <NumberField
                name="lineHeight"
                increaseAriaLabel="Increase line height"
                decreaseAriaLabel="Decrease line height"
                defaultValue={1.5}
                min={1}
                max={3}
                step={0.1}
              />
              <span className="text-xs opacity-70">Range: 1.0-3.0</span>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Auto-save Interval (seconds)</span>
              <NumberField
                name="autoSave"
                increaseAriaLabel="Increase auto-save interval"
                decreaseAriaLabel="Decrease auto-save interval"
                defaultValue={30}
                min={10}
                max={300}
                step={10}
              />
              <span className="text-xs opacity-70">Range: 10-300 seconds</span>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
