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
import { useEntityContext } from "@/components/entityContext";
import { Dish } from "@/types/interfaces/dish";
import { createDish, updateDish } from "@/services/dishes/dishes.api";
import { convertDishToCulomn } from "@/services/dishes/dishes.utils";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/utils/constants";

export const DishForm: EntityForm<DishColumn> = ({
  entity,
  mode,
  setIsOpen,
}) => {
  const dish = entity;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { onEdit, onAdd, selectItemMap } = useEntityContext<DishColumn, Dish>();
  const schema = mode === "create" ? fullFormSchema : partialFormSchema;
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      mode === "create"
        ? {
            name: "",
            restaurantId: "",
            description: "",
            imgFile: undefined,
            price: "",
            dishCategory: "none",
          }
        : {
            name: dish?.name,
            restaurantId: dish?.restaurantId,
            description: dish?.description,
            imgFile: dish?.imgFile,
            price: dish?.price?.toString(),
            dishCategory: dish?.dishCategory,
          },
  });

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  async function onSubmit(values: z.infer<typeof schema>) {
    const dishData = {
      ...values,
      price: values.price?.toString() || "0",
      dishCategory: values.dishCategory || "none",
    };

    if (mode === "update" && dish) {
      try {
        if (onEdit) {
          await onEdit(dish, dishData, updateDish, convertDishToCulomn);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    } else if (mode === "create") {
      try {
        if (onAdd) {
          await onAdd(dishData, createDish, convertDishToCulomn);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    }
  }


  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-4 dark:bg-transparent">
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
                name="imgFile"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Dish Image</FormLabel>
                    {(previewUrl || (mode === "update" && dish?.imgUrl)) && (
                      <>
                        <p className="text-center text-sm text-muted-foreground">Preview Image:</p>
                        <div className="mb-4 flex justify-center">
                          <Image
                            src={previewUrl || `${API_BASE_URL}/${dish?.imgUrl}`}
                            alt={dish?.name || "Preview"}
                            width={150}
                            height={150}
                            className="rounded-md object-cover"
                          />
                        </div>
                      </>
                    )}
                    <FormControl>
                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            if (previewUrl) {
                              URL.revokeObjectURL(previewUrl);
                            }
                            const newPreviewUrl = URL.createObjectURL(file);
                            setPreviewUrl(newPreviewUrl);
                            onChange(file);
                          }
                        }}
                        className="file:hidden before:content-[''] before:mr-2 before:inline-block pt-1.5"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Select an image file (PNG, JPG, or JPEG, max 5MB)
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
                  <FormLabel>Restaurant</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Restaurant" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                      <SelectLabel>Restaurant List</SelectLabel>
                        {selectItemMap?.map(item => (
                          <SelectItem key={item._id} value={item._id}>{item.name}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                  Select the restaurant the dish belongs to.
                  </FormDescription>
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
