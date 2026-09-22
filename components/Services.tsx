"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { SERVICES } from "@/lib/service";
import { SectionHeading } from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
    const root = useRef<HTMLElement>(null);

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
                .from(".services-heading", {
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                })
                .from(
                    ".service-card",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.65,
                        stagger: 0.1,
                    },
                    "-=0.3"
                );
        },
        {
            scope: root,
        }
    );

    return (
        <section
            id="services"
            ref={root}
            className="relative overflow-hidden bg-cream/40 py-20 dark:bg-card/30 md:py-28"
        >
            {/* Decorative background elements */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full border border-lime/30"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-coral/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <SectionHeading
                    className="services-heading mb-12 max-w-3xl md:mb-16"
                    eyebrow="What We Do"
                    title={
                        <>
                            Solutions designed for{" "}
                            <span className="text-forest dark:text-lime">
                                sustainable growth.
                            </span>
                        </>
                    }
                    description="We combine strategic insight, practical expertise, and local knowledge to help organizations navigate complexity, build capability, and create lasting value."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="service-card group block"
                        >
                            <article className="relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-card">
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-forest-dark/75 via-forest-dark/10 to-transparent" />

                                    {/* Number */}
                                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-cream/95 text-xs font-bold text-forest shadow-sm backdrop-blur-sm dark:bg-forest-dark/90 dark:text-lime">
                                        {service.number}
                                    </div>

                                    {/* Image label */}
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <p className="max-w-xs font-display text-xl font-bold leading-tight text-cream md:text-2xl">
                                            {service.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex min-h-[235px] flex-col p-6 md:p-7">
                                    <p className="line-clamp-3 text-sm leading-7 text-brand-muted">
                                        {service.tagline}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-8">
                                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest transition-colors duration-300 group-hover:text-coral dark:text-lime">
                                            Explore service
                                        </span>

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-forest transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream dark:text-lime dark:group-hover:bg-lime dark:group-hover:text-forest">
                                            <ArrowUpRight
                                                size={17}
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </span>
                                    </div>
                                </div>

                                {/* Hover accent */}
                                <div
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-0 h-1 w-0 bg-coral transition-all duration-500 group-hover:w-full"
                                />
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 flex items-center gap-3">
                    <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-coral"
                    />

                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-muted">
                        Practical expertise. Regional insight. Measurable
                        progress.
                    </p>
                </div>
            </div>
        </section>
    );
}