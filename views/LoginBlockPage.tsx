'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Card } from '../components/Card'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
import { Checkbox } from '../components/Checkbox'
import { Link } from '../components/Link'
import { Divider } from '../components/Divider'
import { LogIn, Mail, Github } from 'lucide-react'

export function LoginBlockPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      alert(`Login attempted with email: ${email}`)
    }, 1500)
  }

  const handleSocialLogin = (provider: string) => {
    alert(`Login with ${provider}`)
  }

  return (
    <View padding={6} gap={6}>
      <View gap={2}>
        <Text variant="title-1">Login Block</Text>
        <Text variant="body-2" color="neutral-faded">
          A modern login form with email/password and social authentication options
        </Text>
      </View>

      {/* Centered Login Card */}
      <View align="center" paddingBlock={8}>
        <View maxWidth="500px" width="100%">
          <Card padding={6}>
            <View gap={6}>
              {/* Header */}
              <View gap={2} align="center">
                <div className="bg-primary-faded p-x3 rounded-full inline-flex">
                  <Text color="primary">
                    <LogIn size={24} />
                  </Text>
                </div>
              <Text variant="title-3">Welcome back</Text>
              <Text variant="body-2" color="neutral-faded" align="center">
                Enter your credentials to access your account
              </Text>
            </View>

            {/* Social Login Buttons */}
            <View gap={2}>
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleSocialLogin('Google')}
              >
                <View direction="row" align="center" gap={2} justify="center">
                  <Mail size={16} />
                  <Text variant="body-2">Continue with Google</Text>
                </View>
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleSocialLogin('GitHub')}
              >
                <View direction="row" align="center" gap={2} justify="center">
                  <Github size={16} />
                  <Text variant="body-2">Continue with GitHub</Text>
                </View>
              </Button>
            </View>

            {/* Divider */}
            <View direction="row" align="center" gap={3}>
              <Divider />
              <Text variant="caption-1" color="neutral-faded">
                OR
              </Text>
              <Divider />
            </View>

            {/* Email/Password Form */}
            <View gap={4}>
              <View gap={2}>
                <Text variant="body-2" weight="medium">
                  Email
                </Text>
                <TextField
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.value)}
                  placeholder="name@example.com"
                />
              </View>

              <View gap={2}>
                <View direction="row" align="center" justify="space-between">
                  <Text variant="body-2" weight="medium">
                    Password
                  </Text>
                  <Link href="#" variant="plain">
                    <Text variant="caption-1">Forgot password?</Text>
                  </Link>
                </View>
                <TextField
                  name="password"
                  inputAttributes={{ type: 'password' }}
                  value={password}
                  onChange={(e) => setPassword(e.value)}
                  placeholder="Enter your password"
                />
              </View>

              <View direction="row" align="center" gap={2}>
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(!!e.value)}
                />
                <Text variant="body-2">Remember me for 30 days</Text>
              </View>

              <Button
                variant="solid"
                color="primary"
                fullWidth
                onClick={handleLogin}
                disabled={isLoading || !email || !password}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </View>

            {/* Footer */}
            <View align="center">
              <Text variant="body-2" color="neutral-faded">
                Don't have an account?{' '}
                <Link href="#" variant="plain">
                  <Text variant="body-2" weight="medium" color="primary">
                    Sign up
                  </Text>
                </Link>
              </Text>
            </View>
          </View>
          </Card>
        </View>
      </View>

      {/* Additional Login Variations */}
      <Card padding={6}>
        <View gap={4}>
          <Text variant="title-4">Alternative Login Layouts</Text>
          
          <View
            direction="row"
            gap={4}
            wrap
          >
            {/* Minimal Login */}
            <Card padding={4}>
              <View gap={3}>
                <Text variant="title-5">Minimal Login</Text>
                <TextField
                  name="email-minimal"
                  placeholder="Email"
                />
                <TextField
                  name="password-minimal"
                  inputAttributes={{ type: 'password' }}
                  placeholder="Password"
                />
                <Button variant="solid">
                  Login
                </Button>
              </View>
            </Card>

            {/* Login with Description */}
            <Card padding={4}>
              <View gap={3}>
                <View gap={1}>
                  <Text variant="title-5">Secure Login</Text>
                  <Text variant="caption-1" color="neutral-faded">
                    Your data is encrypted and secure
                  </Text>
                </View>
                <TextField
                  name="email-secure"
                  placeholder="Email"
                />
                <TextField
                  name="password-secure"
                  inputAttributes={{ type: 'password' }}
                  placeholder="Password"
                />
                <Button variant="solid" color="primary">
                  Access Account
                </Button>
              </View>
            </Card>
          </View>
        </View>
      </Card>

      {/* Usage Tips */}
      <Card padding={4}>
        <View gap={3}>
          <Text variant="title-5">Usage Tips</Text>
          <View gap={2}>
            <Text variant="body-2">
              • This login block demonstrates a modern authentication UI with multiple sign-in options
            </Text>
            <Text variant="body-2">
              • Social login buttons (Google, GitHub) provide quick authentication alternatives
            </Text>
            <Text variant="body-2">
              • The form includes validation - the submit button is disabled until both fields are filled
            </Text>
            <Text variant="body-2">
              • "Remember me" checkbox and "Forgot password" link are common UX patterns
            </Text>
            <Text variant="body-2">
              • The centered card layout with max-width creates a focused, professional appearance
            </Text>
            <Text variant="body-2">
              • Icons in input fields (Mail, Lock) provide visual cues about the expected input
            </Text>
            <Text variant="body-2">
              • Alternative layouts show how to adapt the pattern for different use cases
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

