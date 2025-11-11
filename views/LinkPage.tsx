'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Link } from '../components/Link'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import {
  ExternalLink,
  Download,
  Share2,
  Mail,
  Phone,
  MapPin,
  Settings,
  Home,
  User,
  FileText,
} from 'lucide-react'

export function LinkPage() {
  const [clickedLink, setClickedLink] = useState<string>('')

  return (
    <View padding={4} gap={4}>
      <h1>Link Component</h1>

      {clickedLink && (
        <Card padding={3}>
          <span className="text-sm">
            Last clicked: <strong>{clickedLink}</strong>
          </span>
        </Card>
      )}

      <View gap={3}>
        <h2>Basic Links with href</h2>
        <Card padding={4}>
          <View gap={3}>
            <p>
              Visit our <Link href="/">homepage</Link> to learn more about our products.
            </p>
            <p>
              Check out the <Link href="/docs">documentation</Link> for detailed guides.
            </p>
            <p>
              Read our <Link href="/blog">blog</Link> for the latest updates.
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Links with onClick</h2>
        <Card padding={4}>
          <View gap={3}>
            <p>
              Click here to{' '}
              <Link onClick={() => setClickedLink('open modal')}>open a modal</Link> or{' '}
              <Link onClick={() => setClickedLink('trigger action')}>
                trigger an action
              </Link>
              .
            </p>
            <p>
              You can also{' '}
              <Link onClick={() => setClickedLink('show details')}>show details</Link> or{' '}
              <Link onClick={() => setClickedLink('expand section')}>
                expand a section
              </Link>
              .
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Link Variants</h2>
        <View direction="row" gap={3}>
          <Card padding={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Underline (default)</span>
              <p>
                This is a <Link href="/">link with underline</Link> in text.
              </p>
            </View>
          </Card>
          <Card padding={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Plain</span>
              <p>
                This is a{' '}
                <Link href="/" variant="plain">
                  plain link
                </Link>{' '}
                without underline.
              </p>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2>Link Colors</h2>
        <Card padding={4}>
          <View gap={2}>
            <p>
              <Link href="/" color="primary">
                Primary link
              </Link>
            </p>
            <p>
              <Link href="/" color="critical">
                Critical link
              </Link>
            </p>
            <p>
              <Link href="/" color="positive">
                Positive link
              </Link>
            </p>
            <p>
              <Link href="/" color="warning">
                Warning link
              </Link>
            </p>
            <p className="text-gray-600">
              <Link href="/" color="inherit">
                Inherit color link
              </Link>
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Links with Icons</h2>
        <Card padding={4}>
          <View gap={2}>
            <p>
              <Link href="/" icon={ExternalLink}>
                Open in new tab
              </Link>
            </p>
            <p>
              <Link href="/" icon={Download}>
                Download file
              </Link>
            </p>
            <p>
              <Link href="/" icon={Share2}>
                Share this page
              </Link>
            </p>
            <p>
              <Link href="/" icon={Mail}>
                Send email
              </Link>
            </p>
            <p>
              <Link href="/" icon={Phone}>
                Call us
              </Link>
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>External Links</h2>
        <Card padding={4}>
          <View gap={2}>
            <p>
              Visit{' '}
              <Link
                href="https://reshaped.so"
                icon={ExternalLink}
                attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
              >
                Reshaped documentation
              </Link>
            </p>
            <p>
              Check out{' '}
              <Link
                href="https://github.com"
                icon={ExternalLink}
                attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
              >
                GitHub
              </Link>
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Navigation Menu</h2>
        <Card padding={4}>
          <View gap={2}>
            <Link href="/" icon={Home} variant="plain">
              Home
            </Link>
            <Link href="/profile" icon={User} variant="plain">
              Profile
            </Link>
            <Link href="/settings" icon={Settings} variant="plain">
              Settings
            </Link>
            <Link href="/documents" icon={FileText} variant="plain">
              Documents
            </Link>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Disabled Links</h2>
        <Card padding={4}>
          <View gap={2}>
            <p>
              This is a{' '}
              <Link href="/" disabled>
                disabled link with href
              </Link>
              .
            </p>
            <p>
              This is a{' '}
              <Link onClick={() => {}} disabled>
                disabled link with onClick
              </Link>
              .
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>In Context Usage</h2>
        <Card padding={4}>
          <View gap={3}>
            <p>
              Welcome to our platform! Before you get started, please read our{' '}
              <Link href="/terms">Terms of Service</Link> and{' '}
              <Link href="/privacy">Privacy Policy</Link>. If you have any questions, feel
              free to <Link href="/contact">contact us</Link> or visit our{' '}
              <Link href="/help">Help Center</Link>.
            </p>
            <p>
              To update your profile, go to{' '}
              <Link onClick={() => setClickedLink('Account Settings')}>
                Account Settings
              </Link>
              . You can also{' '}
              <Link onClick={() => setClickedLink('Change Password')}>
                change your password
              </Link>{' '}
              or{' '}
              <Link onClick={() => setClickedLink('Manage Notifications')}>
                manage notifications
              </Link>
              .
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Link vs Button</h2>
        <Card padding={4}>
          <View gap={3}>
            <View gap={2}>
              <span className="text-sm font-semibold">
                Use Link for inline navigation:
              </span>
              <p>
                Learn more about our products on the{' '}
                <Link href="/products">Products page</Link>.
              </p>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">
                Use Button for primary actions:
              </span>
              <Button
                variant="solid"
                color="primary"
                onClick={() => setClickedLink('Button clicked')}
              >
                Get Started
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Combined with Other Components</h2>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" gap={2} align="center">
              <MapPin size={20} />
              <span>Location:</span>
              <Link href="/location" icon={ExternalLink}>
                View on map
              </Link>
            </View>
            <View direction="row" gap={2} align="center">
              <Mail size={20} />
              <span>Email:</span>
              <Link href="mailto:hello@example.com">hello@example.com</Link>
            </View>
            <View direction="row" gap={2} align="center">
              <Phone size={20} />
              <span>Phone:</span>
              <Link href="tel:+1234567890">+1 (234) 567-890</Link>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Breadcrumb Navigation</h2>
        <Card padding={4}>
          <View direction="row" gap={2} align="center">
            <Link href="/" variant="plain">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" variant="plain">
              Products
            </Link>
            <span>/</span>
            <Link href="/products/category" variant="plain">
              Category
            </Link>
            <span>/</span>
            <span className="font-semibold">Current Page</span>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Footer Links</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={6}>
              <View gap={2}>
                <span className="font-semibold">Company</span>
                <Link href="/about" variant="plain" color="inherit">
                  About
                </Link>
                <Link href="/careers" variant="plain" color="inherit">
                  Careers
                </Link>
                <Link href="/press" variant="plain" color="inherit">
                  Press
                </Link>
              </View>
              <View gap={2}>
                <span className="font-semibold">Resources</span>
                <Link href="/blog" variant="plain" color="inherit">
                  Blog
                </Link>
                <Link href="/docs" variant="plain" color="inherit">
                  Documentation
                </Link>
                <Link href="/support" variant="plain" color="inherit">
                  Support
                </Link>
              </View>
              <View gap={2}>
                <span className="font-semibold">Legal</span>
                <Link href="/terms" variant="plain" color="inherit">
                  Terms
                </Link>
                <Link href="/privacy" variant="plain" color="inherit">
                  Privacy
                </Link>
                <Link href="/cookies" variant="plain" color="inherit">
                  Cookies
                </Link>
              </View>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
