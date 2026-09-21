"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="fixed inset-x-0 top-0 z-60 h-0.75 accent-line" />

            <header
                className={cn(
                    "fixed inset-x-0 top-0.75 z-50 transition-all duration-300",
                    scrolled
                        ? "border-b border-border/60 bg-background/90 backdrop-blur-xl"
                        : "bg-transparent"
                )}
            >
                <nav
                    className="mx-auto max-w-7xl px-5 md:px-8"
                    aria-label="Main navigation"
                >
                    <div
                        className={cn(
                            "flex items-center justify-between transition-all duration-300",
                            scrolled ? "h-16" : "h-20"
                        )}
                    >
                        <Link
                            href="#home"
                            className="group flex items-center gap-2.5"
                            aria-label="Focus Africa Leadership home"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width={70}
                                height={70}
                                className="h-10 w-10 object-contain md:h-11 md:w-11"
                                priority
                            />

                            <span className="hidden flex-col leading-none lg:flex">
                                <span className="font-display text-base font-bold tracking-tight text-foreground">
                                    Focus Africa
                                </span>

                                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-coral">
                                    Leadership
                                </span>
                            </span>
                        </Link>

                        <div className="hidden items-center gap-8 md:flex">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="group relative text-base font-medium text-foreground/75 transition-colors duration-200 hover:text-forest dark:hover:text-lime"
                                >
                                    {link.label}

                                    <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-coral transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />

                            <a
                                href="#contact"
                                className="hidden items-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-forest-dark hover:scale-[1.02] active:scale-95 sm:inline-flex dark:bg-lime dark:text-forest-dark dark:hover:bg-lime/90"
                            >
                                Get in Touch
                            </a>

                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
                                aria-label={
                                    menuOpen ? "Close menu" : "Open menu"
                                }
                                aria-expanded={menuOpen}
                                aria-controls="mobile-navigation"
                            >
                                {menuOpen ? (
                                    <X size={22} strokeWidth={1.8} />
                                ) : (
                                    <Menu size={22} strokeWidth={1.8} />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <div
                id="mobile-navigation"
                className={cn(
                    "fixed inset-x-0 top-20.75 z-40 md:hidden",
                    "origin-top transition-all duration-300",
                    menuOpen
                        ? "pointer-events-auto scale-y-100 opacity-100"
                        : "pointer-events-none scale-y-95 opacity-0"
                )}
                aria-hidden={!menuOpen}
            >
                <div className="mx-4 overflow-hidden rounded-2xl bg-forest p-6 shadow-2xl dark:border dark:border-cream/10">
                    <div className="flex flex-col">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={toggleMenu}
                                className="border-b border-cream/10 py-4 text-lg font-medium text-cream transition-colors hover:text-lime"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="#contact"
                            onClick={toggleMenu}
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest transition-transform hover:scale-[1.02] active:scale-95"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}