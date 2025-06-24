"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {
  fullFormSchema,
  partialFormSchema,
} from "@/services/dishes/dish.zod.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DishColumn } from "@/types/columns/dish.column";
import { EntityForm } from "@/types/entityForm";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const DishForm: EntityForm<DishColumn> = ({
  entity,
  mode,
  setIsOpen,
  onEdit,
  onAdd,
}) => {
  const dish = entity;
  const schema = mode === "create" ? fullFormSchema : partialFormSchema;
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      mode === "create"
        ? {
            name: "",
            restaurantId: "",
            description: "",
            imgUrl: "",
            price: "",
            dishCategory: "none",
          }
        : {
            name: dish?.name,
            restaurantId: dish?.restaurantId,
            description: dish?.description,
            imgUrl: dish?.imgUrl,
            price: dish?.price?.toString(),
            dishCategory: dish?.dishCategory,
          },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const dishData = {
      ...values,
      price: values.price?.toString() || "0",
      dishCategory: values.dishCategory || "none",
    };

    if (mode === "update" && dish) {
      try {
        if (onEdit) {
          await onEdit(dish, dishData);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    } else if (mode === "create") {
      try {
        if (onAdd) {
          await onAdd(dishData);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    }
  }


  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
        >
          <div className="p-8 pb-6">
            <div>
              <Link href="/" aria-label="go home">
                <Image
                  src="/epicure-logo.svg"
                  alt="Epicure Logo"
                  width={42}
                  height={42}
                />
              </Link>
              <h1 className="text-title mb-1 mt-4 text-xl font-semibold">
                {mode === "create" ? "Create Dish" : `Edit ${dish?.name} Dish`}
              </h1>
              <p className="text-sm">Modify the fields you want to update</p>
            </div>

            <hr className="my-4 border-dashed" />

            <div className="space-y-5">
              <FormField
                control={form.control}
                name="imgUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Image URL" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the URL of the image you want to use (must end with
                      .png)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dish Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Dish Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="restaurantId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Restaurant ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Dish Description" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a description for the dish (2-500 characters)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <div className="space-y-4">
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder="Price"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormControl>
                        <Slider
                          defaultValue={[0]}
                          max={1000}
                          step={1}
                          value={[parseFloat(field.value || "0")]}
                          onValueChange={(values) => {
                            field.onChange(values[0].toString());
                          }}
                          className="[&>[data-slot=slider-track]]:bg-gray-300"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dishCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dish Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          <SelectItem value="spicy">Spicy</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the dietary category for this dish
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {mode === "create" ? "Create Dish" : "Edit Dish"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};
