"use client";

import { useRef } from "react";
import Link from "next/link";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) return;

            const intro = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            intro
                .from(".contact-eyebrow", {
                    y: 18,
                    opacity: 0,
                    duration: 0.5,
                })
                .from(
                    ".contact-title",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.2"
                )
                .from(
                    ".contact-description",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.35"
                )
                .from(
                    ".contact-form",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.45"
                )
                .from(
                    ".contact-card",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.12,
                    },
                    "-=0.25"
                );

            gsap.from(".contact-detail", {
                scrollTrigger: {
                    trigger: ".contact-card",
                    start: "top 80%",
                    once: true,
                },
                y: 15,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out",
            });
        },
        {
            scope: root,
        }
    );

    return (
        <main
            ref={root}
            className="overflow-hidden bg-background"
        >
            {/* =====================================================
                CONTACT INTRO
            ====================================================== */}
            <section className="relative bg-background pb-16 pt-28 md:pb-20 md:pt-36">
                {/* Decorative shape */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/10 blur-[1px] md:h-96 md:w-96"
                />

                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <div className="relative max-w-3xl">
                        <span className="contact-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-coral">
                            Contact
                        </span>

                        <h1 className="contact-title mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em] text-foreground">
                            Let&apos;s start a{" "}
                            <span className="text-coral">
                                conversation
                            </span>
                        </h1>

                        <p className="contact-description mt-7 max-w-xl text-base leading-8 text-brand-muted md:text-lg">
                            We&apos;d love to hear about your project.
                            Reach out and let&apos;s explore how we can
                            work together.
                        </p>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTACT CARDS
            ====================================================== */}
            <section className="relative pb-20 md:pb-28">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-10">

                        {/* =================================================
                            GET IN TOUCH
                        ================================================== */}
                        <div className="contact-card relative overflow-hidden rounded-[2rem] bg-forest p-8 text-cream md:p-10 lg:p-11">
                            {/* Decorative circle */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-lime/10"
                            />

                            <div className="relative flex h-full flex-col">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                                        Get in Touch
                                    </span>

                                    <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.035em] md:text-4xl">
                                        Contact information
                                    </h2>

                                    <p className="mt-5 max-w-md text-sm leading-7 text-cream/65 md:text-base">
                                        Reach out through any of the
                                        channels below or fill out the
                                        form and we&apos;ll get back to you
                                        within 24 hours.
                                    </p>
                                </div>

                                <div className="mt-10 space-y-7">
                                    {/* Address */}
                                    <div className="contact-detail flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                                            <MapPin
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                                                Visit Us
                                            </span>

                                            <p className="mt-1.5 text-sm font-medium leading-6 text-cream md:text-base">
                                                Karson Photo House,
                                                Kimathi Way, 1st Floor,
                                                Nyeri
                                            </p>
                                        </div>
                                    </div>

                                    {/* Postal Address */}
                                    <div className="contact-detail flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                                            <MapPin
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                                                Postal Address
                                            </span>

                                            <p className="mt-1.5 text-sm font-medium text-cream md:text-base">
                                                P.O. Box 762-10100
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="contact-detail flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                                            <Phone
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                                                Call Us
                                            </span>

                                            <a
                                                href="tel:+254706193987"
                                                className="mt-1.5 block text-sm font-medium text-cream transition-colors hover:text-lime md:text-base"
                                            >
                                                0706 193 987
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="contact-detail flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                                            <Mail
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                                                Email Us
                                            </span>

                                            <a
                                                href="mailto:info@focusafrica.co.ke"
                                                className="mt-1.5 block text-sm font-medium text-cream transition-colors hover:text-lime md:text-base"
                                            >
                                                info@focusafrica.co.ke
                                            </a>
                                        </div>
                                    </div>

                                    {/* Working Hours */}
                                    <div className="contact-detail flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                                            <Clock3
                                                size={18}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                                                Working Hours
                                            </span>

                                            <p className="mt-1.5 text-sm font-medium leading-6 text-cream md:text-base">
                                                Monday to Friday,
                                                8:00am to 5:00pm
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-auto border-t border-cream/10 pt-7">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                                        Follow Us
                                    </span>

                                    <div className="mt-4 flex flex-wrap gap-6">
                                        <Link
                                            href="#"
                                            className="text-sm font-medium text-cream/80 transition-colors hover:text-lime"
                                        >
                                            Twitter
                                        </Link>

                                        <Link
                                            href="#"
                                            className="text-sm font-medium text-cream/80 transition-colors hover:text-lime"
                                        >
                                            LinkedIn
                                        </Link>

                                        <Link
                                            href="#"
                                            className="text-sm font-medium text-cream/80 transition-colors hover:text-lime"
                                        >
                                            Facebook
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            SEND A MESSAGE
                        ================================================== */}
                        <div className="contact-card rounded-[2rem] border border-border bg-card p-8 md:p-10 lg:p-11">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                                    Send a Message
                                </span>

                                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.035em] text-foreground md:text-4xl">
                                    Ready to experience our services?
                                </h2>
                            </div>

                            <div className="mt-8 contact-form">
                            <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}