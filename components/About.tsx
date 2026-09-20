"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function About() {
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
                .from(".about-image-frame", {
                    x: -45,
                    opacity: 0,
                    duration: 1,
                })
                .from(
                    ".about-image-accent",
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.65"
                )
                .from(
                    ".about-text-item",
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
            id="about"
            ref={root}
            className="relative overflow-hidden bg-background section-padding"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-32 bg-forest/15 lg:block"
            />

            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
                    <div className="relative lg:pr-8">
                        <div
                            aria-hidden="true"
                            className="about-image-accent absolute -left-5 -top-5 hidden h-full w-full border border-lime/50 lg:block"
                        />

                        <div
                            aria-hidden="true"
                            className="about-image-accent absolute -bottom-7 -right-2 h-24 w-24 bg-coral/15 md:h-32 md:w-32"
                        />

                        <div className="about-image-frame relative">
                            <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-forest p-2 shadow-xl shadow-forest/10">
                                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                                    <Image
                                        src="/images/about.jpg"
                                        alt="Two colleagues having a business conversation in a modern office"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-forest-dark/60 via-transparent to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
                                            Our foundation
                                        </p>

                                        <p className="max-w-xs font-display text-xl font-semibold leading-tight text-cream md:text-2xl">
                                            Local understanding.
                                            <br />
                                            Global perspective.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -right-2 z-10 rounded-xl bg-coral px-5 py-3 shadow-lg shadow-coral/20 md:-right-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                                    Established
                                </p>

                                <p className="mt-1 font-display text-2xl font-bold text-white">
                                    2012
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="about-text-item mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                            Our Journey
                        </span>

                        <h2 className="about-text-item max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance sm:text-5xl lg:text-6xl">
                            Experience that moves{" "}
                            <span className="text-forest">Africa</span>{" "}
                            forward.
                        </h2>

                        <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-brand-muted md:text-lg">
                            <p className="about-text-item">
                                Founded in 2012, Focus Africa Leadership was
                                established with a vision to drive sustainable
                                growth, innovation, and empowerment across
                                Africa&apos;s unique business landscape.
                            </p>

                            <p className="about-text-item">
                                With a strong focus on customer satisfaction
                                and a team of experienced professionals, we
                                combine deep local knowledge with global best
                                practices to deliver practical, lasting
                                results.
                            </p>

                            <p className="about-text-item">
                                Over the years, we have expanded our reach
                                across multiple countries, supporting
                                organizations and communities through
                                strategic solutions, capacity development, and
                                meaningful partnerships.
                            </p>
                        </div>

                        <a
                            href="#services"
                            className="about-text-item group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-forest transition-colors duration-300 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4"
                        >
                            Discover our approach

                            <ArrowRight
                                size={17}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <div className="about-text-item mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
                            <div>
                                <p className="font-display text-2xl font-bold text-forest">
                                    10+
                                </p>

                                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-muted">
                                    Years of insight
                                </p>
                            </div>

                            <div>
                                <p className="font-display text-2xl font-bold text-forest">
                                    Africa
                                </p>

                                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-muted">
                                    Regional focus
                                </p>
                            </div>

                            <div>
                                <p className="font-display text-2xl font-bold text-forest">
                                    360°
                                </p>

                                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-muted">
                                    Strategic view
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}