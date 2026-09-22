"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Impact() {
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
                .from(".impact-image-frame", {
                    x: -40,
                    opacity: 0,
                    duration: 1,
                })
                .from(
                    ".impact-image-overlay",
                    {
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.6"
                )
                .from(
                    ".impact-text",
                    {
                        y: 28,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.1,
                    },
                    "-=0.55"
                );
        },
        {
            scope: root,
        }
    );

    return (
        <section
            id="impact"
            ref={root}
            className="relative overflow-hidden bg-forest section-padding text-cream mb-5"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-lime/20"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-coral/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid items-stretch gap-14 lg:grid-cols-12 lg:gap-20">
                    <div className="relative lg:col-span-6">
                        <div
                            aria-hidden="true"
                            className="absolute -bottom-5 -left-5 hidden h-32 w-32 bg-lime/20 lg:block"
                        />

                        <div className="impact-image-frame relative h-full">
                            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl border border-cream/15 bg-cream/10 p-2 shadow-2xl shadow-black/10">
                                <div className="relative h-full w-full overflow-hidden rounded-xl">
                                    <Image
                                        src="/images/impact.jpg"
                                        alt="Aerial view of Nairobi's bustling cityscape with modern architecture"
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />

                                    <div className="impact-image-overlay absolute inset-0 bg-linear-to-t from-forest-dark/75 via-forest-dark/10 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
                                            Regional perspective
                                        </p>

                                        <p className="mt-2 max-w-sm font-display text-xl font-semibold leading-tight text-cream md:text-2xl">
                                            Progress shaped by the realities
                                            of the communities we serve.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <span className="impact-text mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                            Our Impact
                        </span>

                        <h2 className="impact-text max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-cream text-balance sm:text-5xl lg:text-6xl">
                            <span className="block">Local insight.</span>
                            <span className="block text-lime">
                                Regional reach.
                            </span>
                            <span className="block">
                                <span className="text-coral">Lasting</span>{" "}
                                value.
                            </span>
                        </h2>

                        <p className="impact-text mt-7 max-w-xl text-base leading-8 text-cream/70 md:text-lg">
                            We work alongside organizations and communities to
                            turn ideas into practical solutions, strengthen
                            institutions, and create measurable progress
                            across Africa.
                        </p>

                        <div className="impact-text mt-10 grid max-w-xl grid-cols-2 border-y border-cream/15 py-6">
                            <div className="border-l border-cream/15 px-4">
                                <p className="font-display text-3xl font-bold text-lime md:text-4xl">
                                    14+
                                </p>

                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-cream/55 md:text-xs">
                                    Years of Excellence
                                </p>
                            </div>

                            <div className="border-l border-cream/15 pl-4">
                                <p className="font-display text-3xl font-bold text-lime md:text-4xl">
                                    128+
                                </p>

                                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-cream/55 md:text-xs">
                                    Projects
                                </p>
                            </div>
                        </div>

                        <div className="impact-text mt-8 flex items-start gap-3">
                            <span
                                aria-hidden="true"
                                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral"
                            />

                            <p className="max-w-md text-sm leading-7 text-cream/65">
                                Sustainable impact begins with understanding
                                context, building trust, and creating solutions
                                that can endure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}