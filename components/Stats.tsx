import { STATS } from "@/constants";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function Stats() {
    return (
        <section className="relative bg-forest section-padding overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #F7F0E4 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container-custom relative">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`relative flex flex-col items-center text-center  ${
                                i !== STATS.length - 1
                                    ? "sm:border-r sm:border-cream/15"
                                    : ""
                            }`}
                        >
                            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-lime leading-none">
                                <AnimatedCounter
                                    target={stat.target}
                                    suffix={stat.suffix}
                                />
                            </span>

                            <span className="mt-4 text-xs md:text-sm font-medium uppercase tracking-[0.16em] text-cream/70">
                                {stat.label}
                            </span>

                            <span className="mt-5 h-px w-8 bg-lime/50" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}