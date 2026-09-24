"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    HeartHandshake,
    Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
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
                start: "top 80%",
                once: true,
            },
            defaults: {
                ease: "power3.out",
            },
        });

        timeline
            // Badge
            .from(".cta-badge", {
                y: 18,
                opacity: 0,
                duration: 0.5,
            })

            // Heading
            .from(
                ".cta-heading",
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.75,
                },
                "-=0.25"
            )

            // Paragraph
            .from(
                ".cta-description",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.55,
                },
                "-=0.45"
            )

            // Buttons
            .from(
                ".cta-actions",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.55,
                },
                "-=0.3"
            )

            // Image
            .from(
                ".cta-image",
                {
                    x: 40,
                    opacity: 0,
                    scale: 1.04,
                    duration: 0.9,
                },
                "-=0.45"
            );
    },
    {
        scope: root,
    }
);

return (
    <section ref={root} className="section-padding">
        <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl bg-forest shadow-2xl">
                <div className="grid md:grid-cols-2">
                    <div className="flex flex-col justify-center p-10 sm:p-12 md:p-14 lg:p-16">
                        <span className="cta-text block text-xs font-semibold uppercase tracking-[0.22em] text-lime mb-6"> Get Started </span>

                        <h2 className="cta-heading max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-cream text-balance sm:text-5xl lg:text-6xl">
                            Ready to transform{" "}
                            <span className="text-lime">
                                your organisation?
                            </span>
                        </h2>

                        <p className="cta-description mt-6 max-w-lg text-base leading-7 text-cream/70 md:text-lg">
                            Partner with us to bring your vision to life
                            and create lasting impact across Africa.
                        </p>

                        <div className="cta-actions mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                className="group h-12 rounded-xl bg-cream px-5 text-forest shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/90 hover:shadow-xl"
                            >
                                <Link
                                    href="/contacts"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <HeartHandshake className="h-5 w-5" />
                                    Schedule a Consultation
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-xl border-cream/30 bg-transparent px-5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-white/10 hover:text-cream"
                            >
                                <Link href="/#services">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="cta-image relative min-h-[320px] overflow-hidden sm:min-h-[380px] md:min-h-[430px]">
                        <Image
                            src="/images/contact.jpg"
                            alt="A partnership handshake between Focus Africa Leadership advisors and a client"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-r from-forest/25 via-transparent to-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}
