'use client'

import { useState, useEffect } from 'react'
import { View } from '../components/View'
import { Progress } from '../components/Progress'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Play, RotateCcw, Upload, Download, CheckCircle } from 'lucide-react'

export function ProgressPage() {
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [taskProgress, setTaskProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isDownloading && downloadProgress < 100) {
      interval = setInterval(() => {
        setDownloadProgress((prev) => Math.min(prev + 5, 100))
      }, 200)
    }
    return () => clearInterval(interval)
  }, [isDownloading, downloadProgress])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isUploading && uploadProgress < 100) {
      interval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 3, 100))
      }, 200)
    }
    return () => clearInterval(interval)
  }, [isUploading, uploadProgress])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isProcessing && taskProgress < 100) {
      interval = setInterval(() => {
        setTaskProgress((prev) => Math.min(prev + 2, 100))
      }, 300)
    }
    return () => clearInterval(interval)
  }, [isProcessing, taskProgress])

  const startDownload = () => {
    setDownloadProgress(0)
    setIsDownloading(true)
  }

  const startUpload = () => {
    setUploadProgress(0)
    setIsUploading(true)
  }

  const startTask = () => {
    setTaskProgress(0)
    setIsProcessing(true)
  }

  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">Progress Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Progress</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">0%</span>
              <Progress value={0} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">25%</span>
              <Progress value={25} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">50%</span>
              <Progress value={50} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">75%</span>
              <Progress value={75} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">100%</span>
              <Progress value={100} />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Progress Sizes</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Medium (default)</span>
              <Progress value={60} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Small</span>
              <Progress value={60} size="small" />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Progress Colors</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Primary</span>
              <Progress value={60} color="primary" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Positive</span>
              <Progress value={60} color="positive" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Warning</span>
              <Progress value={60} color="warning" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Critical</span>
              <Progress value={60} color="critical" />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Custom Value Boundaries</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Range 0-100 (75/100)</span>
              <Progress value={75} min={0} max={100} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Range 50-100 (75/100)</span>
              <Progress value={75} min={50} max={100} />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Range 0-200 (150/200)</span>
              <Progress value={150} min={0} max={200} />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Download Progress</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={3} align="center" justify="space-between">
              <View gap={1} grow>
                <span className="text-sm font-semibold">Downloading file.zip</span>
                <span className="text-xs opacity-70">{downloadProgress}% complete</span>
              </View>
              <Badge color={downloadProgress === 100 ? 'positive' : 'primary'}>
                {downloadProgress === 100 ? 'Complete' : 'Downloading'}
              </Badge>
            </View>
            <Progress value={downloadProgress} color={downloadProgress === 100 ? 'positive' : 'primary'} />
            <View direction="row" gap={2}>
              <Button
                variant="solid"
                color="primary"
                size="small"
                icon={Download}
                onClick={startDownload}
                disabled={isDownloading && downloadProgress < 100}
              >
                Start Download
              </Button>
              <Button
                variant="outline"
                size="small"
                icon={RotateCcw}
                onClick={() => {
                  setDownloadProgress(0)
                  setIsDownloading(false)
                }}
              >
                Reset
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Upload Progress</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={3} align="center" justify="space-between">
              <View gap={1} grow>
                <span className="text-sm font-semibold">Uploading document.pdf</span>
                <span className="text-xs opacity-70">{uploadProgress}% complete</span>
              </View>
              <Badge color={uploadProgress === 100 ? 'positive' : 'warning'}>
                {uploadProgress === 100 ? 'Complete' : 'Uploading'}
              </Badge>
            </View>
            <Progress value={uploadProgress} color={uploadProgress === 100 ? 'positive' : 'warning'} />
            <View direction="row" gap={2}>
              <Button
                variant="solid"
                color="primary"
                size="small"
                icon={Upload}
                onClick={startUpload}
                disabled={isUploading && uploadProgress < 100}
              >
                Start Upload
              </Button>
              <Button
                variant="outline"
                size="small"
                icon={RotateCcw}
                onClick={() => {
                  setUploadProgress(0)
                  setIsUploading(false)
                }}
              >
                Reset
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Task Processing</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={3} align="center" justify="space-between">
              <View gap={1} grow>
                <span className="text-sm font-semibold">Processing data...</span>
                <span className="text-xs opacity-70">{taskProgress}% complete</span>
              </View>
              {taskProgress === 100 && (
                <CheckCircle size={20} className="text-green-500" />
              )}
            </View>
            <Progress value={taskProgress} color={taskProgress === 100 ? 'positive' : 'primary'} />
            <View direction="row" gap={2}>
              <Button
                variant="solid"
                color="primary"
                size="small"
                icon={Play}
                onClick={startTask}
                disabled={isProcessing && taskProgress < 100}
              >
                Start Processing
              </Button>
              <Button
                variant="outline"
                size="small"
                icon={RotateCcw}
                onClick={() => {
                  setTaskProgress(0)
                  setIsProcessing(false)
                }}
              >
                Reset
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Installation Progress</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={3}>
              <View gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <span className="text-sm font-semibold">Step 1: Downloading packages</span>
                  <Badge color="positive">Complete</Badge>
                </View>
                <Progress value={100} color="positive" size="small" />
              </View>
              <View gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <span className="text-sm font-semibold">Step 2: Installing dependencies</span>
                  <Badge color="positive">Complete</Badge>
                </View>
                <Progress value={100} color="positive" size="small" />
              </View>
              <View gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <span className="text-sm font-semibold">Step 3: Configuring settings</span>
                  <Badge color="primary">In Progress</Badge>
                </View>
                <Progress value={65} color="primary" size="small" />
              </View>
              <View gap={2}>
                <View direction="row" justify="space-between" align="center">
                  <span className="text-sm font-semibold">Step 4: Finalizing installation</span>
                  <Badge>Pending</Badge>
                </View>
                <Progress value={0} size="small" />
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Profile Completion</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Profile Completion</span>
                <span className="text-sm font-semibold">60%</span>
              </View>
              <Progress value={60} color="primary" />
              <span className="text-xs opacity-70">
                Complete your profile to unlock all features
              </span>
            </View>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Basic information</span>
              </View>
              <View direction="row" gap={2} align="center">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Profile photo</span>
              </View>
              <View direction="row" gap={2} align="center">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Contact details</span>
              </View>
              <View direction="row" gap={2} align="center">
                <div className="w-4 h-4 border-2 rounded-full" />
                <span className="text-sm opacity-50">Bio and description</span>
              </View>
              <View direction="row" gap={2} align="center">
                <div className="w-4 h-4 border-2 rounded-full" />
                <span className="text-sm opacity-50">Social media links</span>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Storage Usage</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Storage Used</span>
                <span className="text-sm font-semibold">7.5 GB / 10 GB</span>
              </View>
              <Progress value={75} color="warning" />
              <span className="text-xs opacity-70">
                You are using 75% of your storage. Consider upgrading for more space.
              </span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Skill Levels</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">JavaScript</span>
              <Progress value={90} color="positive" size="small" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">TypeScript</span>
              <Progress value={85} color="positive" size="small" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">React</span>
              <Progress value={80} color="primary" size="small" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Node.js</span>
              <Progress value={70} color="primary" size="small" />
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Python</span>
              <Progress value={50} color="warning" size="small" />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Project Timeline</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Project Alpha</span>
                <Badge color="positive">85%</Badge>
              </View>
              <Progress value={85} color="positive" />
              <span className="text-xs opacity-70">Due in 5 days</span>
            </View>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Project Beta</span>
                <Badge color="primary">60%</Badge>
              </View>
              <Progress value={60} color="primary" />
              <span className="text-xs opacity-70">Due in 12 days</span>
            </View>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Project Gamma</span>
                <Badge color="warning">30%</Badge>
              </View>
              <Progress value={30} color="warning" />
              <span className="text-xs opacity-70">Due in 3 days</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Battery Status</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Battery Level</span>
                <span className="text-sm font-semibold">85%</span>
              </View>
              <Progress value={85} color="positive" />
            </View>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Battery Level</span>
                <span className="text-sm font-semibold">45%</span>
              </View>
              <Progress value={45} color="warning" />
            </View>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Battery Level</span>
                <span className="text-sm font-semibold">15%</span>
              </View>
              <Progress value={15} color="critical" />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Goal Progress</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Daily Steps</span>
                <span className="text-sm">8,500 / 10,000</span>
              </View>
              <Progress value={85} color="primary" />
            </View>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Weekly Exercise</span>
                <span className="text-sm">4 / 5 days</span>
              </View>
              <Progress value={80} color="primary" />
            </View>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Water Intake</span>
                <span className="text-sm">6 / 8 glasses</span>
              </View>
              <Progress value={75} color="primary" />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Survey Completion</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <View direction="row" justify="space-between" align="center">
                <span className="text-sm font-semibold">Survey Progress</span>
                <span className="text-sm">Question 7 of 10</span>
              </View>
              <Progress value={70} color="primary" />
            </View>
            <Button variant="solid" color="primary">
              Continue Survey
            </Button>
          </View>
        </Card>
      </View>
    </View>
  )
}
