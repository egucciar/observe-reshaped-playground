'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Stepper } from '../components/Stepper'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function StepperPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [formStep, setFormStep] = useState(0)
  const [checkoutStep, setCheckoutStep] = useState(1)

  return (
    <View padding={4} gap={4}>
      <h1>Stepper Component</h1>

      <View gap={3}>
        <h2>Basic Horizontal Stepper</h2>
        <Card padding={4}>
          <Stepper>
            <Stepper.Item title="Step 1" subtitle="First step" />
            <Stepper.Item title="Step 2" subtitle="Second step" />
            <Stepper.Item title="Step 3" subtitle="Third step" />
          </Stepper>
        </Card>
      </View>

      <View gap={3}>
        <h2>Vertical Stepper</h2>
        <Card padding={4}>
          <Stepper direction="column">
            <Stepper.Item title="Step 1" subtitle="Step 1 subtitle" />
            <Stepper.Item title="Step 2" />
            <Stepper.Item title="Step 3" />
          </Stepper>
        </Card>
      </View>

      <View gap={3}>
        <h2>With Active Step</h2>
        <Card padding={4}>
          <View gap={4}>
            <Stepper activeId={activeStep}>
              <Stepper.Item
                title="Step 1"
                subtitle="Getting started"
                completed={activeStep > 0}
              />
              <Stepper.Item
                title="Step 2"
                subtitle="Configuration"
                completed={activeStep > 1}
              />
              <Stepper.Item title="Step 3" subtitle="Review" completed={activeStep > 2} />
              <Stepper.Item title="Step 4" subtitle="Complete" />
            </Stepper>
            <View direction="row" gap={2} justify="center">
              <Button
                variant="outline"
                size="small"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                startSlot={<ChevronLeft size={16} />}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="small"
                onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
                disabled={activeStep === 3}
                endSlot={<ChevronRight size={16} />}
              >
                Next
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Completed Steps</h2>
        <Card padding={4}>
          <Stepper activeId={2}>
            <Stepper.Item title="Account" subtitle="Create account" completed />
            <Stepper.Item title="Profile" subtitle="Setup profile" completed />
            <Stepper.Item title="Preferences" subtitle="Set preferences" />
            <Stepper.Item title="Done" subtitle="All set!" />
          </Stepper>
        </Card>
      </View>

      <View gap={3}>
        <h2>Vertical with Navigation</h2>
        <Card padding={4}>
          <Stepper activeId={formStep} direction="column">
            <Stepper.Item
              title="Personal Info"
              subtitle="Basic details"
              completed={formStep > 0}
            >
              {formStep === 0 && (
                <View gap={3} paddingTop={3}>
                  <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
                    <p className="text-sm">Enter your personal information here...</p>
                  </View>
                  <View direction="row" gap={2}>
                    <Button
                      variant="solid"
                      color="primary"
                      size="small"
                      onClick={() => setFormStep(1)}
                      endSlot={<ChevronRight size={16} />}
                    >
                      Continue
                    </Button>
                  </View>
                </View>
              )}
            </Stepper.Item>

            <Stepper.Item
              title="Contact Details"
              subtitle="Email and phone"
              completed={formStep > 1}
            >
              {formStep === 1 && (
                <View gap={3} paddingTop={3}>
                  <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
                    <p className="text-sm">Enter your contact information...</p>
                  </View>
                  <View direction="row" gap={2}>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => setFormStep(0)}
                      startSlot={<ChevronLeft size={16} />}
                    >
                      Back
                    </Button>
                    <Button
                      variant="solid"
                      color="primary"
                      size="small"
                      onClick={() => setFormStep(2)}
                      endSlot={<ChevronRight size={16} />}
                    >
                      Continue
                    </Button>
                  </View>
                </View>
              )}
            </Stepper.Item>

            <Stepper.Item
              title="Review"
              subtitle="Confirm details"
              completed={formStep > 2}
            >
              {formStep === 2 && (
                <View gap={3} paddingTop={3}>
                  <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
                    <p className="text-sm">
                      Review your information before submitting...
                    </p>
                  </View>
                  <View direction="row" gap={2}>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => setFormStep(1)}
                      startSlot={<ChevronLeft size={16} />}
                    >
                      Back
                    </Button>
                    <Button
                      variant="solid"
                      color="positive"
                      size="small"
                      onClick={() => setFormStep(3)}
                    >
                      Submit
                    </Button>
                  </View>
                </View>
              )}
            </Stepper.Item>

            <Stepper.Item title="Complete" subtitle="All done!">
              {formStep === 3 && (
                <View gap={3} paddingTop={3}>
                  <View
                    padding={3}
                    backgroundColor="positive-faded"
                    borderRadius="medium"
                  >
                    <p className="text-sm">✓ Form submitted successfully!</p>
                  </View>
                  <Button variant="outline" size="small" onClick={() => setFormStep(0)}>
                    Start Over
                  </Button>
                </View>
              )}
            </Stepper.Item>
          </Stepper>
        </Card>
      </View>

      <View gap={3}>
        <h2>Checkout Process</h2>
        <Card padding={4}>
          <View gap={4}>
            <Stepper activeId={checkoutStep}>
              <Stepper.Item title="Cart" completed={checkoutStep > 0} />
              <Stepper.Item title="Shipping" completed={checkoutStep > 1} />
              <Stepper.Item title="Payment" completed={checkoutStep > 2} />
              <Stepper.Item title="Confirmation" />
            </Stepper>

            <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
              <View gap={2}>
                <Badge color="primary">Step {checkoutStep + 1} of 4</Badge>
                <p className="text-sm">
                  {checkoutStep === 0 && 'Review items in your cart'}
                  {checkoutStep === 1 && 'Enter shipping information'}
                  {checkoutStep === 2 && 'Enter payment details'}
                  {checkoutStep === 3 && 'Order confirmation'}
                </p>
              </View>
            </View>

            <View direction="row" gap={2} justify="space-between">
              <Button
                variant="outline"
                size="small"
                onClick={() => setCheckoutStep(Math.max(0, checkoutStep - 1))}
                disabled={checkoutStep === 0}
                startSlot={<ChevronLeft size={16} />}
              >
                Back
              </Button>
              <Button
                variant="solid"
                color="primary"
                size="small"
                onClick={() => setCheckoutStep(Math.min(3, checkoutStep + 1))}
                disabled={checkoutStep === 3}
                endSlot={<ChevronRight size={16} />}
              >
                {checkoutStep === 3 ? 'Finish' : 'Continue'}
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Compact Stepper</h2>
        <Card padding={4}>
          <Stepper activeId={1}>
            <Stepper.Item title="Start" completed />
            <Stepper.Item title="In Progress" />
            <Stepper.Item title="Review" />
            <Stepper.Item title="Complete" />
            <Stepper.Item title="Archive" />
          </Stepper>
        </Card>
      </View>

      <View gap={3}>
        <h2>Usage Tips</h2>
        <View gap={2} className="text-sm opacity-80">
          <p>• Use Stepper to guide users through multi-step processes</p>
          <p>• Mark completed steps with the completed prop</p>
          <p>• Control the active step with activeId</p>
          <p>• Use direction="column" for vertical layouts with content</p>
          <p>• Combine with navigation buttons for better UX</p>
          <p>• Keep step titles concise and descriptive</p>
        </View>
      </View>
    </View>
  )
}
