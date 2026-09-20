"use client";

import { NAV_LINKS, SERVICE_LINKS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-forest-dark text-cream">
            <div className="h-0.5 accent-line" />

            <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4">
                        <Link
                            href="/"
                            className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Focus Africa Leadership"
                                width={100}
                                height={100}
                                className="h-12 w-12 object-contain md:h-14 md:w-14"
                                priority
                            />
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-cream/60">
                            Strategic consulting and leadership solutions
                            empowering Africa&apos;s future through innovation,
                            expertise, and sustainable growth.
                        </p>

                        <address className="mt-7 not-italic">
                            <div className="space-y-2 text-sm leading-6 text-cream/80">
                                <p>
                                    Karson Photo House, Kimathi Way, 1st Floor, Nyeri
                                </p>

                                <p>
                                    P.O. Box 762-10100
                                </p>

                                <a
                                    href="tel:+254706193987"
                                    className="block transition-colors duration-300 hover:text-lime"
                                >
                                    0706 193 987
                                </a>

                                <a
                                    href="mailto:info@focusafrica.co.ke"
                                    className="block transition-colors duration-300 hover:text-lime"
                                >
                                    info@focusafrica.co.ke
                                </a>

                                <p className="pt-1 text-cream/50">
                                    Monday to Friday, 8:00am to 5:00pm
                                </p>
                            </div>
                        </address>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
                            Explore
                        </h4>

                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-cream/70 transition-colors duration-300 hover:text-lime"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
                            Services
                        </h4>

                        <ul className="space-y-3">
                            {SERVICE_LINKS.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#services"
                                        className="text-sm text-cream/70 transition-colors duration-300 hover:text-lime"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
                            Connect
                        </h4>

                        <div className="mt-7 flex items-center gap-3">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-all duration-300 hover:scale-105 hover:border-lime hover:text-lime"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>

                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 md:flex-row">
                    <p className="text-xs text-cream/40">
                        © {new Date().getFullYear()} Focus Africa Leadership.
                        All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="text-xs text-cream/40 transition-colors duration-300 hover:text-lime"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="text-xs text-cream/40 transition-colors duration-300 hover:text-lime"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}