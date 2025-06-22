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
import { formSchema } from "@/services/restaurants/restaurant.zod.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Restaurant } from "@/types/interfaces/restaurant";
import { updateRestaurant } from "@services/restaurants/restaurants.api";
import { useRouter } from "next/navigation";

interface RestaurantFormProps {
  restaurant: Restaurant;
}

export default function RestaurantsForm({ restaurant }: RestaurantFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const partialRestaurant = values as Partial<Restaurant>;
    const res = await updateRestaurant(restaurant._id, partialRestaurant);
    if (res) {
      router.push("/restaurants");
    }
    console.log(res);
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
                Edit {restaurant.name} Restaurant
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
                      <Input placeholder={restaurant.imgUrl} {...field} />
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
                      <Input placeholder={restaurant.name} {...field} />
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
                      <Input placeholder={restaurant.chefId} {...field} />
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
                        min={0}
                        max={5}
                        placeholder={restaurant.rating.toString()}
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
                      <FormDescription>
                        Opening time: {restaurant.openingTime.toString()}
                      </FormDescription>
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
                      <FormDescription>
                        Closing time: {restaurant.closingTime.toString()}
                      </FormDescription>
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
                    <FormDescription>
                      Founded Date:{" "}
                      {restaurant.foundedDate.toString().split("T")[0]}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Link href="/restaurants"> */}
                <Button className="w-full">Edit Restaurant</Button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
