'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Slider } from '../components/Slider'
import { Card } from '../components/Card'

export function SliderPage() {
  const [singleValue, setSingleValue] = useState(50)
  const [rangeMin, setRangeMin] = useState(25)
  const [rangeMax, setRangeMax] = useState(75)

  return (
    <View padding={4} gap={4}>
      <h1>Slider Component</h1>
      <p className="text-gray-600">Interactive numeric value selection</p>

      <View gap={3}>
        <h2>Basic Slider (Uncontrolled)</h2>
        <Slider name="basic-slider" defaultValue={50} />
      </View>

      <View gap={3}>
        <h2>Controlled Slider</h2>
        <Slider
          name="controlled-slider"
          value={singleValue}
          onChange={e => setSingleValue(e.value)}
        />
        <p className="text-sm text-gray-600">Current value: {singleValue}</p>
      </View>

      <View gap={3}>
        <h2>Custom Range (0-200)</h2>
        <Slider name="custom-range" defaultValue={100} min={0} max={200} />
      </View>

      <View gap={3}>
        <h2>Custom Step (10)</h2>
        <Slider name="step-slider" defaultValue={50} step={10} />
      </View>

      <View gap={3}>
        <h2>Range Selection</h2>
        <Slider
          name="range-slider"
          range
          minValue={rangeMin}
          maxValue={rangeMax}
          onChange={e => {
            setRangeMin(e.minValue)
            setRangeMax(e.maxValue)
          }}
        />
        <p className="text-sm text-gray-600">
          Range: {rangeMin} - {rangeMax}
        </p>
      </View>

      <View gap={3}>
        <h2>Custom Value Display</h2>
        <Slider
          name="custom-value"
          defaultValue={50}
          renderValue={value => `${value}%`}
        />
      </View>

      <View gap={3}>
        <h2>No Tooltip</h2>
        <Slider name="no-tooltip" defaultValue={50} renderValue={false} />
      </View>

      <View gap={3}>
        <h2>Disabled</h2>
        <Slider name="disabled-slider" defaultValue={50} disabled />
      </View>

      <View gap={3}>
        <h2>Vertical Orientation</h2>
        <View height="200px">
          <Slider name="vertical-slider" defaultValue={50} orientation="vertical" />
        </View>
      </View>

      <View gap={3}>
        <h2>In a Card</h2>
        <Card padding={4}>
          <View gap={3}>
            <h3>Volume Control</h3>
            <Slider
              name="volume"
              defaultValue={70}
              min={0}
              max={100}
              renderValue={value => `${value}%`}
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Price Range Filter</h2>
        <Card padding={4}>
          <View gap={3}>
            <h3>Filter by Price</h3>
            <Slider
              name="price-range"
              range
              defaultMinValue={250}
              defaultMaxValue={750}
              min={0}
              max={1000}
              step={50}
              renderValue={value => `$${value}`}
            />
          </View>
        </Card>
      </View>
    </View>
  )
}
