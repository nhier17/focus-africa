"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {ArrowDown, ArrowRight} from "lucide-react";
import Link from "next/link";

export function Hero() {
    const root = useRef<HTMLElement>(null);

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
                .from(".hero-eyebrow", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                })
                .from(
                    ".hero-line",
                    {
                        yPercent: 110,
                        opacity: 0,
                        duration: 0.85,
                        stagger: 0.14,
                    },
                    "-=0.25"
                )
                .from(
                    ".hero-description",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.35"
                )
                .from(
                    ".hero-media",
                    {
                        clipPath: "inset(0 0 100% 0)",
                        duration: 1.1,
                    },
                    "-=0.65"
                )
                .from(
                    ".hero-media-caption",
                    {
                        y: 16,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.5"
                );
        },
        {
            scope: root,
        }
    );

    return (
        <section
            id="home"
            ref={root}
            className="relative overflow-hidden bg-background pt-28 pb-12 md:pt-36 md:pb-24"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />

                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-coral/8 blur-3xl" />

                <div className="absolute right-[8%] top-[18%] hidden h-px w-32 bg-forest/15 lg:block" />

                <div className="absolute right-[8%] top-[18%] hidden h-32 w-px bg-forest/15 lg:block" />
            </div>

            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-center lg:gap-16">

                    <div className="relative z-10">
                        <div className="hero-eyebrow mb-6 flex items-center gap-3 md:mb-7">
                            <span
                                aria-hidden="true"
                                className="h-px w-10 bg-coral"
                            />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-forest md:text-xs md:tracking-[0.2em] dark:text-lime">
                                Strategic consulting across Africa
                            </span>
                        </div>

                        <h1 className="font-display text-[clamp(3rem,13vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.055em] text-foreground sm:text-[clamp(3.25rem,9vw,6.5rem)]">
                            <span className="block overflow-hidden">
                                <span className="hero-line block">
                                    Strategic thinking.
                                </span>
                            </span>

                            <span className="block overflow-hidden">
                                <span className="hero-line block">
                                    <span className="text-forest dark:text-lime">
                                        African
                                    </span>{" "}
                                    perspective.
                                </span>
                            </span>

                            <span className="block overflow-hidden">
                                <span className="hero-line block">
                                    <span className="text-coral">
                                        Lasting
                                    </span>{" "}
                                    impact.
                                </span>
                            </span>
                        </h1>

                        <p className="hero-description mt-6 max-w-xl text-[15px] leading-7 text-brand-muted md:mt-7 md:text-lg md:leading-8">
                            Empowering businesses, individuals, and
                            organizations across Africa with strategic
                            solutions for sustainable growth, stronger
                            leadership, and meaningful transformation.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="#contact"
                                className="hero-cta group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-forest-dark hover:gap-3 active:scale-95"
                            >
                                Talk to us
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            </Link>
                            <Link
                                href="#services"
                                className="hero-cta group inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 dark:border-lime/20 px-7 py-3.5 text-sm font-semibold text-forest dark:text-lime transition-all hover:border-forest dark:hover:border-lime hover:bg-forest/5 dark:hover:bg-lime/5 active:scale-95"
                            >
                                Explore Our Services
                                <ArrowDown
                                    size={16}
                                    className="transition-transform group-hover:translate-y-0.5"
                                />
                            </Link>
                    </div>

                        <div className="mt-12 hidden items-center gap-4 border-t border-border pt-5 sm:flex">
                            <span className="h-2 w-2 rounded-full bg-lime" />

                            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-muted">
                                Strategy
                                <span className="mx-2 text-border">/</span>
                                Leadership
                                <span className="mx-2 text-border">/</span>
                                Transformation
                            </p>
                        </div>
                    </div>

                    <div className="relative lg:pl-4">
                        <div className="hero-accent-circle absolute -top-8 -right-4 md:-right-8 h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-lime/40 z-0" />
                        <div className="hero-accent-circle absolute -bottom-6 -left-4 md:-left-8 h-24 w-24 md:h-28 md:w-28 rounded-full bg-coral/10 z-0" />

                        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl2 bg-forest/8 hidden md:block" />

                        <div className="relative rounded-xl bg-forest p-1.5 shadow-2xl shadow-forest/10 md:p-2">
                            <div className="hero-media relative overflow-hidden rounded-xl aspect-4/5 md:aspect-5/6 lg:aspect-4/5 w-full">
                                <Image
                                    src="/images/hero.png"
                                    alt="Professionals collaborating during a business meeting"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-forest-dark/70 via-forest-dark/5 to-transparent" />

                                <div className="hero-media-caption absolute inset-x-0 bottom-0 p-5 md:p-8">
                                    <div className="flex items-end justify-between gap-5">
                                        <div>
                                            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-lime md:text-[10px]">
                                                Focus Africa Leadership
                                            </p>

                                            <p className="max-w-xs font-display text-lg font-semibold leading-tight text-cream md:text-2xl">
                                                Building stronger leaders
                                                and more resilient
                                                organizations.
                                            </p>
                                        </div>

                                        <div
                                            aria-hidden="true"
                                            className="mb-1 hidden h-10 w-10 shrink-0 rounded-full border border-cream/40 sm:block"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2.5 shadow-lg sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0 sm:px-5 sm:py-3">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <span className="h-2 w-2 rounded-full bg-coral" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest sm:text-xs sm:tracking-[0.16em] dark:text-foreground">
                                    Insight with purpose
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}