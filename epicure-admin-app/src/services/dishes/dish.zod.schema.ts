import { z } from "zod";

export const fullFormSchema = z.object({
    restaurantId: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId"),

    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(50),

    description: z
        .string()
        .min(2, { message: "Description must be at least 2 characters" })
        .max(500),

    imgUrl: z
        .string()
        .regex(/\.png$/, {
            message: "Image must be a .png file",
        }),

    price: z
        .string()
        .min(0, { message: "Price must be at least 0" }),

    dishCategory: z
        .enum(['spicy', 'vegetarian', 'vegan', 'none'], {
            required_error: "Category is required",
        }).optional(),
});

export const partialFormSchema = fullFormSchema.partial();




