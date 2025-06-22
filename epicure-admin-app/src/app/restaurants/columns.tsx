"use client"

import { RestaurantColumn } from "@/types/columns/restaurant.column"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<RestaurantColumn>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      const imageUrl = row.getValue<string>("image")
      const name = row.getValue<string>("name")
  
      return (
        <Avatar>
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
          </div>
        )
      },
      cell: ({ row }) => {
        return (
          <div className="text-center">{row.getValue("name")}</div>
        )
      },
  },
  {
    accessorKey: "chefName",
    header: () => (
      <div className="text-center">Chef</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.getValue("chefName")}</div>
      )
    },
  },
  {
    accessorKey: "rating",
    header: () => (
      <div className="text-center">Rating</div>
    ),
    cell: ({ row }) => {
      const rating = row.getValue<number>("rating")
      return (
        <div className="flex items-center gap-1 justify-center">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          {rating}
        </div>
      )
    },
  },
  {
    accessorKey: "openingTime",
    header: () => (
      <div className="text-center">Opening Time</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.getValue("openingTime")}</div>
      )
    },
  },
  {
    accessorKey: "closingTime",
    header: () => (
      <div className="text-center">Closing Time</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.getValue("closingTime")}</div>
      )
    },
  },
  {
    accessorKey: "foundedDate",
    header: () => (
      <div className="text-center">Founded Date</div>
    ),
    cell: ({ row }) => {
      const rawDate = row.original.foundedDate
      const date = new Date(rawDate)
      const formatted = date.toLocaleDateString("en-GB")
  
      return <div className="text-center">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {

      return (
        <div className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus-visible:ring-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
          <DropdownMenuLabel className="font-bold">Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log(row.original.name)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log(row.original.name)} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      )
    },
  },
]