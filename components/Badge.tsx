'use client'

import React from 'react'
import {
  Badge as ReshapedBadge,
  type BadgeProps as ReshapedBadgeProps,
  classNames,
} from 'reshaped'
import styles from './Badge.module.css'

export type BadgeProps = ReshapedBadgeProps

export const Badge = (props: BadgeProps) => {
  return <ReshapedBadge {...props} className={classNames(styles.root, props.className)} />
}
