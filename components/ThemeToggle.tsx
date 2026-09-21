"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
    className?: string;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { setTheme, resolvedTheme } = useTheme();
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    if (!mounted) {
        return (
            <div
                className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50",
                    className
                )}
                aria-hidden="true"
            >
                <div className="h-4 w-4" />
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={cn(
                "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground transition-all duration-300 hover:border-lime/60 hover:bg-forest/10 hover:text-forest dark:hover:border-lime/60 dark:hover:bg-lime/10 dark:hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral shadow-xs cursor-pointer",
                className
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <Sun
                className={cn(
                    "h-4.5 w-4.5 transition-transform duration-500",
                    isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-500"
                )}
                strokeWidth={2}
            />
            <Moon
                className={cn(
                    "absolute h-4.5 w-4.5 transition-transform duration-500",
                    isDark ? "rotate-0 scale-100 opacity-100 text-lime" : "-rotate-90 scale-0 opacity-0"
                )}
                strokeWidth={2}
            />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
