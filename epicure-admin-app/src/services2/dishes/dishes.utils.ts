import { Flame, Leaf, Salad, Utensils } from "lucide-react"
import { LucideIcon } from "lucide-react"

type DishCategoryInfo = {
  icon: LucideIcon
  className: string
}

export function getDishCategoryIcon(category?: string): DishCategoryInfo {
  switch (category) {
    case "spicy":
      return { icon: Flame, className: "text-red-500" }
    case "vegan":
      return { icon: Leaf, className: "text-green-600" }
    case "vegetarian":
      return { icon: Salad, className: "text-lime-600" }
    default:
      return { icon: Utensils, className: "text-gray-400" }
  }
}
