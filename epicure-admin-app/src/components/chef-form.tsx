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
} from "@/services/chefs/chef.zod.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChefColumn } from "@/types/columns/chef.column";
import { EntityForm } from "@/types/entityForm";
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider";
import { useEntityContext } from "@/components/entityContext";
import { Chef } from "@/types/interfaces/chef";
import {
  createChef,
  updateChef,
} from "@services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";

export const ChefForm: EntityForm<ChefColumn> = ({
  entity,
  mode,
  setIsOpen,
}) => {
  const chef = entity;
  const { onEdit, onAdd } = useEntityContext<ChefColumn, Chef>();
  const schema = mode === "create" ? fullFormSchema : partialFormSchema;
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      mode === "create"
        ? {
            firstName: "",
            lastName: "",
            description: "",
            imgUrl: "",
            foundedDate: "",
            numberOfViews: "",
          }
        : {
            firstName: chef?.firstName,
            lastName: chef?.lastName,
            description: chef?.description,
            imgUrl: chef?.imgUrl,
            foundedDate: chef?.foundedDate?.toString().split("T")[0],
            numberOfViews: chef?.numberOfViews?.toString(),
          },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const chefData = {
      ...values,
      rating: values.numberOfViews?.toString() || "0",
      foundedDate: values.foundedDate
        ? new Date(values.foundedDate)
        : new Date(),
    };

    if (mode === "update" && chef) {
      try {
        if (onEdit) {
          await onEdit(chef, chefData, updateChef, convertChefToColumn);
        }
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    } else if (mode === "create") {
      try {
        if (onAdd) {
          await onAdd(chefData, createChef, convertChefToColumn);
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
                {mode === "create" ? "Create Chef" : `Edit ${chef?.name} Chef`}
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
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
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
                      <Textarea placeholder="Chef Description" {...field} />
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
                name="numberOfViews"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Views</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder="Number of Views"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="foundedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Founded Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {mode === "create" ? "Create Chef" : "Edit Chef"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};
