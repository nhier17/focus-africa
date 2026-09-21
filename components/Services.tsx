"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { SERVICES } from "@/constants";
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
                    start: "top 72%",
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
                    duration: 0.75,
                })
                .from(
                    ".service-row",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.65,
                        stagger: 0.1,
                    },
                    "-=0.35"
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
            className="relative overflow-hidden bg-cream/40 dark:bg-card/30 section-padding"
        >
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
                    className="services-heading mb-14 max-w-3xl md:mb-16"
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

                <div className="overflow-hidden rounded-4xl border border-border bg-border shadow-sm">
                    <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service, index) => (
                            <article
                                key={service.number}
                                className={`service-row group relative flex min-h-[280px] flex-col justify-between bg-background dark:bg-card/70 p-7 transition-colors duration-500 md:p-8 ${
                                    index === 0
                                        ? "bg-forest dark:bg-forest-dark text-cream hover:bg-forest-dark dark:hover:bg-forest"
                                        : "hover:bg-forest dark:hover:bg-forest"
                                }`}
                            >
                                <div>
                                    <div className="mb-12 flex items-start justify-between">
                                        <span
                                            className={`font-display text-2xl font-bold transition-colors duration-500 ${
                                                index === 0
                                                    ? "text-lime"
                                                    : "text-forest/25 dark:text-cream/25 group-hover:text-lime"
                                            }`}
                                        >
                                            {service.number}
                                        </span>

                                        <span
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                                                index === 0
                                                    ? "border-cream/25 text-lime"
                                                    : "border-border text-forest/40 dark:text-cream/40 group-hover:border-cream/25 group-hover:text-lime"
                                            }`}
                                        >
                                            <ArrowUpRight
                                                size={18}
                                                aria-hidden="true"
                                                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </span>
                                    </div>

                                    <h3
                                        className={`max-w-xs font-display text-xl font-bold leading-tight transition-colors duration-500 md:text-2xl ${
                                            index === 0
                                                ? "text-cream"
                                                : "text-foreground group-hover:text-cream"
                                        }`}
                                    >
                                        {service.title}
                                    </h3>
                                </div>

                                <p
                                    className={`mt-8 max-w-sm text-sm leading-7 transition-colors duration-500 ${
                                        index === 0
                                            ? "text-cream/70"
                                            : "text-brand-muted group-hover:text-cream/70"
                                    }`}
                                >
                                    {service.description}
                                </p>

                                <div
                                    aria-hidden="true"
                                    className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                                        index === 0
                                            ? "bg-coral"
                                            : "bg-lime"
                                    }`}
                                />
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-3">
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