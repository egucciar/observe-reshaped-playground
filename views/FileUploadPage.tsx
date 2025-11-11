'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { FileUpload } from '../components/FileUpload'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { TextField } from '../components/TextField'
import { Upload, FileImage, FileText, File, X } from 'lucide-react'

export function FileUploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [documentFiles, setDocumentFiles] = useState<File[]>([])

  const handleFileUpload = (args: { value: File[] }) => {
    setUploadedFiles(args.value)
  }

  const handleImageUpload = (args: { value: File[] }) => {
    setImageFiles(args.value)
  }

  const handleDocumentUpload = (args: { value: File[] }) => {
    setDocumentFiles(args.value)
  }

  const removeFile = (index: number, type: 'uploaded' | 'image' | 'document') => {
    if (type === 'uploaded') {
      setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
    } else if (type === 'image') {
      setImageFiles(imageFiles.filter((_, i) => i !== index))
    } else {
      setDocumentFiles(documentFiles.filter((_, i) => i !== index))
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">FileUpload Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic File Upload</h2>
        <Card padding={4}>
          <View gap={3}>
            <FileUpload name="basic-file" onChange={handleFileUpload}>
              Drop files to attach
            </FileUpload>
            {uploadedFiles.length > 0 && (
              <View gap={2}>
                <span className="text-sm font-semibold">Uploaded Files:</span>
                {uploadedFiles.map((file, index) => (
                  <View key={index} direction="row" gap={2} align="center" padding={2} className="border rounded">
                    <File size={20} />
                    <View gap={1} grow>
                      <span className="text-sm font-semibold">{file.name}</span>
                      <span className="text-xs opacity-70">{formatFileSize(file.size)}</span>
                    </View>
                    <Button
                      icon={X}
                      variant="ghost"
                      size="small"
                      onClick={() => removeFile(index, 'uploaded')}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">File Upload with Custom Trigger</h2>
        <Card padding={4}>
          <FileUpload name="custom-trigger" onChange={handleFileUpload}>
            <View gap={2} align="center">
              <Upload size={32} className="opacity-50" />
              <View gap={1} align="center">
                <span>Drop files to attach, or</span>
                <FileUpload.Trigger>
                  <Button variant="outline" size="small">Browse Files</Button>
                </FileUpload.Trigger>
              </View>
            </View>
          </FileUpload>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Image Upload with Preview</h2>
        <Card padding={4}>
          <View gap={3}>
            <FileUpload
              name="image-upload"
              onChange={handleImageUpload}
            >
              <View gap={2} align="center">
                <FileImage size={32} className="opacity-50" />
                <span>Drop images here</span>
              </View>
            </FileUpload>
            {imageFiles.length > 0 && (
              <View gap={2}>
                <span className="text-sm font-semibold">Selected Images:</span>
                <View direction="row" gap={2} wrap>
                  {imageFiles.map((file, index) => (
                    <View key={index} gap={1} className="relative">
                      <View className="w-24 h-24 border rounded overflow-hidden bg-gray-100">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </View>
                      <Button
                        icon={X}
                        variant="solid"
                        size="small"
                        onClick={() => removeFile(index, 'image')}
                        className="absolute -top-2 -right-2"
                      />
                      <span className="text-xs truncate w-24">{file.name}</span>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Document Upload</h2>
        <Card padding={4}>
          <View gap={3}>
            <FileUpload
              name="document-upload"
              onChange={handleDocumentUpload}
            >
              <View gap={2} align="center">
                <FileText size={32} className="opacity-50" />
                <View gap={1} align="center">
                  <span>Drop documents here</span>
                  <span className="text-xs opacity-70">PDF, DOC, DOCX, TXT files only</span>
                </View>
              </View>
            </FileUpload>
            {documentFiles.length > 0 && (
              <View gap={2}>
                <span className="text-sm font-semibold">Selected Documents:</span>
                {documentFiles.map((file, index) => (
                  <View key={index} direction="row" gap={2} align="center" padding={2} className="border rounded">
                    <FileText size={20} />
                    <View gap={1} grow>
                      <span className="text-sm font-semibold">{file.name}</span>
                      <View direction="row" gap={2}>
                        <span className="text-xs opacity-70">{formatFileSize(file.size)}</span>
                        <Badge color="neutral" size="small">{file.type || 'Unknown'}</Badge>
                      </View>
                    </View>
                    <Button
                      icon={X}
                      variant="ghost"
                      size="small"
                      onClick={() => removeFile(index, 'document')}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Multiple File Upload</h2>
        <Card padding={4}>
          <FileUpload name="multiple-files" onChange={handleFileUpload}>
            <View gap={2} align="center" padding={4}>
              <Upload size={40} className="opacity-50" />
              <View gap={1} align="center">
                <span className="font-semibold">Upload Multiple Files</span>
                <span className="text-sm opacity-70">Drag and drop or click to browse</span>
              </View>
            </View>
          </FileUpload>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Inline File Upload</h2>
        <Card padding={4}>
          <View direction="row" gap={2} align="center">
            <span>Attach a file:</span>
            <FileUpload name="inline-file" onChange={handleFileUpload} inline>
              <FileUpload.Trigger>
                <Button variant="outline" size="small" icon={Upload}>
                  Choose File
                </Button>
              </FileUpload.Trigger>
            </FileUpload>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Compact Upload with Icon</h2>
        <Card padding={4}>
          <FileUpload name="compact-upload" onChange={handleFileUpload}>
            <View gap={3} align="center" padding={3}>
              <View className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Upload size={32} className="text-blue-600" />
              </View>
              <View gap={1} align="center">
                <span className="font-semibold">Upload your files</span>
                <span className="text-sm opacity-70">Click or drag files to this area</span>
              </View>
              <FileUpload.Trigger>
                <Button variant="solid" color="primary" size="small">
                  Select Files
                </Button>
              </FileUpload.Trigger>
            </View>
          </FileUpload>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Profile Picture Upload</h2>
        <Card padding={4}>
          <View direction="row" gap={4} align="center">
            <View className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {imageFiles.length > 0 ? (
                <img
                  src={URL.createObjectURL(imageFiles[0])}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl opacity-50">👤</span>
              )}
            </View>
            <View gap={2}>
              <span className="font-semibold">Profile Picture</span>
              <FileUpload
                name="profile-pic"
                onChange={handleImageUpload}
                  inline
              >
                <FileUpload.Trigger>
                  <Button variant="outline" size="small">
                    Upload Photo
                  </Button>
                </FileUpload.Trigger>
              </FileUpload>
              <span className="text-xs opacity-70">JPG, PNG or GIF. Max 5MB.</span>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">File Upload States</h2>
        <View direction="row" gap={3}>
          <Card padding={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Default State</span>
              <FileUpload name="state-default" onChange={handleFileUpload}>
                <View padding={3} align="center">
                  <Upload size={24} className="opacity-50" />
                  <span className="text-sm">Drop files here</span>
                </View>
              </FileUpload>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Disabled State</span>
              <FileUpload name="state-disabled" onChange={handleFileUpload}>
                <View padding={3} align="center" className="opacity-50">
                  <Upload size={24} />
                  <span className="text-sm">Upload</span>
                </View>
              </FileUpload>
            </View>
          </Card>
        </View>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Form Integration</h2>
        <Card padding={4}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Form submitted!')
            }}
          >
            <View gap={3}>
              <View gap={2}>
                <span className="text-sm font-semibold">Project Name</span>
                <TextField
                  name="project-name"
                  placeholder="Enter project name"
                />
              </View>
              <View gap={2}>
                <span className="text-sm font-semibold">Project Files</span>
                <FileUpload name="project-files" onChange={handleFileUpload}>
                  <View gap={2} align="center" padding={3}>
                    <Upload size={28} className="opacity-50" />
                    <span className="text-sm">Upload project files</span>
                  </View>
                </FileUpload>
              </View>
              <Button type="submit" variant="solid" color="primary">
                Submit Project
              </Button>
            </View>
          </form>
        </Card>
      </View>
    </View>
  )
}
