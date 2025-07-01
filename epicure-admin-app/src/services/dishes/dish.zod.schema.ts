import { z } from "zod";

export const fullFormSchema = z.object({
    restaurantId: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/, "Please select a restaurant.").optional(),

    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(50),

    description: z
        .string()
        .min(2, { message: "Description must be at least 2 characters" })
        .max(500),

    imgFile: z
        .instanceof(File, { message: "Please select an image file" })
        .refine((file) => file.size <= 5000000, { message: "File size must be less than 5MB" })
        .refine(
            (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
            { message: "Only .jpg, .jpeg, and .png files are accepted" }
        ),

    price: z
        .string()
        .min(0, { message: "Price must be at least 0" }),

    dishCategory: z
        .enum(['spicy', 'vegetarian', 'vegan', 'none'], {
            required_error: "Category is required",
        }).optional(),
});

export const partialFormSchema = fullFormSchema.partial();




