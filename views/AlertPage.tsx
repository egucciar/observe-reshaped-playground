import { View } from '../components/View'
import { Text } from '../components/Text'
import { Alert } from '../components/Alert'
import { Button } from '../components/Button'
import { AlertCircle, CheckCircle, Info, AlertTriangle, Bell } from 'lucide-react'

export function AlertPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Alert Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Alert</Text>
        <Alert title="Default Alert">
          This is a basic alert message without any color variant
        </Alert>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Color Variants</Text>
        <View gap={2}>
          <Alert title="Neutral Alert" color="neutral">
            General information or neutral message
          </Alert>
          <Alert title="Primary Alert" color="primary" icon={Info}>
            Important information that needs attention
          </Alert>
          <Alert title="Positive Alert" color="positive" icon={CheckCircle}>
            Action completed successfully
          </Alert>
          <Alert title="Warning Alert" color="warning" icon={AlertTriangle}>
            Warning message that requires caution
          </Alert>
          <Alert title="Critical Alert" color="critical" icon={AlertCircle}>
            Error or critical issue that needs immediate attention
          </Alert>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Icons</Text>
        <View gap={2}>
          <Alert title="System Notification" icon={Bell} color="primary">
            You have new updates available
          </Alert>
          <Alert title="Success" icon={CheckCircle} color="positive">
            Your changes have been saved
          </Alert>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Actions</Text>
        <View gap={2}>
          <Alert
            title="Update Available"
            color="primary"
            icon={Info}
            actionsSlot={<Button variant="ghost" color="primary">Update Now</Button>}
          >
            A new version is available with improved features
          </Alert>
          <Alert
            title="Confirm Action"
            color="warning"
            icon={AlertTriangle}
            actionsSlot={
              <View direction="row" gap={2}>
                <Button variant="ghost" color="critical">Cancel</Button>
                <Button color="critical">Confirm</Button>
              </View>
            }
          >
            This action cannot be undone. Are you sure you want to continue?
          </Alert>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Inline Layout</Text>
        <Alert
          title="Quick tip"
          color="primary"
          inline
          actionsSlot={<Button variant="ghost" color="primary">Got it</Button>}
        >
          Use keyboard shortcuts to work faster
        </Alert>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Without Description</Text>
        <View gap={2}>
          <Alert title="Connection restored" color="positive" icon={CheckCircle} />
          <Alert title="Low disk space" color="warning" icon={AlertTriangle} />
          <Alert title="Connection failed" color="critical" icon={AlertCircle} />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Real-World Examples</Text>
        <View gap={2}>
          <Alert
            title="Account Verification Required"
            color="warning"
            icon={AlertTriangle}
            actionsSlot={<Button color="critical">Verify Email</Button>}
          >
            Please verify your email address to access all features
          </Alert>
          <Alert
            title="Payment Successful"
            color="positive"
            icon={CheckCircle}
            actionsSlot={<Button variant="outline" color="positive">View Receipt</Button>}
          >
            Your payment of $99.99 has been processed successfully
          </Alert>
          <Alert
            title="Session Expired"
            color="critical"
            icon={AlertCircle}
            actionsSlot={<Button color="critical">Sign In Again</Button>}
          >
            Your session has expired due to inactivity. Please sign in again to continue.
          </Alert>
        </View>
      </View>
    </View>
  )
}
