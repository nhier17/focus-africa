"use client";

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SERVICE_LINKS } from "@/constants";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/utils";
import * as z from "zod";

type FormValues = z.infer<typeof formSchema>;

const WHATSAPP_NUMBER = "254706193987";

const ContactForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            organization: "",
            service: "",
            message: "",
        },
        mode: "onBlur",
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(data: FormValues) {
        try {
            const whatsappMessage = [
                "Hello Focus Africa Leadership,",
                "",
                "I would like to make an inquiry.",
                "",
                `Full Name: ${data.fullName}`,
                `Email: ${data.email}`,
                `Organization: ${data.organization}`,
                `Service of Interest: ${data.service}`,
                "",
                "Message:",
                data.message,
                "",
                "Sent through the Focus Africa Leadership website.",
            ].join("\n");

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                whatsappMessage
            )}`;

            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );

            toast.success("Inquiry prepared successfully", {
                description:
                    "WhatsApp has opened with your message. Please send it to complete your inquiry.",
            });

            form.reset();
        } catch (error) {
            console.error("WhatsApp inquiry failed:", error);

            toast.error("Something went wrong", {
                description:
                    "We couldn't prepare your WhatsApp message. Please try again.",
            });
        }
    }

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
            className="w-full"
        >
            <FieldGroup className="gap-5">
                {/* =================================================
                    FULL NAME + EMAIL
                ================================================== */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Controller
                        name="fullName"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                data-invalid={fieldState.invalid}
                            >
                                <FieldLabel
                                    htmlFor="contact-full-name"
                                    className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted"
                                >
                                    Full Name{" "}
                                    <span className="text-coral">
                                        *
                                    </span>
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id="contact-full-name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    autoComplete="name"
                                    aria-invalid={fieldState.invalid}
                                    disabled={isSubmitting}
                                    className="h-13 rounded-xl border-border bg-cream/50 px-4 text-foreground shadow-none placeholder:text-brand-muted/60 focus-visible:border-coral focus-visible:ring-2 focus-visible:ring-coral/10"
                                />

                                {fieldState.invalid && (
                                    <FieldError
                                        errors={[
                                            fieldState.error,
                                        ]}
                                    />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                data-invalid={fieldState.invalid}
                            >
                                <FieldLabel
                                    htmlFor="contact-email"
                                    className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted"
                                >
                                    Email Address{" "}
                                    <span className="text-coral">
                                        *
                                    </span>
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id="contact-email"
                                    type="email"
                                    placeholder="jane@organization.com"
                                    autoComplete="email"
                                    aria-invalid={fieldState.invalid}
                                    disabled={isSubmitting}
                                    className="h-13 rounded-xl border-border bg-cream/50 px-4 text-foreground shadow-none placeholder:text-brand-muted/60 focus-visible:border-coral focus-visible:ring-2 focus-visible:ring-coral/10"
                                />

                                {fieldState.invalid && (
                                    <FieldError
                                        errors={[
                                            fieldState.error,
                                        ]}
                                    />
                                )}
                            </Field>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Controller
                        name="organization"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                data-invalid={fieldState.invalid}
                            >
                                <FieldLabel
                                    htmlFor="contact-organization"
                                    className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted"
                                >
                                    Organization{" "}
                                    <span className="text-coral">
                                        *
                                    </span>
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id="contact-organization"
                                    type="text"
                                    placeholder="Your company or organization"
                                    autoComplete="organization"
                                    aria-invalid={fieldState.invalid}
                                    disabled={isSubmitting}
                                    className="h-13 rounded-xl border-border bg-cream/50 px-4 text-foreground shadow-none placeholder:text-brand-muted/60 focus-visible:border-coral focus-visible:ring-2 focus-visible:ring-coral/10"
                                />

                                {fieldState.invalid && (
                                    <FieldError
                                        errors={[
                                            fieldState.error,
                                        ]}
                                    />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="service"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                data-invalid={fieldState.invalid}
                            >
                                <FieldLabel
                                    htmlFor="contact-service"
                                    className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted"
                                >
                                    Service of Interest{" "}
                                    <span className="text-coral">
                                        *
                                    </span>
                                </FieldLabel>

                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isSubmitting}
                                >
                                    <SelectTrigger
                                        id="contact-service"
                                        aria-invalid={
                                            fieldState.invalid
                                        }
                                        className="h-13 w-full rounded-xl border-border bg-cream/50 px-4 text-foreground shadow-none focus:border-coral focus:ring-2 focus:ring-coral/10"
                                    >
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {SERVICE_LINKS.map(
                                            (service) => (
                                                <SelectItem
                                                    key={service}
                                                    value={service}
                                                >
                                                    {service}
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>

                                {fieldState.invalid && (
                                    <FieldError
                                        errors={[
                                            fieldState.error,
                                        ]}
                                    />
                                )}
                            </Field>
                        )}
                    />
                </div>

                <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                        >
                            <FieldLabel
                                htmlFor="contact-message"
                                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted"
                            >
                                Message{" "}
                                <span className="text-coral">
                                    *
                                </span>
                            </FieldLabel>

                            <InputGroup className="rounded-xl border-border bg-cream/50 shadow-none focus-within:border-coral focus-within:ring-2 focus-within:ring-coral/10">
                                <InputGroupTextarea
                                    {...field}
                                    id="contact-message"
                                    placeholder="Tell us about your project or inquiry..."
                                    rows={6}
                                    className="min-h-40 resize-none border-0 bg-transparent px-4 pt-4 text-foreground placeholder:text-brand-muted/60 focus-visible:ring-0"
                                    aria-invalid={
                                        fieldState.invalid
                                    }
                                    disabled={isSubmitting}
                                />

                                <InputGroupAddon align="block-end">
                                    <InputGroupText className="text-brand-muted/60 tabular-nums">
                                        {field.value.length} characters
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>

                            {fieldState.invalid && (
                                <FieldError
                                    errors={[
                                        fieldState.error,
                                    ]}
                                />
                            )}
                        </Field>
                    )}
                />

                <div className="pt-1">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-coral px-7 text-sm font-semibold text-cream shadow-sm transition-all duration-300 hover:gap-3 hover:bg-coral/90 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4 focus-visible:ring-offset-card active:scale-[0.98] md:w-auto"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                    aria-hidden="true"
                                />
                                Preparing...
                            </>
                        ) : (
                            <>
                                Send Inquiry on WhatsApp
                                <ArrowRight
                                    size={16}
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                />
                            </>
                        )}
                    </Button>
                </div>

                <p className="text-xs leading-6 text-brand-muted/70">
                    Your message will open in WhatsApp for you
                    to review and send.
                </p>
            </FieldGroup>
        </form>
    );
};

export default ContactForm;