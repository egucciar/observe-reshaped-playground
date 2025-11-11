import React from 'react'
import {
  Card as ReshapedCard,
  type CardProps as ReshapedCardProps,
  classNames,
} from 'reshaped'
import styles from './Card.module.css'

export interface CardProps extends ReshapedCardProps {}

const Card = ({ className, ...props }: CardProps) => {
  return <ReshapedCard {...props} className={classNames(styles.root, className)} />
}

export { Card }
