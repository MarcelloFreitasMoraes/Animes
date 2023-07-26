import { ReactChild } from 'react'
export interface PagComponentProps {
    action?: () => void
    image?: string
    total: number
    offset: number
    setOffset: React.Dispatch<SetStateAction<number>>
}
