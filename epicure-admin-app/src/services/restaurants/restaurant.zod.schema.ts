import { z } from "zod";

export const formSchema = z.object({
  chefId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId"),

  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50),

  description: z
    .string()
    .min(2, { message: "Description is required" })
    .max(500),

  imgUrl: z
    .string()
    .url({ message: "Image URL must be a valid URL" }),

  rating: z
    .number()
    .min(0, { message: "Rating must be at least 0" })
    .max(5, { message: "Rating must be at most 5" }),

  openingTime: z
    .string()
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Opening time must be in HH:mm format"),

  closingTime: z
    .string()
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Closing time must be in HH:mm format"),

  foundedDate: z
    .string()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      { message: "Founded date must be a valid date string" }
    ),
}).partial(); 
