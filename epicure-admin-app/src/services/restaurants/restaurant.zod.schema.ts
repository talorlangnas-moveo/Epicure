import { z } from "zod";

export const fullFormSchema = z.object({
  chef: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Please select a chef.").optional(),

  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50),

  imgFile: z
    .instanceof(File, { message: "Please select an image file" })
    .refine((file) => file.size <= 5000000, { message: "File size must be less than 5MB" })
    .refine(
      (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
      { message: "Only .jpg, .jpeg, and .png files are accepted" }
    ).optional(),

  rating: z
    .string()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),

  openingTime: z
    .string()
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Opening time must be in HH:mm format"),

  closingTime: z
    .string()
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Closing time must be in HH:mm format"),

  foundedDate: z
    .string()
    .nonempty({ message: "Founded date is required" })
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      { message: "Founded date must be a valid date string" }
    ),
});

export const partialFormSchema = fullFormSchema.partial();




