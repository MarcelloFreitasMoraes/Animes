import { ReactChild } from "react"

export interface PagComponentProps {
    action?: () => void
    image?: string
    limit: any
  total: any
  offset: any
  setOffset: any
}