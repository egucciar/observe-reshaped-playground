'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Home, Folder, FileText, Package, ShoppingCart, User, Settings } from 'lucide-react'

export function BreadcrumbsPage() {
  const [currentPath, setCurrentPath] = useState('ultraboost')

  const handleNavigation = (path: string) => {
    setCurrentPath(path)
    console.log(`Navigating to: ${path}`)
  }

  return (
    <View padding={4} gap={4}>
      <h1 className="text-2xl font-bold">Breadcrumbs Component</h1>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Basic Breadcrumbs</h2>
        <Breadcrumbs>
          <Breadcrumbs.Item onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('catalog')}>Catalog</Breadcrumbs.Item>
          <Breadcrumbs.Item>Ultraboost</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Primary Color</h2>
        <Breadcrumbs color="primary">
          <Breadcrumbs.Item onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('products')}>Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Running Shoes</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">With Icons</h2>
        <Breadcrumbs>
          <Breadcrumbs.Item icon={Home} onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={Folder} onClick={() => handleNavigation('documents')}>Documents</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={FileText}>Report.pdf</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">E-commerce Navigation</h2>
        <Breadcrumbs color="primary">
          <Breadcrumbs.Item icon={Home} onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={ShoppingCart} onClick={() => handleNavigation('shop')}>Shop</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('electronics')}>Electronics</Breadcrumbs.Item>
          <Breadcrumbs.Item>Laptops</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Collapsible Breadcrumbs (Long Path)</h2>
        <Breadcrumbs defaultVisibleItems={2}>
          <Breadcrumbs.Item onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('catalog')}>Catalog</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('shoes')}>Shoes</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('running')}>Running</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('mens')}>Men's</Breadcrumbs.Item>
          <Breadcrumbs.Item>Ultraboost 22</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Collapsible with Icons</h2>
        <Breadcrumbs defaultVisibleItems={3} color="primary">
          <Breadcrumbs.Item icon={Home} onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={Folder} onClick={() => handleNavigation('projects')}>Projects</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('2024')}>2024</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('q1')}>Q1</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('reports')}>Reports</Breadcrumbs.Item>
          <Breadcrumbs.Item>Annual Review</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">With Disabled Items</h2>
        <Breadcrumbs>
          <Breadcrumbs.Item onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item disabled>Restricted Area</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Settings Navigation</h2>
        <Breadcrumbs color="primary">
          <Breadcrumbs.Item icon={Settings} onClick={() => handleNavigation('settings')}>Settings</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={User} onClick={() => handleNavigation('account')}>Account</Breadcrumbs.Item>
          <Breadcrumbs.Item>Privacy</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">File System Navigation</h2>
        <Breadcrumbs>
          <Breadcrumbs.Item icon={Home} onClick={() => handleNavigation('root')}>Root</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={Folder} onClick={() => handleNavigation('users')}>Users</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={Folder} onClick={() => handleNavigation('john')}>John</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={Folder} onClick={() => handleNavigation('documents')}>Documents</Breadcrumbs.Item>
          <Breadcrumbs.Item icon={FileText}>Project.docx</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Product Categories</h2>
        <Breadcrumbs>
          <Breadcrumbs.Item icon={Package} onClick={() => handleNavigation('products')}>Products</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('clothing')}>Clothing</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('mens')}>Men's</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('shirts')}>Shirts</Breadcrumbs.Item>
          <Breadcrumbs.Item>Blue Oxford Shirt</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Deep Hierarchy (Show 3 Items)</h2>
        <Breadcrumbs defaultVisibleItems={3}>
          <Breadcrumbs.Item onClick={() => handleNavigation('level1')}>Level 1</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('level2')}>Level 2</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('level3')}>Level 3</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('level4')}>Level 4</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('level5')}>Level 5</Breadcrumbs.Item>
          <Breadcrumbs.Item onClick={() => handleNavigation('level6')}>Level 6</Breadcrumbs.Item>
          <Breadcrumbs.Item>Level 7</Breadcrumbs.Item>
        </Breadcrumbs>
      </View>

      <View gap={3}>
        <h2 className="text-xl font-semibold">Interactive Example</h2>
        <View gap={2}>
          <Breadcrumbs color="primary">
            <Breadcrumbs.Item icon={Home} onClick={() => handleNavigation('home')}>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item onClick={() => handleNavigation('catalog')}>Catalog</Breadcrumbs.Item>
            <Breadcrumbs.Item>{currentPath}</Breadcrumbs.Item>
          </Breadcrumbs>
          <View padding={2} className="bg-gray-100 dark:bg-gray-800 rounded">
            <span className="text-sm">Current location: {currentPath}</span>
          </View>
        </View>
      </View>
    </View>
  )
}
