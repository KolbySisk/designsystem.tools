import { ReactNode } from 'react'

export type FeatureFeature = {
  title: string
  description: ReactNode
}

export type Resource = {
  title: string
  link: string
}

export type Feature = {
  id: string
  title: string
  icon: ReactNode
  description: ReactNode
  features: FeatureFeature[]
  tools?: Resource[]
  articles?: Resource[]
}
