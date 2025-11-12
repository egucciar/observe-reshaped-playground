'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { View } from './View'
import styles from './ImageCarousel.module.css'

interface Slide {
  image: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2787&auto=format&fit=crop',
    title: 'Collaborate Seamlessly',
    description:
      'Work together with your team in real-time, no matter where you are',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519217651866-847339e674d4?q=80&w=2940&auto=format&fit=crop',
    title: 'Boost Productivity',
    description:
      'Streamline your workflow with powerful tools designed for efficiency',
  },
  {
    image:
      'https://images.unsplash.com/photo-1643537243683-a61ba2e77cf1?q=80&w=2940&auto=format&fit=crop',
    title: 'Achieve Success Together',
    description:
      'Join thousands of teams already transforming the way they work',
  },
]

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <View className={styles.carousel}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <View className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{slides[currentSlide].title}</h1>
            <p className={styles.description}>
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <View className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
