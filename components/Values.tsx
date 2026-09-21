"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { VALUES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export function Values() {
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
                    start: "top 75%",
                    once: true,
                },
                defaults: {
                    ease: "power3.out",
                },
            });

            timeline
                .from(".values-heading", {
                    y: 30,
                    opacity: 0,
                    duration: 0.75,
                })
                .from(
                    ".value-row",
                    {
                        y: 28,
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
            id="values"
            ref={root}
            className="relative overflow-hidden bg-background section-padding"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-lime/30"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-coral/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="values-heading mb-14 max-w-3xl md:mb-20">
                    <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                        Our Values
                    </span>

                    <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance sm:text-5xl lg:text-6xl">
                        Why organizations choose{" "}
                        <span className="text-coral">Focus Africa.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
                        Our work is guided by principles that turn strategic
                        thinking into trusted relationships, practical action,
                        and lasting progress.
                    </p>
                </div>

                <div className="values-list">
                    <div className="border-t border-border">
                        {VALUES.map((value, index) => (
                            <article
                                key={value.number}
                                className={`value-row group relative grid grid-cols-1 gap-6 border-b border-border py-8 transition-colors duration-500 md:grid-cols-12 md:gap-8 md:py-10 ${
                                    index === 0
                                        ? "bg-cream/40 dark:bg-card/60"
                                        : "hover:bg-cream/40 dark:hover:bg-card/40"
                                }`}
                            >
                                <div className="md:col-span-2">
                                    <span
                                        className={`font-display text-4xl font-bold tracking-tighter transition-colors duration-500 md:text-5xl ${
                                            index === 0
                                                ? "text-coral"
                                                : "text-border group-hover:text-coral"
                                        }`}
                                    >
                                        {value.number}
                                    </span>
                                </div>

                                <div className="md:col-span-4">
                                    <h3 className="max-w-sm font-display text-2xl font-bold leading-tight tracking-tight text-forest dark:text-foreground transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                                        {value.title}
                                    </h3>
                                </div>

                                <div className="flex items-start justify-between gap-6 md:col-span-6">
                                    <p className="max-w-lg text-base leading-8 text-brand-muted md:text-lg">
                                        {value.description}
                                    </p>

                                    <span
                                        aria-hidden="true"
                                        className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-forest/40 dark:text-cream/40 transition-all duration-500 group-hover:border-coral group-hover:text-coral md:flex"
                                    >
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </span>
                                </div>

                                <div
                                    aria-hidden="true"
                                    className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
                                        index === 0
                                            ? "w-16 bg-coral"
                                            : "w-0 bg-lime group-hover:w-16"
                                    }`}
                                />
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex max-w-2xl items-start gap-4 md:mt-16">
                    <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime"
                    />

                    <p className="text-sm leading-7 text-brand-muted md:text-base">
                        We believe meaningful progress happens when insight,
                        integrity, and action work together.
                    </p>
                </div>
            </div>
        </section>
    );
}