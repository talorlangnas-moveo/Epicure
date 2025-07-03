import { z } from "zod";

export const fullFormSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "First Name must be at least 2 characters" })
        .max(20, { message: "First Name must be less than 20 characters" }),

    lastName: z
        .string()
        .min(2, { message: "Last Name must be at least 2 characters" })
        .max(20, { message: "Last Name must be less than 20 characters" }),

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
        ).optional(),

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




