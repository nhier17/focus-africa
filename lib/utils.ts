export { cn } from "cn";
import { z } from "zod";

export const formSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, "Full name is required"),

    email: z
        .string()
        .trim()
        .min(1, "Email address is required")
        .email("Please enter a valid email address"),

    organization: z
        .string()
        .trim()
        .min(1, "Organization is required"),

    service: z
        .string()
        .min(1, "Please select a service"),

    message: z
        .string()
        .trim()
        .min(10, "Message should be at least 10 characters"),
});