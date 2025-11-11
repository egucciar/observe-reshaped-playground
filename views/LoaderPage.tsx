'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Loader } from '../components/Loader'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { RefreshCw, Download, Upload, Send } from 'lucide-react'

export function LoaderPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  const simulateUpload = () => {
    setUploadProgress(true)
    setTimeout(() => setUploadProgress(false), 2500)
  }

  const simulateDownload = () => {
    setDownloadProgress(true)
    setTimeout(() => setDownloadProgress(false), 2500)
  }

  return (
    <View padding={4} gap={4}>
      <h1>Loader Component</h1>

      <View gap={3}>
        <h2>Loader Sizes</h2>
        <Card padding={4}>
          <View direction="row" gap={4} align="center">
            <View gap={2} align="center">
              <Loader size="small" ariaLabel="Loading small" />
              <span className="text-sm">Small</span>
            </View>
            <View gap={2} align="center">
              <Loader size="medium" ariaLabel="Loading medium" />
              <span className="text-sm">Medium</span>
            </View>
            <View gap={2} align="center">
              <Loader size="large" ariaLabel="Loading large" />
              <span className="text-sm">Large</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Loader Colors</h2>
        <View direction="row" gap={3}>
          <Card padding={4}>
            <View gap={2} align="center">
              <Loader size="medium" color="primary" ariaLabel="Loading primary" />
              <span className="text-sm">Primary</span>
            </View>
          </Card>
          <Card padding={4} className="bg-black text-white">
            <View gap={2} align="center">
              <Loader size="medium" color="inherit" ariaLabel="Loading inherit" />
              <span className="text-sm">Inherit</span>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2>Button Loading States</h2>
        <Card padding={4}>
          <View direction="row" gap={3} wrap>
            <Button
              variant="solid"
              color="primary"
              onClick={simulateLoading}
              disabled={isLoading}
            >
              {isLoading ? (
                <View direction="row" gap={2} align="center">
                  <Loader size="small" color="inherit" ariaLabel="Loading" />
                  <span>Loading...</span>
                </View>
              ) : (
                'Load Data'
              )}
            </Button>

            <Button
              variant="outline"
              onClick={simulateUpload}
              disabled={uploadProgress}
              icon={Upload}
            >
              {uploadProgress ? (
                <View direction="row" gap={2} align="center">
                  <Loader size="small" ariaLabel="Uploading" />
                  <span>Uploading...</span>
                </View>
              ) : (
                'Upload File'
              )}
            </Button>

            <Button
              variant="outline"
              onClick={simulateDownload}
              disabled={downloadProgress}
              icon={Download}
            >
              {downloadProgress ? (
                <View direction="row" gap={2} align="center">
                  <Loader size="small" ariaLabel="Downloading" />
                  <span>Downloading...</span>
                </View>
              ) : (
                'Download'
              )}
            </Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Inline Loading States</h2>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" gap={2} align="center">
              <Loader size="small" ariaLabel="Loading content" />
              <span>Loading your content...</span>
            </View>
            <View direction="row" gap={2} align="center">
              <Loader size="small" ariaLabel="Processing request" />
              <span>Processing your request...</span>
            </View>
            <View direction="row" gap={2} align="center">
              <Loader size="small" ariaLabel="Saving changes" />
              <span>Saving changes...</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Centered Loading State</h2>
        <Card padding={4}>
          <View height="200px" align="center" justify="center" gap={3}>
            <Loader size="large" ariaLabel="Loading page" />
            <span className="text-sm opacity-70">Loading page content...</span>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Card Loading States</h2>
        <View direction="row" gap={3}>
          <Card padding={4}>
            <View gap={3}>
              <View direction="row" gap={2} align="center">
                <Loader size="small" ariaLabel="Loading user" />
                <span className="font-semibold">Loading User Profile</span>
              </View>
              <span className="text-sm opacity-70">
                Please wait while we fetch your data...
              </span>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={3} align="center">
              <Loader size="medium" ariaLabel="Loading image" />
              <span className="text-sm font-semibold">Loading Image</span>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2>List Loading State</h2>
        <Card padding={4}>
          <View gap={3}>
            {[1, 2, 3].map(item => (
              <View
                key={item}
                direction="row"
                gap={3}
                align="center"
                padding={2}
                className="border rounded"
              >
                <Loader size="small" ariaLabel={`Loading item ${item}`} />
                <View gap={1} grow>
                  <span className="text-sm font-semibold">Loading item {item}</span>
                  <span className="text-xs opacity-70">Fetching data...</span>
                </View>
              </View>
            ))}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Form Submission Loading</h2>
        <Card padding={4}>
          <form
            onSubmit={e => {
              e.preventDefault()
              simulateLoading()
            }}
          >
            <View gap={3}>
              <View gap={2}>
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  className="border rounded px-3 py-2"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </View>
              <View gap={2}>
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  className="border rounded px-3 py-2"
                  placeholder="Enter your message"
                  rows={3}
                  disabled={isLoading}
                />
              </View>
              <Button
                type="submit"
                variant="solid"
                color="primary"
                disabled={isLoading}
                icon={Send}
              >
                {isLoading ? (
                  <View direction="row" gap={2} align="center">
                    <Loader size="small" color="inherit" ariaLabel="Submitting" />
                    <span>Submitting...</span>
                  </View>
                ) : (
                  'Submit'
                )}
              </Button>
            </View>
          </form>
        </Card>
      </View>

      <View gap={3}>
        <h2>Refresh Action</h2>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" justify="space-between" align="center">
              <span className="font-semibold">Data Table</span>
              <Button
                variant="ghost"
                size="small"
                icon={RefreshCw}
                onClick={simulateLoading}
                disabled={isLoading}
              >
                {isLoading ? (
                  <View direction="row" gap={2} align="center">
                    <Loader size="small" ariaLabel="Refreshing" />
                    <span>Refreshing...</span>
                  </View>
                ) : (
                  'Refresh'
                )}
              </Button>
            </View>
            <View className="border rounded p-4">
              {isLoading ? (
                <View align="center" justify="center" padding={4}>
                  <Loader size="medium" ariaLabel="Loading data" />
                </View>
              ) : (
                <span className="text-sm">Your data appears here</span>
              )}
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Overlay Loading</h2>
        <Card padding={4}>
          <View position="relative" height="200px" className="border rounded">
            <View padding={3}>
              <span>Content that gets covered by loading overlay</span>
            </View>
            {isLoading && (
              <View
                position="absolute"
                insetTop={0}
                insetStart={0}
                width="100%"
                height="100%"
                align="center"
                justify="center"
                className="bg-white/80 backdrop-blur-sm"
              >
                <Loader size="large" ariaLabel="Loading overlay" />
              </View>
            )}
          </View>
          <View paddingTop={3}>
            <Button
              variant="outline"
              size="small"
              onClick={simulateLoading}
              disabled={isLoading}
            >
              Toggle Overlay
            </Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Empty State with Loader</h2>
        <Card padding={4}>
          <View align="center" gap={3} padding={4}>
            <Loader size="large" ariaLabel="Loading content" />
            <View gap={1} align="center">
              <span className="font-semibold">Loading Content</span>
              <span className="text-sm opacity-70">This will only take a moment</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Multiple Concurrent Loaders</h2>
        <Card padding={4}>
          <View direction="row" gap={3}>
            <View gap={2} grow className="border rounded p-3">
              <View direction="row" gap={2} align="center">
                <Loader size="small" ariaLabel="Loading section 1" />
                <span className="text-sm font-semibold">Section 1</span>
              </View>
              <span className="text-xs opacity-70">Loading data...</span>
            </View>
            <View gap={2} grow className="border rounded p-3">
              <View direction="row" gap={2} align="center">
                <Loader size="small" ariaLabel="Loading section 2" />
                <span className="text-sm font-semibold">Section 2</span>
              </View>
              <span className="text-xs opacity-70">Loading data...</span>
            </View>
            <View gap={2} grow className="border rounded p-3">
              <View direction="row" gap={2} align="center">
                <Loader size="small" ariaLabel="Loading section 3" />
                <span className="text-sm font-semibold">Section 3</span>
              </View>
              <span className="text-xs opacity-70">Loading data...</span>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
