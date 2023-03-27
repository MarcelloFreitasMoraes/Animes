import { ReactChild } from "react"

export interface PagComponentProps {
    action?: () => void
    image?: string
  total: any
  offset: any
  setOffset: any
}