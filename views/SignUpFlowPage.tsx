'use client'

import { View } from '../components/View'
import { ImageCarousel } from '../components/ImageCarousel'
import { SignUpForm } from '../components/SignUpForm'
import styles from './SignUpFlowPage.module.css'

export function SignUpFlowPage() {
  return (
    <div className={styles.container}>
      {/* Left Panel - Image Carousel (hidden on mobile) */}
      <div className={styles.carouselPanel}>
        <ImageCarousel />
      </div>

      {/* Right Panel - Sign Up Form */}
      <div className={styles.formPanel}>
        <SignUpForm />
      </div>
    </div>
  )
}
