"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, ArrowRight, Check} from "lucide-react";
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
    const previousService =  SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];

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
                .from(".service-page-eyebrow", {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                })
                .from(
                    ".service-page-title",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.25"
                )
                .from(
                    ".service-page-intro",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.3"
                )
                .from(
                    ".service-page-image",
                    {
                        clipPath: "inset(0 0 100% 0)",
                        duration: 0.9,
                    },
                    "-=0.4"
                )
                .from(
                    ".service-page-image img",
                    {
                        scale: 1.08,
                        duration: 1.1,
                    },
                    "<"
                );

            gsap.from(".service-content", {
                scrollTrigger: {
                    trigger: ".service-content",
                    start: "top 78%",
                    once: true,
                },
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
            });

            gsap.from(".service-offering", {
                scrollTrigger: {
                    trigger: ".service-offerings",
                    start: "top 78%",
                    once: true,
                },
                y: 20,
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
            <section className="relative bg-background pb-16 pt-28 md:pb-24 md:pt-36">
                <div className="container-custom">
                    <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <div>
                            <div className="service-page-eyebrow mb-6 flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-px w-10 bg-coral"
                                />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest dark:text-lime">
                                    What We Offer
                                </span>
                            </div>

                            <h1 className="service-page-title max-w-3xl font-display text-[clamp(3.2rem,7vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.055em] text-foreground">
                                Comprehensive{" "}
                                <span className="text-coral">
                                    consultancy services
                                </span>
                            </h1>

                            <p className="service-page-intro mt-7 max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
                                Every organisation we work with is trying to
                                do something that matters. Our job is to make
                                it easier and to help you show it worked.
                                Here&apos;s how we can support you.
                            </p>
                        </div>

                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-lime/60"
                            />

                            <div className="service-page-image relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-forest p-1.5 shadow-2xl shadow-forest/10 md:p-2">
                                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5">
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
                                            Focus Africa Leadership
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-border bg-cream/40 dark:bg-card/30 section-padding">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="font-display text-5xl font-bold tracking-[-0.05em] text-coral md:text-6xl">
                                    {service.number}
                                </span>

                                <span className="h-px w-12 bg-coral" />
                            </div>

                            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
                                Selected Service
                            </p>
                        </div>

                        <div className="service-content">
                            <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-foreground md:text-5xl lg:text-6xl">
                                {service.title}
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-9 text-brand-muted md:text-xl md:leading-10">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-offerings bg-background section-padding">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                                What We Do
                            </span>

                            <h3 className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight tracking-[-0.035em] text-foreground md:text-4xl">
                                Practical support for real-world challenges.
                            </h3>
                        </div>

                        <div className="grid gap-x-10 border-t border-border md:grid-cols-2">
                            {service.offerings.map(
                                (offering, index) => (
                                    <div
                                        key={offering}
                                        className="service-offering group flex gap-5 border-b border-border py-7"
                                    >
                                        <span className="shrink-0 font-mono text-xs font-semibold tracking-[0.15em] text-brand-muted">
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <div className="flex gap-4">
                                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition-transform duration-300 group-hover:scale-110 dark:bg-lime dark:text-forest">
                                                <Check
                                                    size={13}
                                                    strokeWidth={2.5}
                                                />
                                            </span>

                                            <p className="text-base leading-7 text-foreground md:text-lg">
                                                {offering}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-forest text-cream section-padding">
                <div className="container-custom">
                    <div className="relative overflow-hidden rounded-[2rem] bg-forest-dark px-7 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime/10 blur-3xl"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-coral/10 blur-3xl"
                        />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div className="max-w-2xl">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                                    Get Started
                                </span>

                                <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                                    Let&apos;s discuss how we can help.
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-cream/65 md:text-lg">
                                    Tell us about your organisation, your
                                    challenges, and what you are working
                                    towards. Let&apos;s explore how this
                                    service can support your goals.
                                </p>
                            </div>

                            <Link
                                href="/contacts"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral/90"
                            >
                                Get Started
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border bg-background section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2">
                        <Link
                            href={`/services/${previousService.slug}`}
                            className="group border-b border-border py-8 md:border-b-0 md:border-r md:pr-10 md:py-12"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                                Previous Service
                            </span>

                            <div className="mt-4 flex items-center justify-between gap-6">
                                <div>
                                    <span className="font-mono text-xs text-coral">
                                        {previousService.number}
                                    </span>

                                    <p className="mt-2 max-w-sm font-display text-xl font-bold tracking-[-0.02em] text-foreground md:text-2xl">
                                        {previousService.title}
                                    </p>
                                </div>

                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream dark:group-hover:border-lime dark:group-hover:bg-lime dark:group-hover:text-forest">
                                    <ArrowLeft
                                        size={17}
                                        className="transition-transform duration-300 group-hover:-translate-x-1"
                                    />
                                </span>
                            </div>
                        </Link>

                        <Link
                            href={`/services/${nextService.slug}`}
                            className="group py-8 md:py-12 md:pl-10"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                                Next Service
                            </span>

                            <div className="mt-4 flex items-center justify-between gap-6">
                                <div>
                                    <span className="font-mono text-xs text-coral">
                                        {nextService.number}
                                    </span>

                                    <p className="mt-2 max-w-sm font-display text-xl font-bold tracking-[-0.02em] text-foreground md:text-2xl">
                                        {nextService.title}
                                    </p>
                                </div>

                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream dark:group-hover:border-lime dark:group-hover:bg-lime dark:group-hover:text-forest">
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}