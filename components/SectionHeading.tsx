import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    align?: "left" | "center";
    className?: string;
    eyebrowClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export function SectionHeading({
                                   eyebrow,
                                   title,
                                   description,
                                   align = "left",
                                   className,
                                   eyebrowClassName,
                                   titleClassName,
                                   descriptionClassName,
                               }: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4",
                align === "center" && "items-center text-center",
                className
            )}
        >
            <span
                className={cn(
                    "text-xs font-semibold uppercase tracking-[0.2em] text-coral",
                    eyebrowClassName
                )}
            >
                {eyebrow}
            </span>

            <h2
                className={cn(
                    "font-display text-display-lg font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance",
                    titleClassName
                )}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={cn(
                        "max-w-2xl text-base leading-8 text-brand-muted md:text-lg",
                        align === "center" && "mx-auto",
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}