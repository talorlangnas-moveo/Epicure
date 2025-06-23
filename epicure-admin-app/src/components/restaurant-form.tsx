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
  strictSchema,
  partialSchema,
} from "@/services/restaurants/restaurant.zod.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateRestaurant,
  createRestaurant,
} from "@services/restaurants/restaurants.api";
import { Restaurant } from "@/types/interfaces/restaurant";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { EntityForm } from "@/types/entityForm";

export const RestaurantsForm: EntityForm<RestaurantColumn> = ({
  entity,
  mode,
  setIsOpen,
  onEdit,
  onAdd,
}) => {
  const restaurant = entity;
  const schema = mode === "create" ? strictSchema : partialSchema;
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const restaurantData = values as Partial<Restaurant>;
    console.log("restaurantData: ",restaurantData);
    if (mode === "update" && restaurant) {
      console.log("enter to update: ",restaurantData);
      try {
        if (onEdit) {
          await onEdit(restaurant, restaurantData);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    } else if (mode === "create") {
      console.log("enter to create: ",restaurantData);
      try {
        if (onAdd) {
          await onAdd(restaurantData);
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
                name="imgUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      {mode === "create" ? (
                        <Input placeholder="Image URL" {...field} />
                      ) : (
                        <Input placeholder={restaurant?.imgUrl} {...field} />
                      )}
                    </FormControl>
                    <FormDescription>
                      Enter the URL of the image you want to use.
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
                    <FormLabel>Restaurant Name</FormLabel>
                    <FormControl>
                      {mode === "create" ? (
                        <Input placeholder="Restaurant Name" {...field} />
                      ) : (
                        <Input placeholder={restaurant?.name} {...field} />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chefId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chef ID</FormLabel>
                    <FormControl>
                      {mode === "create" ? (
                        <Input placeholder="Chef ID" {...field} />
                      ) : (
                        <Input placeholder={restaurant?.chefId} {...field} />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        max={5}
                        placeholder={
                          mode === "create"
                            ? "Rating"
                            : restaurant?.rating.toString()
                        }
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
                      <FormLabel>Opening Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      {restaurant && (
                        <FormDescription>
                          Opening time: {restaurant.openingTime.toString()}
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="closingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Closing Time</FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          placeholder="Closing Time"
                          {...field}
                        />
                      </FormControl>
                      {restaurant && (
                        <FormDescription>
                          Closing time: {restaurant.closingTime.toString()}
                        </FormDescription>
                      )}
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
                    <FormLabel>Founded Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Founded Date"
                        {...field}
                      />
                    </FormControl>
                    {restaurant && (
                      <FormDescription>
                        Founded Date:{" "}
                        {restaurant.foundedDate.toString().split("T")[0]}
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">
                {mode === "create" ? "Create Restaurant" : "Edit Restaurant"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};
