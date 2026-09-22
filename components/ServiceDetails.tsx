"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import type { ServiceDetail } from "@/lib/service";
import {SERVICES} from "@/lib/service";

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailsProps {
    service: ServiceDetail;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
    const root = useRef<HTMLElement>(null);

    const currentIndex = SERVICES.findIndex(
        (item) => item.slug === service.slug
    );

    const nextService =  SERVICES[(currentIndex + 1) % SERVICES.length];

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) return;

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            timeline
                .from(".service-back", {
                    y: 15,
                    opacity: 0,
                    duration: 0.45,
                })
                .from(
                    ".service-eyebrow",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.2"
                )
                .from(
                    ".service-title-line",
                    {
                        yPercent: 100,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.25"
                )
                .from(
                    ".service-intro",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.35"
                )
                .from(
                    ".service-hero-image",
                    {
                        clipPath: "inset(0 0 100% 0)",
                        duration: 1,
                    },
                    "-=0.45"
                )
                .from(
                    ".service-hero-image img",
                    {
                        scale: 1.12,
                        duration: 1.3,
                    },
                    "<"
                );

            gsap.from(".service-offering", {
                scrollTrigger: {
                    trigger: ".service-offerings",
                    start: "top 78%",
                    once: true,
                },
                y: 25,
                opacity: 0,
                duration: 0.55,
                stagger: 0.08,
                ease: "power3.out",
            });

            gsap.from(".service-approach", {
                scrollTrigger: {
                    trigger: ".service-approach",
                    start: "top 80%",
                    once: true,
                },
                y: 25,
                opacity: 0,
                duration: 0.7,
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
            <section className="relative bg-background pb-16 pt-28 md:pb-24 md:pt-36">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Link
                        href="/#services"
                        className="service-back group mb-12 inline-flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-forest dark:hover:text-lime md:mb-16"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        Back to services
                    </Link>

                    <div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <div>
                            <div className="service-eyebrow mb-6 flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-px w-10 bg-coral"
                                />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest dark:text-lime">
                                    Service {service.number}
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <h1 className="service-title-line font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.055em] text-foreground">
                                    {service.title}
                                </h1>
                            </div>

                            <p className="service-intro mt-7 max-w-xl text-base leading-8 text-brand-muted md:text-lg">
                                {service.tagline}
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-lime/30" />

                            <div className="service-hero-image relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-forest p-1.5 shadow-2xl shadow-forest/10 md:p-2">
                                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent"
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-5 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-sm font-bold text-cream shadow-xl">
                                {service.number}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-border bg-cream/40 dark:bg-card/30">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                            Our Approach
                        </span>

                        <h2 className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight tracking-[-0.035em] text-foreground md:text-4xl">
                            Expertise grounded in the realities of Africa.
                        </h2>
                    </div>

                    <div className="service-approach">
                        <p className="service-approach max-w-3xl text-lg leading-8 text-brand-muted md:text-xl md:leading-9">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="service-offerings bg-background section-padding">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <div className="mb-12 max-w-2xl md:mb-16">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                            What We Offer
                        </span>

                        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                            Practical support for real-world challenges.
                        </h2>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2">
                        {service.offerings.map((offering, index) => (
                            <div
                                key={offering}
                                className="service-offering group relative bg-background p-7 transition-colors duration-300 hover:bg-cream/50 dark:hover:bg-card md:p-9"
                            >
                                <div className="mb-10 flex items-start justify-between">
                                    <span className="font-mono text-sm font-semibold tracking-[0.12em] text-coral">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-coral"
                                    />
                                </div>

                                <p className="max-w-lg font-display text-xl font-semibold leading-8 tracking-[-0.02em] text-foreground md:text-2xl">
                                    {offering}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-forest text-cream section-padding">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-forest-dark p-8 md:p-12 lg:p-16">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/10 blur-3xl"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-coral/10 blur-3xl"
                        />

                        <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                            <div className="max-w-2xl">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                                    Let&apos;s work together
                                </span>

                                <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                                    Ready to explore {service.title}?
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-cream/60 md:text-lg">
                                    Tell us what you are working on and let&apos;s
                                    explore how Focus Africa Leadership can
                                    support your next step.
                                </p>
                            </div>

                            <Link
                                href="/#contact"
                                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral/90"
                            >
                                Discuss this service
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border bg-background">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Link
                        href={`/services/${nextService.slug}`}
                        className="group block py-10 md:py-14"
                    >
                        <div className="flex items-end justify-between gap-8">
                            <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                        Next service
                    </span>

                                <div className="mt-4 flex items-center gap-4">
                        <span className="font-mono text-sm font-semibold text-coral">
                            {nextService.number}
                        </span>

                                    <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-forest dark:group-hover:text-lime md:text-4xl">
                                        {nextService.title}
                                    </h2>
                                </div>
                            </div>

                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-forest transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream dark:text-lime dark:group-hover:border-lime dark:group-hover:bg-lime dark:group-hover:text-forest">
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}