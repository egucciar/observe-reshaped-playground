'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Pagination } from '../components/Pagination'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'

export function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [tablePage, setTablePage] = useState(1)
  const [searchPage, setSearchPage] = useState(1)
  const [galleryPage, setGalleryPage] = useState(1)
  const [blogPage, setBlogPage] = useState(1)

  const itemsPerPage = 10
  const totalItems = 95
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const tableData = Array.from({ length: itemsPerPage }, (_, i) => ({
    id: (tablePage - 1) * itemsPerPage + i + 1,
    name: `Item ${(tablePage - 1) * itemsPerPage + i + 1}`,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'
  }))

  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">Pagination Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Pagination</h2>
        <Card padding={4}>
          <View gap={3} align="center">
            <Pagination
              total={10}
              defaultPage={1}
              previousAriaLabel="Previous page"
              nextAriaLabel="Next page"
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Different Page Counts</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">5 Pages</span>
              <View align="center">
                <Pagination
                  total={5}
                  defaultPage={1}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">15 Pages</span>
              <View align="center">
                <Pagination
                  total={15}
                  defaultPage={1}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">50 Pages</span>
              <View align="center">
                <Pagination
                  total={50}
                  defaultPage={1}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">100 Pages</span>
              <View align="center">
                <Pagination
                  total={100}
                  defaultPage={1}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Starting at Different Pages</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <span className="text-sm font-semibold">Starting at Page 1</span>
              <View align="center">
                <Pagination
                  total={20}
                  defaultPage={1}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Starting at Page 5</span>
              <View align="center">
                <Pagination
                  total={20}
                  defaultPage={5}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Starting at Page 10</span>
              <View align="center">
                <Pagination
                  total={20}
                  defaultPage={10}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
            <View gap={2}>
              <span className="text-sm font-semibold">Starting at Last Page (20)</span>
              <View align="center">
                <Pagination
                  total={20}
                  defaultPage={20}
                  previousAriaLabel="Previous page"
                  nextAriaLabel="Next page"
                />
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Controlled Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" gap={2} align="center" justify="center">
              <span className="text-sm font-semibold">Current Page:</span>
              <Badge color="primary">{currentPage}</Badge>
            </View>
            <View align="center">
              <Pagination
                total={10}
                page={currentPage}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
                onChange={(args) => setCurrentPage(args.page)}
              />
            </View>
            <View direction="row" gap={2} justify="center" wrap>
              <Button variant="outline" size="small" onClick={() => setCurrentPage(1)}>
                First Page
              </Button>
              <Button variant="outline" size="small" onClick={() => setCurrentPage(5)}>
                Page 5
              </Button>
              <Button variant="outline" size="small" onClick={() => setCurrentPage(10)}>
                Last Page
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Data Table with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View className="border rounded overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold">ID</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Name</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id} className="border-b last:border-b-0">
                      <td className="px-4 py-3 text-sm">{item.id}</td>
                      <td className="px-4 py-3 text-sm">{item.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge
                          color={
                            item.status === 'Active'
                              ? 'positive'
                              : item.status === 'Pending'
                              ? 'warning'
                              : 'neutral'
                          }
                        >
                          {item.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </View>
            <View direction="row" justify="space-between" align="center">
              <span className="text-sm opacity-70">
                Showing {(tablePage - 1) * itemsPerPage + 1} - {Math.min(tablePage * itemsPerPage, totalItems)} of {totalItems} items
              </span>
              <Pagination
                total={totalPages}
                page={tablePage}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
                onChange={(args) => setTablePage(args.page)}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Search Results with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={1}>
              <span className="text-lg font-semibold">Search Results for "example"</span>
              <span className="text-sm opacity-70">About 247 results</span>
            </View>
            <View gap={3}>
              {Array.from({ length: 5 }).map((_, i) => (
                <View key={i} gap={1} className="border-b pb-3 last:border-b-0">
                  <span className="text-sm font-semibold text-blue-600">
                    Result Title {(searchPage - 1) * 5 + i + 1}
                  </span>
                  <span className="text-xs opacity-70">
                    https://example.com/page/{(searchPage - 1) * 5 + i + 1}
                  </span>
                  <span className="text-sm">
                    This is a sample search result description that provides context about the page content...
                  </span>
                </View>
              ))}
            </View>
            <View align="center">
              <Pagination
                total={50}
                page={searchPage}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
                onChange={(args) => setSearchPage(args.page)}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Image Gallery with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <View
                  key={i}
                  className="aspect-square bg-gray-200 rounded flex items-center justify-center"
                >
                  <span className="text-sm opacity-50">
                    Image {(galleryPage - 1) * 9 + i + 1}
                  </span>
                </View>
              ))}
            </View>
            <View align="center">
              <Pagination
                total={15}
                page={galleryPage}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
                onChange={(args) => setGalleryPage(args.page)}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Blog Posts with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={4}>
              {Array.from({ length: 3 }).map((_, i) => (
                <View key={i} gap={2} className="border-b pb-4 last:border-b-0">
                  <span className="text-lg font-semibold">
                    Blog Post Title {(blogPage - 1) * 3 + i + 1}
                  </span>
                  <span className="text-sm opacity-70">
                    Posted on January {(blogPage - 1) * 3 + i + 1}, 2024
                  </span>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
                  </p>
                  <Button variant="outline" size="small">
                    Read More
                  </Button>
                </View>
              ))}
            </View>
            <View align="center">
              <Pagination
                total={20}
                page={blogPage}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
                onChange={(args) => setBlogPage(args.page)}
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Product Listing with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View direction="row" justify="space-between" align="center">
              <span className="text-lg font-semibold">Products</span>
              <span className="text-sm opacity-70">150 products found</span>
            </View>
            <View className="grid grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} padding={3}>
                  <View gap={2}>
                    <View className="aspect-square bg-gray-200 rounded" />
                    <View gap={1}>
                      <span className="text-sm font-semibold">Product {i + 1}</span>
                      <span className="text-sm opacity-70">$29.99</span>
                    </View>
                    <Button variant="solid" color="primary" size="small" fullWidth>
                      Add to Cart
                    </Button>
                  </View>
                </Card>
              ))}
            </View>
            <View align="center">
              <Pagination
                total={25}
                defaultPage={1}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Comments Section with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <span className="text-lg font-semibold">Comments (48)</span>
            <View gap={3}>
              {Array.from({ length: 5 }).map((_, i) => (
                <View key={i} gap={2} className="border-b pb-3 last:border-b-0">
                  <View direction="row" gap={2} align="center">
                    <View className="w-8 h-8 bg-gray-300 rounded-full" />
                    <View gap={0}>
                      <span className="text-sm font-semibold">User {i + 1}</span>
                      <span className="text-xs opacity-70">2 hours ago</span>
                    </View>
                  </View>
                  <p className="text-sm">
                    This is a sample comment that demonstrates how pagination works with a comments section. Great content!
                  </p>
                </View>
              ))}
            </View>
            <View align="center">
              <Pagination
                total={10}
                defaultPage={1}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">User Directory with Pagination</h2>
        <Card padding={4}>
          <View gap={4}>
            <View gap={3}>
              {Array.from({ length: 8 }).map((_, i) => (
                <View key={i} direction="row" gap={3} align="center" className="border-b pb-3 last:border-b-0">
                  <View className="w-12 h-12 bg-gray-300 rounded-full" />
                  <View gap={1} grow>
                    <span className="font-semibold">User Name {i + 1}</span>
                    <span className="text-sm opacity-70">user{i + 1}@example.com</span>
                  </View>
                  <Badge color="positive">Active</Badge>
                </View>
              ))}
            </View>
            <View align="center">
              <Pagination
                total={30}
                defaultPage={1}
                previousAriaLabel="Previous page"
                nextAriaLabel="Next page"
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">With Custom Page Labels</h2>
        <Card padding={4}>
          <View gap={4}>
            <p className="text-sm">
              This example uses custom aria-labels for better accessibility. Each page button announces "Page X of 10" to screen readers.
            </p>
            <View align="center">
              <Pagination
                total={10}
                defaultPage={1}
                previousAriaLabel="Go to previous page"
                nextAriaLabel="Go to next page"
                pageAriaLabel={(args) => `Page ${args.page} of 10`}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
