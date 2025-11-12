'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { View } from './View'
import { Text } from './Text'
import { Button } from './Button'
import { TextField } from './TextField'
import { Progress } from './Progress'
import { Divider } from './Divider'
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  User,
  Briefcase,
} from 'lucide-react'
import styles from './SignUpForm.module.css'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  company: string
  role: string
}

export function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    role: '',
  })

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
  }

  const progress = (currentStep / 3) * 100

  return (
    <View className={styles.formContainer}>
      <View gap={2} className={styles.header}>
        <Text variant="title-1" weight="bold">
          Create your account
        </Text>
        <Text variant="body-2" color="neutral-faded">
          Join us and start your journey today
        </Text>
      </View>

      <View gap={2} className={styles.progressSection}>
        <View direction="row" align="center" justify="space-between">
          <Text variant="body-3" color="neutral-faded">
            Step {currentStep} of 3
          </Text>
          <Text variant="body-3" color="neutral-faded">
            {Math.round(progress)}%
          </Text>
        </View>
        <Progress value={progress} />
      </View>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <View gap={4}>
              <View gap={3}>
                <View direction="row" gap={2}>
                  <Button
                    variant="outline"
                    fullWidth
                    className={styles.socialButton}
                  >
                    <svg
                      className={styles.socialIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    className={styles.socialButton}
                  >
                    <svg
                      className={styles.socialIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Continue with Apple
                  </Button>
                </View>

                <View direction="row" align="center" gap={3}>
                  <Divider />
                  <Text variant="body-3" color="neutral-faded">
                    Or continue with email
                  </Text>
                  <Divider />
                </View>

                <TextField
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.value)}
                  placeholder="John Doe"
                  inputAttributes={{
                    'aria-label': 'Full Name',
                    required: true,
                  }}
                  startSlot={<User size={18} />}
                />

                <TextField
                  name="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.value)}
                  placeholder="john@example.com"
                  inputAttributes={{
                    'aria-label': 'Email Address',
                    type: 'email',
                    required: true,
                  }}
                  startSlot={<Mail size={18} />}
                />
              </View>

              <Button
                variant="solid"
                color="primary"
                fullWidth
                onClick={handleNext}
              >
                <View direction="row" align="center" gap={2} justify="center">
                  Next
                  <ArrowRight size={18} />
                </View>
              </Button>
            </View>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <View gap={4}>
              <View gap={3}>
                <View gap={1}>
                  <TextField
                    name="password"
                    value={formData.password}
                    onChange={(e) => updateField('password', e.value)}
                    placeholder="••••••••"
                    inputAttributes={{
                      'aria-label': 'Password',
                      type: 'password',
                      required: true,
                    }}
                    startSlot={<Lock size={18} />}
                  />
                  <Text variant="caption-1" color="neutral-faded">
                    Must be at least 8 characters
                  </Text>
                </View>

                <TextField
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => updateField('confirmPassword', e.value)}
                  placeholder="••••••••"
                  inputAttributes={{
                    'aria-label': 'Confirm Password',
                    type: 'password',
                    required: true,
                  }}
                  startSlot={<Lock size={18} />}
                />
              </View>

              <View direction="row" gap={2}>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleBack}
                >
                  <View direction="row" align="center" gap={2} justify="center">
                    <ArrowLeft size={18} />
                    Back
                  </View>
                </Button>
                <Button
                  variant="solid"
                  color="primary"
                  fullWidth
                  onClick={handleNext}
                >
                  <View direction="row" align="center" gap={2} justify="center">
                    Next
                    <ArrowRight size={18} />
                  </View>
                </Button>
              </View>
            </View>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <View gap={4}>
              <View gap={3}>
                <TextField
                  name="company"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.value)}
                  placeholder="Acme Inc."
                  inputAttributes={{
                    'aria-label': 'Company Name (Optional)',
                  }}
                  startSlot={<Briefcase size={18} />}
                />

                <TextField
                  name="role"
                  value={formData.role}
                  onChange={(e) => updateField('role', e.value)}
                  placeholder="Product Manager"
                  inputAttributes={{
                    'aria-label': 'Your Role (Optional)',
                  }}
                  startSlot={<User size={18} />}
                />
              </View>

              <View direction="row" gap={2}>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleBack}
                >
                  <View direction="row" align="center" gap={2} justify="center">
                    <ArrowLeft size={18} />
                    Back
                  </View>
                </Button>
                <Button
                  variant="solid"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Create Account
                </Button>
              </View>
            </View>
          </motion.div>
        )}
      </AnimatePresence>
    </View>
  )
}
