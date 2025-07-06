"use client";

import { Asterisk } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {
  fullFormSchema,
  partialFormSchema,
} from "@/services/restaurants/restaurant.zod.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { EntityForm } from "@/types/entityForm";
import { useEntityContext } from "@/components/entityContext";
import { Restaurant } from "@/types/interfaces/restaurant";
import { createRestaurant, updateRestaurant } from "@/services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";
import { API_BASE_URL } from "@/utils/constants";
import { useState, useEffect } from "react";

export const RestaurantsForm: EntityForm<RestaurantColumn> = ({
  entity,
  mode,
  setIsOpen,
}) => {
  const restaurant = entity;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { onEdit, onAdd, selectItemMap } = useEntityContext<RestaurantColumn, Restaurant>();
  const schema = mode === "create" ? fullFormSchema  : partialFormSchema;
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: mode === "create" ? {
      name: "",
      chef: undefined,
      imgFile: undefined,
      rating: "",
      openingTime: "",
      closingTime: "",
      foundedDate: "",
    } : {
      name: restaurant?.name,
      chef: restaurant?.chef?._id,
      imgFile: undefined,
      rating: restaurant?.rating?.toString(),
      openingTime: restaurant?.openingTime,
      closingTime: restaurant?.closingTime,
      foundedDate: restaurant?.foundedDate?.toString().split('T')[0],
    },
    mode: "onChange",
  });

  const { formState: { isValid, isDirty } } = form;

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  async function onSubmit(values: z.infer<typeof schema>) {
    const restaurantData = {
      ...values,
      rating: values.rating?.toString() || "1",
      foundedDate: values.foundedDate ? new Date(values.foundedDate) : new Date(),
      imgFile: values.imgFile instanceof File ? values.imgFile : undefined
    };
    
    if (mode === "update" && restaurant) {
      try {
        if (onEdit) {
          await onEdit(restaurant, restaurantData as Partial<RestaurantColumn>, updateRestaurant, convertRestaurantToColumn);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    } else if (mode === "create") {
      try {
        if (onAdd) {
          await onAdd(restaurantData as Partial<RestaurantColumn>, createRestaurant, convertRestaurantToColumn);
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
                {mode === "create"
                  ? "Create Restaurant"
                  : `Edit ${restaurant?.name} Restaurant`}
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
                    <FormLabel>Restaurant Image</FormLabel>
                    {(previewUrl || (mode === "update" && restaurant?.imgUrl)) && (
                      <>
                        <p className="text-center text-sm text-muted-foreground">{mode === "update" ? "Current Image:" : "Preview Image:"}</p>
                        <div className="mb-4 flex justify-center">
                          <Image
                            src={previewUrl || `${API_BASE_URL}/${restaurant?.imgUrl}`}
                            alt={restaurant?.name || "Preview"}
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
                    <FormLabel>
                      <div className="flex items-center gap-0.5">
                        Restaurant Name
                        <Asterisk className="w-3 h-3 text-red-500" />
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Restaurant Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chef"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chef</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Chef" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Chefs List</SelectLabel>
                          {selectItemMap?.map(item => (
                            <SelectItem key={item._id} value={item._id}>{item.name}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                    Select the restaurant's chef.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-0.5">
                        Rating
                        <Asterisk className="w-3 h-3 text-red-500" />
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        max={5}
                        placeholder="Rating (1-5)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="openingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opening Time
                        <Asterisk className="w-3 h-3 text-red-500" />
                      </FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="closingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Closing Time
                        <Asterisk className="w-3 h-3 text-red-500" />
                      </FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="foundedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-0.5">
                        Founded Date
                        <Asterisk className="w-3 h-3 text-red-500" />
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={!isValid || (!isDirty && mode === "create")}
              >
                {mode === "create" ? "Create Restaurant" : "Edit Restaurant"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};
