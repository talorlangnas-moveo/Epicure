import { LucideIcon } from "lucide-react"

export interface CardItem {
  title: string
  content: string
  href: string
  count?: number
  icon: LucideIcon
}
