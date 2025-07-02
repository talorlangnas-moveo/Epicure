import { z } from "zod";

export const fullFormSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "First Name must be at least 2 characters" })
        .max(50),

    lastName: z
        .string()
        .min(2, { message: "Last Name must be at least 2 characters" })
        .max(50),

    description: z
        .string()
        .min(2, { message: "Description must be at least 2 characters" })
        .max(500),

    imgUrl: z
        .string()
        .regex(/\.png$/, {
            message: "Image must be a .png file",
        }).optional(),

    foundedDate: z
        .string()
        .refine(
            (val) => !val || !isNaN(Date.parse(val)),
            { message: "Founded date must be a valid date string" }
        ),

    numberOfViews: z
        .string()
        .min(0, { message: "Number of views must be at least 0" }),

});

export const partialFormSchema = fullFormSchema.partial();




