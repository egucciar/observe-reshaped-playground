import React from 'react'
import {
  Card as ReshapedCard,
  type CardProps as ReshapedCardProps,
  classNames,
} from 'reshaped'
import styles from './Card.module.css'

export type CardProps = ReshapedCardProps

const Card = ({ className, ...rest }: CardProps) => {
  const combinedClassName = classNames(styles.root, className)
  return <ReshapedCard {...(rest as any)} className={combinedClassName} />
}

export { Card }
