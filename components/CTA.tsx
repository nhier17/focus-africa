"use client";

import { useRef } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";

import { SERVICE_LINKS } from "@/constants";
import { formSchema } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FormValues = z.infer<typeof formSchema>;

const WHATSAPP_NUMBER = "254706193987";

export function Contact() {
    const root = useRef<HTMLElement>(null);

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

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) return;

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 78%",
                    once: true,
                },
                defaults: {
                    ease: "power3.out",
                },
            });

            timeline
                .from(".contact-text", {
                    y: 24,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.1,
                })
                .from(
                    ".contact-form",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.45"
                );
        },
        {
            scope: root,
        }
    );

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

            window.open(whatsappUrl, "_blank", "noopener,noreferrer");

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
        <section
            id="contact"
            ref={root}
            className="relative overflow-hidden bg-forest"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #F7F0E4 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <span className="contact-text mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                            Get in Touch
                        </span>

                        <h2 className="contact-text max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-cream text-balance sm:text-5xl lg:text-6xl">
                            Ready to unlock your{" "}
                            <span className="text-lime">potential?</span>
                        </h2>

                        <p className="contact-text mt-7 max-w-md text-base leading-8 text-cream/70 md:text-lg">
                            Let&apos;s create lasting impact through strategic
                            thinking, stronger capabilities, and meaningful
                            partnerships.
                        </p>

                        <div className="contact-text mt-10 space-y-5">
                            <a
                                href="mailto:info@focusafrica.co.ke"
                                className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4 focus-visible:ring-offset-forest"
                            >
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-full bg-lime"
                                />

                                <span>
                                    info@focusafrica.co.ke
                                </span>
                            </a>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4 focus-visible:ring-offset-forest"
                            >
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-full bg-coral"
                                />

                                <span>+254 706 193 987</span>
                            </a>
                        </div>

                        <div className="contact-text mt-12 border-t border-cream/15 pt-6">
                            <p className="max-w-sm text-sm leading-7 text-cream/55">
                                Share a little about your goals, and we&apos;ll
                                start the conversation from there.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            noValidate
                            className="contact-form rounded-2xl border border-cream/10 bg-forest-dark/45 p-6 backdrop-blur-sm md:p-8"
                        >
                            <FieldGroup>
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
                                                    className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/70"
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
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    disabled={isSubmitting}
                                                    className="form-input"
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
                                                    className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/70"
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
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    disabled={isSubmitting}
                                                    className="form-input"
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
                                                    className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/70"
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
                                                    placeholder="Your organization"
                                                    autoComplete="organization"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    disabled={isSubmitting}
                                                    className="form-input"
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
                                                    className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/70"
                                                >
                                                    Service of Interest{" "}
                                                    <span className="text-coral">
                                                        *
                                                    </span>
                                                </FieldLabel>

                                                <Select
                                                    value={field.value}
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    disabled={isSubmitting}
                                                >
                                                    <SelectTrigger
                                                        id="contact-service"
                                                        aria-invalid={
                                                            fieldState.invalid
                                                        }
                                                        className="w-full border-cream/20 bg-cream/10 text-cream focus:ring-lime/30"
                                                    >
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        {SERVICE_LINKS.map(
                                                            (service) => (
                                                                <SelectItem
                                                                    key={
                                                                        service
                                                                    }
                                                                    value={
                                                                        service
                                                                    }
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
                                                className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/70"
                                            >
                                                Message{" "}
                                                <span className="text-coral">
                                                    *
                                                </span>
                                            </FieldLabel>

                                            <InputGroup className="border-cream/20 bg-cream/10 focus-within:ring-2 focus-within:ring-lime/30">
                                                <InputGroupTextarea
                                                    {...field}
                                                    id="contact-message"
                                                    placeholder="Tell us about your project or inquiry..."
                                                    rows={6}
                                                    className="min-h-36 resize-none border-0 bg-transparent text-cream  focus-visible:ring-0"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    disabled={isSubmitting}
                                                />

                                                <InputGroupAddon align="block-end">
                                                    <InputGroupText className="text-cream/40 tabular-nums">
                                                        {field.value.length}{" "}
                                                        characters
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

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-forest transition-all duration-300 hover:gap-3 hover:bg-lime/90 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4 focus-visible:ring-offset-forest active:scale-[0.98]"
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

                                <p className="text-center text-xs leading-6 text-cream/40">
                                    Your message will open in WhatsApp for you
                                    to review and send.
                                </p>
                            </FieldGroup>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}